#!/usr/bin/env node

/**
 * exapmle tests
 */
 var child_process = require("child_process");
 
 function exTest(
	 op
 ){
	if(!op.src)throw Error();
	
	var cmd = "node ./node_modules/dtsgen/bin/dtsgen";
	cmd += " -s "+op.src;
	cmd += " --dist "+op.dist;
	cmd += op.plugin ? " -p "+op.plugin : "";
	cmd += op.name ? " -n "+op.name : "";
	cmd += op.isExport ? " -e " : "";
	cmd += op.exportStyle ? " -S '"+op.exportStyle+"'" : "";
	cmd += op.exportModuleName ? " -M '"+op.exportModuleName+"'" : "";
	cmd += op.debug ? " -D " : "";
	cmd += op.extrafiles ? " -x "+op.extrafiles : "";
	cmd += op.NodeJSModule ? " -N " : "";
	
	child_process.exec(
		//cmd
		cmd,
		//callback
		function(e,s,se){
			if(e || se){
				if(e) console.log(e.message);
				if(se) console.log(se.toString());
				throw Error("example test failed.");
			}
			else{
				console.log("[dtsgen extest] "+op.dist+".d.ts file output complete.")
				child_process.exec(
					"tsc "+op.dist+".d.ts",
					function(e2,s2,se2){
						if(e2) throw Error(e2.message);
						else if(se2) throw Error(se2.toString());
						else{
							console.log("[dtsgen extest] "+op.src+ " 's d.ts tsc check complete.");
						}
					}
				);
			}
		}
	);
 }
 
/*
 * tests
 */

//simple
exTest({
	src:"./src/mylib.js", 
	dist:"./dist/mylib", 
	name:"mylib", 
	isExport:true,
	exportStyle:"legacy", 
	exportModuleName:"mylib"
});
//tern.js
exTest({
	src:"../node_modules/tern/lib/tern.js", 
	dist:"./dist/tern", 
	name:"tern", 
	//debug:true,
	plugin:"node",
	isExport:true, 
	exportStyle:"legacy", 
	exportModuleName:"tern/lib/tern",
	NodeJSModule:true,
	extrafiles:"../node_modules/tern/plugin/angular.js,../node_modules/tern/plugin/component.js,../node_modules/tern/plugin/doc_comment.js,../node_modules/tern/plugin/node.js,../node_modules/tern/plugin/requirejs.js"
});
//sinon.js
exTest({
	src:"../node_modules/sinon/pkg/sinon.js", 
	dist:"./dist/sinon", 
	name:"sinon", 
	//debug:true,
	//plugin:"node",
	isExport:true, 
	exportStyle:"legacy", 
	exportModuleName:"sinon",
	//NodeJSModule:true,
	//extrafiles:"../node_modules/tern/plugin/angular.js,../node_modules/tern/plugin/component.js,../node_modules/tern/plugin/doc_comment.js,../node_modules/tern/plugin/node.js,../node_modules/tern/plugin/requirejs.js"
});
//clone.js
exTest({
	src:"../node_modules/clone/clone.js",
	dist:"./dist/clone",
	name:"clone",
	//plugin:"node",
	isDebug:true,
	//isExport:true,
	//exportStyle:"legacy",
	//exportModuleName:"clone"//,
	//NodeJSModule:true,
	//extrafiles:"../node_modules/clone/test.js"
})
/*
//currently error, class/interface with deep namespace unsupported.
// typescript >= 1.6 will be not grammer error, because of the "local class" support.
exTest({
	src:"./src/deeplib.js", 
	dist:"./dist/deeplib", 
	name:"deeplib",
	debug:true
});
*/