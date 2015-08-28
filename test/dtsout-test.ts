/// <reference path="../typings/tsd.d.ts" />

import * as assert from 'power-assert';
import {dtsmake} from '../src/dtsmake';
import fs = require('fs');

describe("TypeScript d.ts file output tests,", ()=>{
	
	let dg = new dtsmake.DTSMake();
	
	
	context("tsObjToDTS()", ()=>{
		
		it("shoud be replace ternjs Class instance path",()=>{
			const p = [
				{
					type:dtsmake.TSObjType.CLASS,
					name:"param",
					class:"+Klass"
				}
			];
			let out = dg.tsObjToDTS(p[0]);
			let answer = "param : Klass"
			assert(out === answer, `out strings should be ${answer}.`);
			
		});
		
		it("should be replace ternjs array",()=>{
			const to = {
			type:dtsmake.TSObjType.ARRAY,
			arrayType:[
				{
					type:dtsmake.TSObjType.ANY
				}
			]
			};
			
			let out = dg.tsObjToDTS(to);
			let answer = "Array<any>";
			assert(out === answer, `out strings ${out} should be ${answer}.`);
		});
		
		
		it.skip("shoud be replace ternjs !ret",()=>{
			const p = [
				{
					type:dtsmake.TSObjType.OBJECT,
					name:"param",
					class:"!ret"
				}
			];
			let out = dg.tsObjToDTS(p[0]);
			let answer = "param : /* !ret */"
			assert(out === answer, `out strings should be ${answer}.`);
			
		});
		
		it("should convert JS native global objects",()=>{
			const g = [
				"Object",
				"Function",
				"Boolean",
				"Symbol",
				"Error",
				"EvalError",
				"InternalError",
				"RangeError",
				"ReferenceError",
				"SyntaxError",
				"TypeError",
				"URIError",
				"Number",
				"Math",
				"Date",
				"String",
				"RegExp",
				"Array",
				"Int8Array",
				"Uint8Array",
				"Uint8ClampedArray",
				"Int16Array",
				"Uint16Array",
				"Int32Array",
				"Uint32Array",
				"Float32Array",
				"Float64Array",
				"Map",
				"Set",
				"WeakMap",
				"WeakSet",
				"ArrayBuffer",
				"DataView",
				"JSON",
				"Promise",
				"Generator",
				"GeneratorFunction",
				"Reflect",
				"Proxy"
			];
			
			let p:dtsmake.TSObj[] = [];
			let answer:string[] = [];
			let out:string[] = [];
			for(let i in g){
				let o:dtsmake.TSObj = {type:9, name:"a"+i, class:""};
				o.class = g[i];
				p.push(o);
				
				answer.push(`a${i} : ${g[i]}`);
				
				out.push(dg.tsObjToDTS(p[p.length-1]));
			}
			
			assert.deepEqual(out, answer);
			
			
		})
		
	});
	
	context("paramsToDTS()", ()=>{
		
		it("should be able to replace ternjs Class instance path", ()=>{
			
			const p = [
				{
					type:dtsmake.TSObjType.CLASS,
					name:"param",
					class:"+Klass"
				}
			];
			
			let out = dg.paramsToDTS(p);
			let answer = "param : Klass"
			assert(out === answer);
			
		})
	});
	
	context("convertTSObjToString()", ()=>{
		
		beforeEach(()=>{
			dg["depth"] = 0;
		})
		
		
		it("should convert simple function", ()=>{
			const def:dtsmake.TSObj[] = [
				{
					type:dtsmake.TSObjType.FUNCTION,
					ret:[
						{type:dtsmake.TSObjType.NUMBER},
						{type:dtsmake.TSObjType.STRING},
					],
					params:null
				}
			];
			const defName = "example";
			
			const out = dg.convertTSObjToString(defName,def);
			const answer = 
`
/**
 * 
 * @return  
 */
declare function ${defName}(): number | string;
`;
			
			assert.deepEqual(out, answer);
			
		});
		
		it("should convert constructor without return type annotation", ()=>{
			const def:dtsmake.TSObj[] = [
				{
					type:dtsmake.TSObjType.FUNCTION,
					ret:[
						{type:dtsmake.TSObjType.VOID}
					],
					params:null
				}
			];
			const defName = "new ";
			dg.option.isAnnotateTypeInstance = false;
			const out = dg.convertTSObjToString(defName,def);
			const answer = 
`
/**
 * 
 */
declare function ${defName}();
`;
			
			assert.deepEqual(out, answer);
			
		});
		
		it("should convert constructor with return type annotation", ()=>{
			const def:dtsmake.TSObj[] = [
				{
					type:dtsmake.TSObjType.FUNCTION,
					ret:[
						{type:dtsmake.TSObjType.VOID}
					],
					params:null
				}
			];
			const defName = "new ";
			dg.option.isAnnotateTypeInstance = true;
			dg.option.isOutVoidAsAny = false;
			const out = dg.convertTSObjToString(defName,def);
			const answer = 
`
/**
 * 
 */
declare function ${defName}(): void;
`;
			
			assert.deepEqual(out, answer);
			
		});
		
		it("should convert constructor with return type annotation void as any", ()=>{
			const def:dtsmake.TSObj[] = [
				{
					type:dtsmake.TSObjType.FUNCTION,
					ret:[
						{type:dtsmake.TSObjType.VOID}
					],
					params:null
				}
			];
			const defName = "new ";
			dg.option.isAnnotateTypeInstance = true;
			dg.option.isOutVoidAsAny = true;
			const out = dg.convertTSObjToString(defName,def);
			const answer = 
`
/**
 * 
 */
declare function ${defName}(): /* void */ any;
`;
			
			assert.deepEqual(out, answer);
			
		});
		
		it("should not output ret name prop", ()=>{
			const def:dtsmake.TSObj[] = [
				{
					type:dtsmake.TSObjType.FUNCTION,
					ret:[
						{
							type:dtsmake.TSObjType.NUMBER,
							name:"notOutput"
						},
						{
							type:dtsmake.TSObjType.STRING,
							name:"notOutput"
						},
					],
					params:null
				}
			];
			const defName = "example";
			
			const out = dg.convertTSObjToString(defName,def);
			const answer = 
`
/**
 * 
 * @return  
 */
declare function ${defName}(): number | string;
`;
			
			assert.deepEqual(out, answer);
			
		});
		
		it("should wrap fn() return type", ()=>{
			const def:dtsmake.TSObj[] = [
				{
					type:dtsmake.TSObjType.FUNCTION,
					ret:[
						{
							type:dtsmake.TSObjType.OBJECT,
							class:"sinon.collection.stub.!ret"
						},
						{
							type:dtsmake.TSObjType.FUNCTION,
							params:null,
							ret:[
								{type:dtsmake.TSObjType.VOID}
							]
						},
					],
					params:null
				}
			];
			const defName = "example";
			dg.option.isOutVoidAsAny = false;
			const out = dg.convertTSObjToString(defName,def);
			const answer = 
`
/**
 * 
 * @return  
 */
declare function ${defName}(): /* sinon.collection.stub.!ret */ any | (() => void);
`;
			
			assert.deepEqual(out, answer);
			
		});
		
		
		it("should wrap fn() return type2", ()=>{
			const def = [
				{
					type:dtsmake.TSObjType.FUNCTION,
					ret:[
						{
							type:dtsmake.TSObjType.OBJECT,
							class:"!0"
						}
					],
					params:[
						[
							{"type":9,"name":"fake","class":"sinon.collection.stub.!ret"},
							{"type":5,"name":"fake","ret":[{"type":1}],
			"params":null}
						]
					]
				}
			];
			const defName = "add";
			dg.option.isOutVoidAsAny = false;
			const out = dg.convertTSObjToString(defName,<any>def);
			const answer = 
`
/**
 * 
 * @param fake 
 * @return  
 */
declare function ${defName}(fake : /* sinon.collection.stub.!ret */ any | (() => void)): /* sinon.collection.stub.!ret */ any | (() => void);
`;
			
			assert.deepEqual(out, answer);
			
		});
		
	});
	
	context("parseToDTS()", ()=>{
		it("should convert !type only interface",()=>{
			const def = {
				"!define":{
						"!node.``/node_modules/tern/lib/tern`js.Server.prototype.flush.!0": {
					"!type": [
						{
							"type": 5,
							"ret": [
								{
									"type": 1
								}
							],
							"params": null
						}
					],
					"!span": [
						{
							"type": 9,
							"class": "6371[214:6]-6643[223:7]"
						}
					],
					"!!!dtsinterface!!!": "Flush0",
					"!!!dtsnamespace!!!": "tern"
				}
				}
			};
			dg.option.isOutVoidAsAny = false;
			const out = dg.parseToDTS(def);
			const st = "!node.``/node_modules/tern/lib/tern`js.Server.prototype.flush.!0";
			const ans =
`declare namespace tern{
	// ${st}
	
	/**
	 * 
	 */
	interface Flush0 {
				
		/**
		 * 
		 */
		(): void;
	}
}
`;
			assert.deepEqual(out,ans);
			
			
		});
		
		
		it("should not convert <!> prop (maybe ternjs internal def)",()=>{
			
			const def = {
				"!define":{
				"passes": {
					"<i>": {
						"!type": [
							{
								"type": 6,
								"arrayType": [
									{
										"type": 0
									}
								]
							}
						],
						"!span": [
							{
								"type": 9,
								"class": "3425[113:43]-3429[113:47]"
							}
						]
					},
					"!span": [
						{
							"type": 9,
							"class": "2904[103:9]-2910[103:15]"
						}
					]
				}
				}
			};
			dg.option.isOutVoidAsAny = false;
			dg["isInInterfaceOrClass"] = true;
			const out = dg.parseToDTS(def);
			const ans = 
`// passes

/**
 * 
 */
declare interface passes {
}
`;
			assert.deepEqual(out, ans);
			
		});
		
	})
	
	
	context("outJSDoc()", ()=>{
		
		beforeEach(()=>{
			dg["depth"] = 0;
		})
		
		it("should output simple jsdoc",()=>{
			const c = "COMMENT";
			const u = "http://example.jp/";
			const p = ["hoge","fuga"];
			const r = "RETURN";
			
			const out = dg.outJSDoc(c,u,p,r);
			const answer = 
`
/**
 * ${c}
 * @param ${p[0]} 
 * @param ${p[1]} 
 * @return ${r}
 * @url ${u}
 */
`;
			assert.deepEqual(out, answer);
			
		});
		
		
		it("should output multiline jsdoc",()=>{
			dg["depth"] = 1;
			const c = "COMMENT\nMULTILINE\nSAMPLE";
			const u = "http://example.jp/";
			const p = ["hoge","fuga"];
			const r = "RETURN";
			
			const out = dg.outJSDoc(c,u,p,r);
			const answer = 
`	
	/**
	 * COMMENT
	 * MULTILINE
	 * SAMPLE
	 * @param ${p[0]} 
	 * @param ${p[1]} 
	 * @return ${r}
	 * @url ${u}
	 */
`;
			assert.deepEqual(out, answer);
			dg["depth"]--;
		})
		
	});
	
	
	
	context("outFuncJsDocs()", ()=>{
		
		beforeEach(()=>{
			dg["depth"] = 0;
		})
		
		it("should output simple function jsdoc",()=>{
			const t:dtsmake.TSObj = {
				type:dtsmake.TSObjType.FUNCTION,
				params:[
					{
						type:dtsmake.TSObjType.NUMBER,
						name:"hoge"
					},
					{
						type:dtsmake.TSObjType.STRING,
						name:"fuga"
					}
				],
				ret:[
					{
						type:dtsmake.TSObjType.NUMBER
					},
					{
						type:dtsmake.TSObjType.STRING
					}
				]
			};
			
			const out = dg.outFuncJsDocs(t);
			const answer =
`
/**
 * 
 * @param hoge 
 * @param fuga 
 * @return  
 */
`;
			assert.deepEqual(out, answer);
		});
	});
	
	
	context("addDeclare()", ()=>{
		beforeEach(()=>{
			dg["depth"] = 0;
		})
		
		
		it("should out 'declare' when this.depth === 0", ()=>{
			
			
			const out = dg.addDeclare();
			const answer = "declare ";
			assert.deepEqual(out, answer);
		});
		
	});
	
	context("resolveNamespace()", ()=>{
		
		it("should resolve !ret containing path",()=>{
			const path = "sinon.spy.reset.!ret.named.!ret";
			
			const out = dg.resolveNamespace(path.split("."));
			const ans = "sinon.spy.ResetRet";
			
			assert.deepEqual(out, ans);
			
		})
		
		it("should resolve !node containing path",()=>{
			const path = "!node.``/node_modules/tern/lib/tern`js.Server.prototype.flush.!0";
			const out = dg.resolveNamespace(path.split("."));
			//dg.option.isOutExport = true;
			//dg.nodeModuleName = "``/node_modules/tern/lib/tern`js";
			//dg.userDefinedModuleName = "tern";
			const ans = "Server.prototype";
			
			assert.deepEqual(out, ans);
		});
		
		it("should resolve !node containing path with replacing",()=>{
			const path = "!node.``/node_modules/tern/lib/tern`js.Server.prototype.flush.!0";
			
			dg.option.isOutExport = true;
			dg["nodeModuleName"] = path.split(".")[1];
			dg.userDefinedModuleName = "tern";
			const out = dg.resolveNamespace(path.split("."));
			const ans = "tern.Server.prototype";
			
			//console.log("dg[nodeModuleName]:"+dg["nodeModuleName"]);
			
			assert.deepEqual(path.split(".")[1], dg.nodeModuleName);
			
			assert.deepEqual(out, ans);
		});
		
		
		
	});
	
	context("resolvePathToDTSName", ()=>{
		
		it("should resolve DTSName", ()=>{
			const path = "sinon.Event.prototype.initEvent.!3";
			const out = dg.resolvePathToDTSName(path.split("."));
			
			const ans = "InitEvent3";
			
			assert.deepEqual(out, ans);
			
		});
		
	});
	
});