/// <reference path="../typings/tsd.d.ts" />

import * as assert from 'power-assert';
import {dtsgen} from '../src/dtsgen';
import * as fs from 'fs';

describe("File manipulation tests", ()=>{
	let dg = new dtsgen.DTSGen();
	
	context("load a JSON file", ()=>{
		
		it("should load a real json file",(done)=>{
			dg.loadTernJson("sample/infer.js.json",(data:JSON)=>{
				//assert.ifError(data);
				assert(data, "data is null/undefined");
				done();
			});
		});
		
		
	});
	
	context("save a JSON file",()=>{
		let realFile;
		beforeEach((done)=>{
			
			dg.loadTernJson("sample/infer.js.json",(data:JSON)=>{
				realFile = data;
				done();
			});
		});
		
		it("should save dummy data json file.",(done)=>{
			dg.saveJSON("test/.tmp/test.json", JSON.stringify({hoge:"guga",n:0,hi:[0,1,3]}), ()=>{
				done();
			});
		});
		
		
		
		it("should save real data json file.",(done)=>{
			dg.saveJSON("test/.tmp/infer.json", JSON.stringify(realFile), ()=>{
				assert(realFile);
				done();
			});
		});
	});
	
	context("saveTSDFile()",()=>{
		
		
		
		let fileData = 
`
interface Hoge{
	new (): Hoge;
	prop: number;
	addHoge(param:string): Hoge;
}
declare var Hoge:Hoge;
`;
		it("should return true when save complate",(done)=>{
			
			assert(dg.saveTSDFile("test/test",fileData));
			//this.timeout(30000);
			done();
		});
	});
});