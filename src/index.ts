/// <reference path="../typings/tsd.d.ts" />


/**
 * dtsgen command line interface
 */
 
import * as program from "commander";
import {dtsgen} from "dtsgen";
import * as child_process from "child_process";
var myPackage = require("../package.json");


var srcFiles = (val:string):string[]=>{
	return val.split(" ");
};
//var distDir:string = "";
var defFiles = function(val:string):string[]{
	return val.split(" ");
}
var extraFiles = function(val:string):string[]{
	console.log("[EXTRA]"+val);
	return val.split("+");
}


program
	.version(myPackage.version, "-v, --version")
	// command
	/*
	.command("gen [srcFiles...] <distDir>")
	.action((src:string[], dist:string)=>{
		src
			.map((v,i,a)=>{
				console.log(`srcFiles[${i}]:${v.toString()}\n`);
			});
		console.log(`distDir: ${dist}`);
		srcFiles = src;
		distDir = dist;
	})*/ 
	.option("-s, --src <paths>", "[MUST] target javascript files paths", srcFiles)
	.option("--dist [value]", "outout d.ts file path")
	
	// ternjs bridge options
	.option("-n, --n [value]", "module name")
	.option("-p, --plugin [value]", "tern.js plugin")
	.option("-d, --def <paths>","tern.js def files. DEFAULT:'ecma5'", defFiles)
	.option("-x, --extrafiles <paths>", "sample files for target js lib. help for ternjs type inference.", extraFiles)
	
	// dtsgen options
	.option("-D, --debug", "debug output mode")
	.option("-A, --voidAsAny", "force output `void` to `any`")
	.option("-i, --interfaceSameNameVar", "export a namespace property same with a interface name", true)
	.option("-a, --annotateTypeInstance", "annotate interface's constructor type as return type instance", true)
	.option("-N, --NodeJSModule", "nodejs module special replace")
	.option("-e, --export", "add export statement in a bottom of d.ts file")
	.option("-s, --exportStyle [value]", `if --outExport true, select export style "es6" or "legacy"`, "legacy")
	.option("-M, --exportModuleName [value]", 'exporting module name. ex. "EXAMPLE"; usage `import example = require("EXAMPLE");`')
	
	.parse(process.argv);


if(!(<any>program).src) {
	console.warn("--src option is MUST.");
	program.help();
}
else if((<any>program).exportStyle && !(<any>program).isOutExport){
	console.warn("--exportStyle option needs --export option.")
	process.exit(1);
}
else if((<any>program).exportModuleName && !(<any>program).isOutExport){
	console.warn("--exportModuleName option needs --export option.")
	process.exit(1);
}

/**
 * 
 * `tern/bin/condense [--name name] [--plugin name]* [--def name]* [+extrafile.js]* [file.js]+`
 */
var genCommand = ()=>{
	var s = "";
	s = `node ./node_modules/tern/bin/condense`;
	s += (<any>program).n ? ` --name ${(<any>program).n}` : "";
	s += (<any>program).plugin ? ` --plugin ${(<any>program).plugin}` : "";
	s += (<any>program).def ? ` --def ${(<any>program).def}` : "";
	s += (<any>program).extrafiles ? ` +${(<any>program).extrafiles.join(" +")}` : "";
	s += " " + (<any>program).src.join(" ");
	
	console.log(program.name());
	console.log("[CMD]"+s);
	console.log("[SRC]"+(<any>program).src.join(" "));
	return s;
}


/**
 * exec tern/bin/condense
 */ 

var child = child_process.exec(
	genCommand(),
	{maxBuffer: 1000*1024},
	(err:Error, stdout:Buffer, stderr:Buffer)=>{
		if(err){
			console.warn("[INFO] tern/condense error");
			console.error(err.toString());
			return;
		}
		else if(stderr){
			console.warn("[INFO] tern/condense error");
			console.error(stderr.toString());
			return;
		}
		else{
			console.log(stdout.toString("utf8"));
			
			//
			let dg = new dtsgen.DTSGen();
			let op:dtsgen.Option = 
			{
				isDebug: (<any>program).debug,
				isOutVoidAsAny: (<any>program).voidAsAny,
				isAnnotateTypeInstance: (<any>program).annotateTypeInstance,
				isExportInterfaceSameNameVar: (<any>program).interfaceSameNameVar,
				isNodeJsModule: (<any>program).NodeJSModule,
				isOutExport: (<any>program).export
			};
			if((<any>program).exportStyle) op.exportStyle = (<any>program).exportStyle;
			if((<any>program).exportModuleName) op.exportModuleName = (<any>program).exportModuleName;
			
			dg.main(
				stdout.toString(),
				(<any>program).dist,
				op
			);
		}
	}
);

