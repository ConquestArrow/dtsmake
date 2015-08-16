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
				child_process.exec(
					"tsc "+op.dist+".d.ts",
					function(e2,s2,se2){
						if(e2) throw Error(e2.message);
						else if(se2) throw Error(se2.toString());
						else{
							console.log(op.src+ " 's d.ts check complete.");
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