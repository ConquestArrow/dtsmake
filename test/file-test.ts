import * as assert from 'power-assert';
import * as sinon from 'sinon';
import {dtsmake} from '../src/dtsmake';
import * as fs from 'fs';

describe("File manipulation tests", ()=>{
	let dg = new dtsmake.DTSMake();
	
	context("load a JSON file", ()=>{
		
		it("should load a real json file",(done)=>{
			dg.loadTernJson("sample/infer.js.json",(data:JSON)=>{
				//assert.ifError(data);
				assert(data, "data is null/undefined");
				done();
			});
		});
		
		
	});
	
	context.skip("save a JSON file",()=>{
		let realFile:JSON;
		beforeEach((done)=>{
			dg.option.isOutVoidAsAny = false;
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
			
			assert(dg.saveTSDFile("test/.tmp/test",fileData));
			//this.timeout(30000);
			done();
		});
	});
});