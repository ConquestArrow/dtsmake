/// <reference path="../typings/tsd.d.ts" />

import * as assert from 'power-assert';
import dtsgen = require("../src/dtsgen");

describe("File manipulation tests", ()=>{
	
	describe("saveTSDFile()",()=>{
		let dg = new dtsgen.dtsgen.DTSGen();
		let fileData = `
declare interface Hoge{
	new (): Hoge;
	prop: number;
	addHoge(param:string): Hoge;
}
`;
		it("should return true when save complate",()=>{
			
			assert(dg.saveTSDFile("test/test",fileData));
		});
	});
});