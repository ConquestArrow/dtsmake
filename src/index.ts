/// <reference path="../typings/tsd.d.ts" />


/**
 * dtsmake command line interface
 */
 
import * as program from "commander";
import {dtsmake} from "./dtsmake";
import * as child_process from "child_process";
var myPackage = require("../package.json");


var srcFiles = (val:string):string[]=>{
	return val.split(",");
};
var plugins = (val:string):string[]=>{
	return val.split(",");
}
//var distDir:string = "";
var defFiles = function(val:string):string[]{
	return val.split(",");
}
var extraFiles = function(val:string):string[]{
	console.log("[EXTRA]"+val);
	return val.split(",");
}

var libDTSs = (val:string):string[]=>{
	return val.split(",");
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
	.option("-s, --src <path>", "[MUST] target javascript file path", srcFiles)
	.option("--dist [value]", "outout d.ts file path. no need `.d.ts` file extension.")
	
	// ternjs bridge options
	.option("-n, --n [value]", "module name")
	.option("-p, --plugin <names>", "tern.js plugin. see tern.js server plugin(http://ternjs.net/doc/manual.html#plugins)", plugins)
	.option("-d, --def <paths>","tern.js def files. DEFAULT:'ecma5'", defFiles)
	.option("-x, --extrafiles <paths>", "sample files for target js lib. help for ternjs type inference.", extraFiles)
	
	// dtsmake options
	.option("-D, --debug", "debug output mode")
	.option("-A, --voidAsAny", "force output `void` to `any`")
	.option("-i, --interfaceSameNameVar", "export a namespace property same with a interface name", true)
	.option("-a, --annotateTypeInstance", "annotate interface's constructor type as return type instance", true)
	.option("-g, --globalObject [value]", `how to export objects that same name with JS Global Object; "remove" or "wrap" or "rename"; DEFAULT:"wrap" `)
	.option("-N, --NodeJSModule", "nodejs module special replace")
	.option("-e, --export", "add export statement in a bottom of d.ts file")
	.option("-S, --exportStyle [value]", `if --outExport true, select export style "es6" or "legacy"`)
	.option("-M, --exportModuleName [value]", 'exporting module name. ex. "EXAMPLE"; usage `import example = require("EXAMPLE");`')
	.option("-l, --lib <paths>", "add referrece path d.ts files. ex. `--lib path/to/ex1.d.ts,path/to/ex2.d.ts`", libDTSs)
	
	.parse(process.argv);


if(!(<any>program).src) {
	console.warn("--src option is MUST.");
	program.help();
}
else if((<any>program).exportStyle && !(<any>program).export){
	console.warn("--exportStyle option needs --export option.")
	process.exit(1);
}
else if((<any>program).exportModuleName && !(<any>program).export){
	console.warn("--exportModuleName option needs --export option.")
	process.exit(1);
}

/**
 * 
 * `tern/bin/condense [--name name] [--plugin name]* [--def name]* [+extrafile.js]* [file.js]+`
 */
var genCommand = ()=>{
	var s = "";
	s = `node "${__dirname}/../node_modules/tern/bin/condense"`;
	s += (<any>program).n ? ` --name ${(<any>program).n}` : "";
	//s += (<any>program).plugin ? ` --plugin ${(<any>program).plugin.join(" ")}` : "";
	if((<any>program).plugin){
		for(let i in (<any>program).plugin){
			s += ` --plugin ${(<any>program).plugin[i]}`;
		}
	}
	//s += (<any>program).def ? ` --def ${(<any>program).def.join(" ")}` : "";
	if((<any>program).def){
		for(let i in (<any>program).def){
			s += ` --def ${(<any>program).def[i]}`;
		}
	}
	s += (<any>program).extrafiles ? ` +${(<any>program).extrafiles.join(" +")}` : "";
	s += " " + (<any>program).src.join(" ");
	s += " --no-spans";	
	
	console.log(`${program.name()} started.`);
	console.log("[CMD]"+s);
	console.log("[SRC]"+(<any>program).src.join(" "));
	return s;
}


/**
 * exec tern/bin/condense
 */ 

var child = child_process.exec(
	genCommand(),
	{maxBuffer: 1000000*2048},
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
			if((<any>program).debug)console.log(stdout.toString("utf8"));
			
			//
			let dg = new dtsmake.DTSMake();
			let op:dtsmake.Option = 
			{
				isDebug: (<any>program).debug,
				isOutVoidAsAny: (<any>program).voidAsAny,
				isAnnotateTypeInstance: (<any>program).annotateTypeInstance,
				isExportInterfaceSameNameVar: (<any>program).interfaceSameNameVar,
				isNodeJsModule: (<any>program).NodeJSModule,
				isOutExport: (<any>program).export,
			};
			if((<any>program).exportStyle) op.exportStyle = (<any>program).exportStyle;
			if((<any>program).exportModuleName) op.exportModuleName = (<any>program).exportModuleName;
			if((<any>program).globalObject) op.globalObject = (<any>program).globalObject;
			if((<any>program).lib) op.lib = (<any>program).lib;
			
			dg.main(
				stdout.toString(),
				(<any>program).dist ? (<any>program).dist : (<any>program).src.toString().replace(/\.[a-z0-9]+$/,""),
				op
			);
		}
	}
);

