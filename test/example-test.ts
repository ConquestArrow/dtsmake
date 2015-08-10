/// <reference path="../typings/tsd.d.ts" />

import * as assert from 'power-assert';
import * as sinon from 'sinon';
import {dtsgen} from '../src/dtsgen';
import * as fs from 'fs';

describe("Example js file tests", ()=>{
	
	let dg:dtsgen.DTSGen;
	beforeEach(()=>{
		dg = new dtsgen.DTSGen();
	});
	
	
	
	
	context("infer.js test", ()=>{
		it("condenced infer.js json file to d.ts file",()=>{
			assert.ifError(
				dg.main(
					"./sample/infer.js.json",
					"./test/.tmp/infer",
					{
						isOutVoidAsAny:true,
						isOutExport:false,
						exportModuleName:"infer"
					}
				)
			);
			assert(dg.option.isAnnotateTypeInstance === true,"annotaion opition");
			assert(dg.option.isOutVoidAsAny === true, "is out void as any");
		});
	});
	
	context("tern.js test", ()=>{
		it("condenced tern.js json file to d.ts file",()=>{
			assert.ifError(
				dg.main(
					"./sample/tern.js.json",
					"./test/.tmp/tern"
					,
					{
						isNodeJsModule:true,
						isOutExport:true,
						exportModuleName:"tern/lib/tern",
						exportStyle:"legacy"
					}
				)
			);
			assert(dg.option.isAnnotateTypeInstance === true,"annotaion opition");
			assert(dg.option.isOutVoidAsAny === false, "is out void as any");
		});
	});
	
});