import * as assert from 'power-assert';
import {dtsmake} from '../src/dtsmake';
import fs = require('fs');

describe("Parsing TernJS definition JSON file(s), ",()=>{
	let dg = new dtsmake.DTSMake();
	
	
	
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
	
	context("replaceExportNamespace()",()=>{
		
		it("should replace module name when isOutExport ON",()=>{
			
			const def = {
				[dtsmake.TernDef.NAME]:"TEST_NAME",
				[dtsmake.TernDef.DEFINE]:{
					[dtsmake.TernDef.NODE]:{
						"node_modules/path/to/module`js":{
							"prop":{
								type:dtsmake.TSObjType.BOOLEAN
							}
						}
					}
				}
			};
			
			dg.option.isOutExport = true;
			dg.nodeModuleName = "node_modules/path/to/module`js";
			dg.userDefinedModuleName = "TEST_NAME";
			
			let out = dg.replaceExportNamespace(def);
			//console.log(JSON.stringify(out))
			let answer = {
				[dtsmake.TernDef.NAME]:"TEST_NAME",
				[dtsmake.TernDef.DEFINE]:{
					[dtsmake.TernDef.NODE]:{
						[dg.userDefinedModuleName]:{
							"prop":{
								type:dtsmake.TSObjType.BOOLEAN
							}
						}
					}
				}
			};
			
			assert.deepEqual(out, answer);
			
			
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
						{"type":dtsmake.TSObjType.FUNCTION,
					"params":[
						{
						"type":dtsmake.TSObjType.ARRAY,
						"arrayType": [
						{"type":dtsmake.TSObjType.STRING}
						],
						"name":"sParams"
						},
						{
						"type":dtsmake.TSObjType.ARRAY,
						"arrayType": [
						{"type":dtsmake.TSObjType.NUMBER}
						],
						"name":"nParams"
						}
					],
					"ret":[
						{
						"type":dtsmake.TSObjType.VOID
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
					"type":dtsmake.TSObjType.ARRAY,
					//"name":"test",
					"arrayType": [
						{"type":dtsmake.TSObjType.STRING}
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
				"type":dtsmake.TSObjType.FUNCTION,
				"ret":[
					{
					"type":dtsmake.TSObjType.VOID
					}
				],
				"params":[
					{
					"type":dtsmake.TSObjType.ARRAY,
					"name":"p1",
					"arrayType": [
						{"type":dtsmake.TSObjType.STRING}
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
		
		it("should parse optional param fn",()=>{
			const def = "fn(p1?: [string])";
			const answer = 
			[
				{
				"type":dtsmake.TSObjType.FUNCTION,
				"ret":[
					{
					"type":dtsmake.TSObjType.VOID
					}
				],
				"params":[
					{
					"type":dtsmake.TSObjType.ARRAY,
					"name":"p1?",
					"arrayType": [
						{"type":dtsmake.TSObjType.STRING}
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
					{"type":dtsmake.TSObjType.FUNCTION,
				"ret":[
					{
					"type":dtsmake.TSObjType.VOID
					}
				],
				"params":[
					{
					"type":dtsmake.TSObjType.ARRAY,
					"arrayType": [
						{"type":dtsmake.TSObjType.STRING}
					],
					"name":"sParams"
					},
					{
					"type":dtsmake.TSObjType.ARRAY,
					"arrayType": [
						{"type":dtsmake.TSObjType.NUMBER}
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
		
		it("should parse union params fn",()=>{
			const def = "fn(a: string|number)";
			const answer = [
					{"type":dtsmake.TSObjType.FUNCTION,
				"ret":[
					{
					"type":dtsmake.TSObjType.VOID
					}
				],
				"params":[
					[
						{
							"name":"a",
							"type":dtsmake.TSObjType.STRING
						},
						{
							"name":"a",
							"type":dtsmake.TSObjType.NUMBER
						}
					]
				]
				}
			];
			let out = dg.parseTernDef(def);
			assert.deepEqual(out, answer);
		});
		
		it("should parse fn union params fn",()=>{
			const def = "fn(a: fn(string)|fn(number))";
			const answer = [
					{"type":dtsmake.TSObjType.FUNCTION,
				"ret":[
					{
					"type":dtsmake.TSObjType.VOID
					}
				],
				"params":[
					[
						{
							"name":"a",
							"params":[{
							"type":dtsmake.TSObjType.STRING
							}],
							"type":dtsmake.TSObjType.FUNCTION,
							"ret":[{
								"type":dtsmake.TSObjType.VOID
							}]
						},
						{
							"name":"a",
							"params":[{
							"type":dtsmake.TSObjType.NUMBER
							}],
							"type":dtsmake.TSObjType.FUNCTION,
							"ret":[{
								"type":dtsmake.TSObjType.VOID
							}]
						}
					]
				]
				}
			];
			let out = dg.parseTernDef(def);
			assert.deepEqual(out, answer);
		});
	});
	
	context("parseParams()",()=>{
		it("should parse fn params array",()=>{
			const def = "fn(sParams:[string],nParams:[number])";
			const answer =
			[
				{
				"type":dtsmake.TSObjType.ARRAY,
				"arrayType": [
					{"type":dtsmake.TSObjType.STRING}
				],
				"name":"sParams"
				},
				{
				"type":dtsmake.TSObjType.ARRAY,
				"arrayType": [
					{"type":dtsmake.TSObjType.NUMBER}
				],
				"name":"nParams"
				}
			];
				
			let out = dg.parseParams(def);
			assert.deepEqual(out,answer, `\ndef out ${JSON.stringify(out)},\nanswer ${JSON.stringify(answer)}`);
			
		});
		
		it("should parse fn union params", ()=>{
			const def = "fn(a: fn(string)|fn(number))";
			const answer = [
					[
						{
							"name":"a",
							"params":[{
							"type":dtsmake.TSObjType.STRING
							}],
							"type":dtsmake.TSObjType.FUNCTION,
							"ret":[{
								"type":dtsmake.TSObjType.VOID
							}]
						},
						{
							"name":"a",
							"params":[{
							"type":dtsmake.TSObjType.NUMBER
							}],
							"type":dtsmake.TSObjType.FUNCTION,
							"ret":[{
								"type":dtsmake.TSObjType.VOID
							}]
						}
					]
				];
			let out = dg.parseParams(def);
			assert.deepEqual(out, answer);
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
	});
	
	context("Type checking ternjs type strings",()=>{
		
		const s = 
		[
			{type:dtsmake.TSObjType.ANY, str:"?"},
			{type:dtsmake.TSObjType.ARRAY, str:"[number]"},
			{type:dtsmake.TSObjType.BOOLEAN, str:"bool"},
			{type:dtsmake.TSObjType.CLASS, str:"+hoge.fuga.Class"},
			{type:dtsmake.TSObjType.FUNCTION, str:"fn(?,?)->?"},
			{type:dtsmake.TSObjType.NUMBER, str:"number"},
			{type:dtsmake.TSObjType.OBJECT, str:"hoge"},
			{type:dtsmake.TSObjType.STRING, str:"string"},
			{type:dtsmake.TSObjType.UNIONS, str:"number|string"}
		];
		
		it("basic type check",()=>{
			for(let i in s){
				let o = s[i];
				assert(dg.checkType(o.str) === o.type,`type ${dtsmake.TSObjType[o.type]} check faild.`);
			}
		});
		
		const objs = 
		[
			{type:dtsmake.TSObjType.OBJECT, str:"!this"},
			{type:dtsmake.TSObjType.OBJECT, str:"!this.Obj"},
			{type:dtsmake.TSObjType.OBJECT, str:"some.namespace.to.object"},
			{type:dtsmake.TSObjType.OBJECT, str:"!ternjs.!internal.!refs.!0.<i>"}
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
				assert(dg.checkType(o.str) === o.type,`type ${dtsmake.TSObjType[o.type]} check faild.`);
			}
			
			for(let i in noObjs){
				let o = noObjs[i];
				assert(dg.checkType(o) !== dtsmake.TSObjType.OBJECT,`${o} is may object.`);
			}
		});
		
		
		/*
		const mems = [
			{type:dtsmake.TSObjType.OBJ_MEMBER, str:"!this"},
			{type:dtsmake.TSObjType.OBJ_MEMBER, str:"!this.member"},
			{type:dtsmake.TSObjType.OBJ_MEMBER, str:"!this.member.child.child"},
			{type:dtsmake.TSObjType.OBJ_MEMBER, str:"!this.member.!this.!this.!node"}
		];
		it("this member obj check",()=>{
			for(let i in mems){
				let o = mems[i];
				assert(dg.checkType(o.str) === o.type,`type ${dtsmake.TSObjType[o.type]} check faild.`);
			}
		});
		*/
		
	});
	
	context("checkReplaceTypes(), ", ()=>{
		
		it("should match replace fn return type",()=>{
			let path = ["Klass", "prototype", "prop", "!ret"];
			let t = dg.checkReplaceType(path[path.length-1]);
			
			assert(t == dtsmake.ReplaceType.RETURN,
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
					dg.checkReplaceType(cs[i]) === dtsmake.ReplaceType.CLASS,
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
					out === dtsmake.ReplaceType.ARRAY,
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
						"type": dtsmake.TSObjType.CLASS,
						"class":"+Klass"
					}
				]
			},
			"Klass":{
				"prop":{
					"type":dtsmake.TSObjType.FUNCTION,
					"ret":[
						{
							"type": dtsmake.TSObjType.OBJECT,
							"class": "!this"
						}
					],
					"params": null
				},
				"prop2":{
					"type":dtsmake.TSObjType.NUMBER
				}
			}
		};
		
		beforeEach(()=>{
			test = {
				"!define":{
					"Klass.prop.!ret":[
						{
							"type": dtsmake.TSObjType.CLASS,
							"class":"+Klass"
						}
					]
				},
				"Klass":{
					"prop":{
						"type":dtsmake.TSObjType.FUNCTION,
						"ret":[
							{
								"type": dtsmake.TSObjType.OBJECT,
								"class": "!this"
							}
						],
						"params": null
					},
					"prop2":{
						"type":dtsmake.TSObjType.NUMBER
					}
				}
			};
		});
		
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
		
		it.skip("should replace local !ret", ()=>{
			
			const o = {
				"scopeAt": {
					"!type": [
						{
							"type": 5,
							"ret": [
								{
									"type": 9,
									"class": "!2"
								}
							],
							"params": [
								{
									"name": "ast",
									"type": 0
								},
								{
									"name": "pos",
									"type": 0
								},
								{
									"name": "defaultScope",
									"type": 0
								}
							]
						}
					]
				}
			};
			const answer = {
				"scopeAt": {
					//"!type": "fn(ast: ?, pos: ?, defaultScope: ?) -> !2"
					"!type":[{
						"type":dtsmake.TSObjType.FUNCTION,
						"params":[
							{
								"type":dtsmake.TSObjType.ANY,
								"name":"ast"
							},
							{
								"type":dtsmake.TSObjType.ANY,
								"name":"pos"
							},
							{
								"type":dtsmake.TSObjType.ANY,
								"name":"defaultScope"
							}
						],
						"ret":[
							{
								"type":dtsmake.TSObjType.ANY,
								"class":"!2"
							}
						]
					}]
				}
			};
			let out = dg.searchRef(o,["!2"],false);
			console.log("ref", JSON.stringify(out));
			dg.searchAndReplaceDTS(o, ["!ret"],"",false);
			
			assert.deepEqual(o, answer);
			
		});
		
	});
	
	
	context("preModifiedJson()", ()=>{
		let def;
		
		beforeEach(()=>{
			
			def = {
				"Math":{
					"prop":{
						type:dtsmake.TSObjType.STRING
					}
				},
				"NoGlobal":{}
			};
			
			dg["userDefinedModuleName"] = "MyLib";
			
		});
		
		
		it("should remove a object that same name with JS Global Object",()=>{
			
			dg.option.globalObject = dtsmake.Option.GlobalObject.REMOVE;
			let out = dg.preModifiedJson(def);
			let answer = {
				"NoGlobal":{}
			};
			
			assert.deepEqual(out, answer);
			
		});
		
		it("should wrap a object that same name with JS Global Object",()=>{
			
			dg.option.globalObject = dtsmake.Option.GlobalObject.WRAP;
			
			let out = dg.preModifiedJson(def);
			let answer = {
				"MyLib":{
					"Math":{
						"prop":{
							type:dtsmake.TSObjType.STRING
						},
						"!!!dtsinterface!!!":"Math"
					}
				},
				"NoGlobal":{}
			};
			
			assert.deepEqual(out, answer);
			
		});
		
		it("should rename a object that same name with JS Global Object",()=>{
			
			dg.option.globalObject = dtsmake.Option.GlobalObject.RENAME;
			
			let out = dg.preModifiedJson(def);
			let answer = {
				"MyLib$Math":{
					"prop":{
						type:dtsmake.TSObjType.STRING
					}
				},
				"NoGlobal":{}
			};
			
			assert.deepEqual(out, answer);
			
		});
		
		it.skip("should rename & extend a object that same name with JS Global Object",()=>{
			
			dg.option.globalObject = dtsmake.Option.GlobalObject.RENAME;
			
			let out = dg.preModifiedJson(def);
			let answer = {
				"MyLib$Math":{
					"prop":{
						type:dtsmake.TSObjType.STRING
					},
					"!proto":{
						type:dtsmake.TSObjType.CLASS,
						class:"Math.prototype"
					}
				},
				"NoGlobal":{}
			};
			
			assert.deepEqual(out, answer);
			
		});
	});
	
});