/// <reference path="../typings/tsd.d.ts" />

import * as assert from 'power-assert';
import {dtsgen} from '../src/dtsgen';
import fs = require('fs');

describe("TypeScript d.ts file output tests,", ()=>{
	
	let dg = new dtsgen.DTSGen();
	
	
	context("tsObjToDTS()", ()=>{
		
		it("shoud be replace ternjs Class instance path",()=>{
			const p = [
				{
					type:dtsgen.TSObjType.CLASS,
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
			type:dtsgen.TSObjType.ARRAY,
			arrayType:[
				{
					type:dtsgen.TSObjType.ANY
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
					type:dtsgen.TSObjType.OBJECT,
					name:"param",
					class:"!ret"
				}
			];
			let out = dg.tsObjToDTS(p[0]);
			let answer = "param : /* !ret */"
			assert(out === answer, `out strings should be ${answer}.`);
			
		});
		
	});
	
	context("paramsToDTS()", ()=>{
		
		it("should be able to replace ternjs Class instance path", ()=>{
			
			const p = [
				{
					type:dtsgen.TSObjType.CLASS,
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
		it("should convert simple function", ()=>{
			const def:dtsgen.TSObj[] = [
				{
					type:dtsgen.TSObjType.FUNCTION,
					ret:[
						{type:dtsgen.TSObjType.NUMBER},
						{type:dtsgen.TSObjType.STRING},
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
function ${defName}(): number | string;
`;
			
			assert.deepEqual(out, answer);
			
		});
		
		it("should convert constructor", ()=>{
			const def:dtsgen.TSObj[] = [
				{
					type:dtsgen.TSObjType.FUNCTION,
					ret:[
						{type:dtsgen.TSObjType.VOID}
					],
					params:null
				}
			];
			const defName = "new ";
			
			const out = dg.convertTSObjToString(defName,def);
			const answer = 
`
/**
 * 
 */
function ${defName}();
`;
			
			assert.deepEqual(out, answer);
			
		});
		
		it("should not output ret name prop", ()=>{
			const def:dtsgen.TSObj[] = [
				{
					type:dtsgen.TSObjType.FUNCTION,
					ret:[
						{
							type:dtsgen.TSObjType.NUMBER,
							name:"notOutput"
						},
						{
							type:dtsgen.TSObjType.STRING,
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
function ${defName}(): number | string;
`;
			
			assert.deepEqual(out, answer);
			
		});
		
	});
	
	
	context("outJSDoc()", ()=>{
		
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
			
		})
		
	});
	
	context("outFuncJsDocs()", ()=>{
		it("should output simple function jsdoc",()=>{
			const t:dtsgen.TSObj = {
				type:dtsgen.TSObjType.FUNCTION,
				params:[
					{
						type:dtsgen.TSObjType.NUMBER,
						name:"hoge"
					},
					{
						type:dtsgen.TSObjType.STRING,
						name:"fuga"
					}
				],
				ret:[
					{
						type:dtsgen.TSObjType.NUMBER
					},
					{
						type:dtsgen.TSObjType.STRING
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
	
});