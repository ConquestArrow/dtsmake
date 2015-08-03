/// <reference path="../typings/tsd.d.ts" />

import * as assert from 'power-assert';
import {dtsgen} from '../src/dtsgen';
import fs = require('fs');

describe("Parsing TernJS definition JSON file(s), ",()=>{
	let dg = new dtsgen.DTSGen();
	context("parseTernJson()",()=>{
		let loadData;
		beforeEach((done)=>{
			
			dg.loadTernJson("sample/infer.js.json",(jsonData)=>{
				loadData = jsonData;
				done();
			})
			
			
			
		});
		
		let nodeDTSObj;
		it("parseJsonNodeDTS()",(done)=>{
			nodeDTSObj = dg.parseJsonNodeDTS(loadData);
			
			done();
		});
		
		let modifiedObj;
		it("preModifiedJson()", (done)=>{
			modifiedObj = dg.preModifiedJson(nodeDTSObj);
			done();
		});
		
		it.skip("should parsing ternjs files and debug save.", ()=>{
			assert(loadData,"load data is invalid");
			assert.ifError(dg.parseTernJson(loadData));
		});
	});
	
	context("Type checking ternjs type strings",()=>{
		
		const s = 
		[
			{type:dtsgen.TSObjType.ANY, str:"?"},
			{type:dtsgen.TSObjType.ARRAY, str:"[number]"},
			{type:dtsgen.TSObjType.BOOLEAN, str:"bool"},
			{type:dtsgen.TSObjType.CLASS, str:"+hoge.fuga.Class"},
			{type:dtsgen.TSObjType.FUNCTION, str:"fn(?,?)->?"},
			{type:dtsgen.TSObjType.NUMBER, str:"number"},
			{type:dtsgen.TSObjType.OBJECT, str:"hoge"},
			{type:dtsgen.TSObjType.STRING, str:"string"},
			{type:dtsgen.TSObjType.UNIONS, str:"number|string"}
		];
		
		it("basic type check",()=>{
			for(let i in s){
				let o = s[i];
				assert(dg.checkType(o.str) === o.type,`type ${dtsgen.TSObjType[o.type]} check faild.`);
			}
		});
		
		const objs = 
		[
			{type:dtsgen.TSObjType.OBJECT, str:"!this"},
			{type:dtsgen.TSObjType.OBJECT, str:"!this.Obj"},
			{type:dtsgen.TSObjType.OBJECT, str:"some.namespace.to.object"},
			{type:dtsgen.TSObjType.OBJECT, str:"!ternjs.!internal.!refs.!0.<i>"}
		];
		const noObjs =
		[
			"number",
			"string",
			"+hoge.fuga",
			"bool",
			"?",
			"?|bool",
			"fn(number|?,bool|?)->+hoge.fuga",
			"[bool|number]",
			"[+hoge.fuga]"
		];
		
		it("object type check",()=>{
			for(let i in objs){
				let o = objs[i];
				assert(dg.checkType(o.str) === o.type,`type ${dtsgen.TSObjType[o.type]} check faild.`);
			}
			
			for(let i in noObjs){
				let o = noObjs[i];
				assert(dg.checkType(o) !== dtsgen.TSObjType.OBJECT,`${o} is may object.`);
			}
		});
		
		
		/*
		const mems = [
			{type:dtsgen.TSObjType.OBJ_MEMBER, str:"!this"},
			{type:dtsgen.TSObjType.OBJ_MEMBER, str:"!this.member"},
			{type:dtsgen.TSObjType.OBJ_MEMBER, str:"!this.member.child.child"},
			{type:dtsgen.TSObjType.OBJ_MEMBER, str:"!this.member.!this.!this.!node"}
		];
		it("this member obj check",()=>{
			for(let i in mems){
				let o = mems[i];
				assert(dg.checkType(o.str) === o.type,`type ${dtsgen.TSObjType[o.type]} check faild.`);
			}
		});
		*/
		
	});
	
	context("checkReplaceTypes(), ", ()=>{
		
		it("should match replace fn return type",()=>{
			let path = ["Klass", "prototype", "prop", "!ret"];
			let t = dg.checkReplaceType(path[path.length-1]);
			
			assert(t == dtsgen.ReplaceType.RETURN,
				`${path[path.length-1]} is not match ReplaceType.RETURN`
			);
		});
		
		it("should match may be Class",()=>{
			let cs = [
				"A",
				"Ab",
				"Abc",
				"ABC",
				"KlassA"
			];
			for(let i in cs){
				assert(
					dg.checkReplaceType(cs[i]) === dtsgen.ReplaceType.CLASS,
					`${cs[i]} may not be Class`
				);
			}
		})
	});
	
	
	context("search ternjs ref & replace dts ref, ",()=>{
		
		let test = {
			"!define":{
				"Klass.prop.!ret":[
					{
						"type": dtsgen.TSObjType.CLASS,
						"class":"+Klass"
					}
				]
			},
			"Klass":{
				"prop":{
					"type":dtsgen.TSObjType.FUNCTION,
					"ret":[
						{
							"type": dtsgen.TSObjType.OBJECT,
							"class": "!this"
						}
					],
					"params": null
				},
				"prop2":{
					"type":dtsgen.TSObjType.NUMBER
				}
			}
		};
		
		it("should search prototype ref (Klass.prototype.prop.!ret)", ()=>{
			let ref = dg.searchRef(
				test,
				["Klass","prototype","prop","!ret"],
				false
			);
			assert(ref, "no ref");
		});
		
		it("should search prototype prop ref", ()=>{
			let ref2 = dg.searchRef(
				test,
				["Klass","prototype","prop2"],
				false
			);
			assert(ref2, "no ref");
		});
		
		it("should faild search non ref", ()=>{
			let ref = dg.searchRef(
				test,
				["Klass","hoge","fuga","!0"],
				false
			);
			assert(!ref, "no ref should be no ref");
		});
		
		
		
		it("should replace prototype ref to Class ref", ()=>{
			dg.searchAndReplaceDTS(
				test,
				["Klass","prototype","prop"],
				"PropRet",
				false
			)
		});
		
		it("should replace prototype ref to Class ref 2", ()=>{
			dg.searchAndReplaceDTS(
				test,
				["Klass","prototype","prop2"],
				"Prop2",
				false
			)
		});
		
	});
	
});