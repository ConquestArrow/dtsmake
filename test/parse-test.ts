/// <reference path="../typings/tsd.d.ts" />

import * as assert from 'power-assert';
import {dtsgen} from '../src/dtsgen';
import fs = require('fs');

describe("Parsing TernJS definition JSON file(s), ",()=>{
	let dg = new dtsgen.DTSGen();
	
	
	
	context("parseToDTS()", ()=>{
		
		
		it.skip("should parse !type type to DTS",()=>{
			
			let baseDef = {
				"Fn": {
			      "!type": "fn(name: string, self: +tern.AVal, args: [?], argNames: [string], retval: ?)",
			      "name": "string",
				  "test": "?"
			    }
			};
			
			let parsedJson = dg.parseJsonNodeDTS(baseDef);
			
			let out = dg.parseToDTS(parsedJson);
			const answer3 = `"Fn":{"new ":{}}`;
			assert.deepEqual(
				out,answer3,
				`out string ${out} is not match answer str ${answer3}.`
			);
			
		});
		
	});
	
	context("parseJsonNodeDTS()",()=>{
		it("should be output !type param array type",()=>{
			
			const def = {
				"Fn":{
					"!type": "fn(sParams: [string], nParams: [number])"
				}
			};
			
			let out = dg.parseJsonNodeDTS(def);
			let answer = {
				"Fn":{
					"!type":[
						{"type":dtsgen.TSObjType.FUNCTION,
					"params":[
						{
						"type":dtsgen.TSObjType.ARRAY,
						"arrayType": [
						{"type":dtsgen.TSObjType.STRING}
						],
						"name":"sParams"
						},
						{
						"type":dtsgen.TSObjType.ARRAY,
						"arrayType": [
						{"type":dtsgen.TSObjType.NUMBER}
						],
						"name":"nParams"
						}
					],
					"ret":[
						{
						"type":dtsgen.TSObjType.VOID
						}
					]
					}
					]
					
				}
			}
			assert.deepEqual(
				out,answer,
				`out ${JSON.stringify(out)}\n, answer ${JSON.stringify(answer)}`
			)
			
			
		});
		
		
		it.skip("should be output !proto collectly",()=>{
			const def = {
				"Fn":{
					"!type":"fn()",
					"prototype":{
						"!proto": "tern.Obj.prototype"
					}
				}
			};
			const out = dg.parseJsonNodeDTS(def);
			const answer = {
				"Fn":{}
			};
			assert.deepEqual(
				out, answer
			);
			
		});
	})
	
	context("parseTernDef()",()=>{
		
		it("should parse simple array",()=>{
			const def = "[string]";
			const answer = [
				{
					"type":dtsgen.TSObjType.ARRAY,
					//"name":"test",
					"arrayType": [
						{"type":dtsgen.TSObjType.STRING}
					]
				}
			];
			
			let out = dg.parseTernDef(def);
			assert.deepEqual(
				out, answer,
				`out ${JSON.stringify(out)},\n`+
				`ans ${JSON.stringify(answer)}`
			);
		});
		
		it("should parse single array param fn",()=>{
			const def = "fn(p1: [string])";
			const answer = 
			[
				{
				"type":dtsgen.TSObjType.FUNCTION,
				"ret":[
					{
					"type":dtsgen.TSObjType.VOID
					}
				],
				"params":[
					{
					"type":dtsgen.TSObjType.ARRAY,
					"name":"p1",
					"arrayType": [
						{"type":dtsgen.TSObjType.STRING}
					]
				}
				]
				}
			];
			
			let out = dg.parseTernDef(def);
			assert.deepEqual(
				out, answer,
				`out ${JSON.stringify(out)},\n`+
				`ans ${JSON.stringify(answer)}`
			);
		});
		
		it("should parse double array params fn",()=>{
			const def = "fn(sParams: [string], nParams: [number])";
			const answer = [
					{"type":dtsgen.TSObjType.FUNCTION,
				"ret":[
					{
					"type":dtsgen.TSObjType.VOID
					}
				],
				"params":[
					{
					"type":dtsgen.TSObjType.ARRAY,
					"arrayType": [
						{"type":dtsgen.TSObjType.STRING}
					],
					"name":"sParams"
					},
					{
					"type":dtsgen.TSObjType.ARRAY,
					"arrayType": [
						{"type":dtsgen.TSObjType.NUMBER}
					],
					"name":"nParams"
					}
				]
				}
			];
			let out = dg.parseTernDef(def);
			assert.deepEqual(out,answer, `\ndef out ${JSON.stringify(out)},\nanswer ${JSON.stringify(answer)}`);
			
		});
		
		//it("should parse ")
	});
	
	context("parseParams()",()=>{
		it("should parse fn params array",()=>{
			const def = "fn(sParams:[string],nParams:[number])";
			const answer =
			[
				{
				"type":dtsgen.TSObjType.ARRAY,
				"arrayType": [
					{"type":dtsgen.TSObjType.STRING}
				],
				"name":"sParams"
				},
				{
				"type":dtsgen.TSObjType.ARRAY,
				"arrayType": [
					{"type":dtsgen.TSObjType.NUMBER}
				],
				"name":"nParams"
				}
			];
				
			let out = dg.parseParams(def);
			assert.deepEqual(out,answer, `\ndef out ${JSON.stringify(out)},\nanswer ${JSON.stringify(answer)}`);
			
		});
		
	});
	
	context("splitParams()",()=>{
		it("should parse fn params array",()=>{
			const def = "sParams:[string],nParams:[number]";
			const answer =
			[
				"sParams:[string]",
				"nParams:[number]"
			];
				
			let out = dg.splitParams(def);
			assert.deepEqual(out,answer, `\ndef out ${JSON.stringify(out)},\nanswer ${JSON.stringify(answer)}`);
			
		});
		
	});
	
	
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
		
		it("should parsing ternjs files and debug save.", ()=>{
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
		});
		
		it("should match array type",()=>{
			let cs = [
				"<i>",
				"<i>",
				"<i>",
				"<i>",
				"<hoge>"
			];
			for(let i in cs){
				let out = dg.checkReplaceType(cs[i]);
				assert(
					out === dtsgen.ReplaceType.ARRAY,
					`${cs[i]} may not be Array`
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
			);
			//console.log(JSON.stringify(test));
		});
		
		it("should replace prototype ref to Class ref 2", ()=>{
			dg.searchAndReplaceDTS(
				test,
				["Klass","prototype","prop2"],
				"Prop2",
				false
			);
			
		});
		
	});
	
});