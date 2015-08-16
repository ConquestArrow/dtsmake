/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/clone/clone.d.ts" />

import fs = require('fs');
import path = require('path');
import clone = require('clone');

export namespace dtsgen{
	
	const DTS_INTERFACE_STR = "!!!dtsinterface!!!";
	const DTS_NAMESPACE_STR = "!!!dtsnamespace!!!";
	
	export class DTSGen{
		/**
		 * ternjs json format data
		 */
		ternjsData:JSON;
		
		/**
		 * currently nodejs module internal name
		 * ex. "node_modules/path/to/module`js"
		 */
		nodeModuleName:string;
		
		/**
		 * user defined name when tern/condense
		 */
		userDefinedModuleName:string;
		
		/**
		 * Default Options
		 */
		option:Option = {
			// debug mode
			isDebug:false,
			// force output "void" to "any"
			isOutVoidAsAny:false,
			// export a namespace property same with a interface 
			isExportInterfaceSameNameVar:true,
			// annotate interface constructor type as return type instance
			isAnnotateTypeInstance:true,
			// node module special replace
			isNodeJSModule:false,
			// add export statement in a bottom of d.ts file
			isOutExport:true,
			// if isOutExport true, select export style "es6" or "legacy"
			exportStyle:Option.ExportStyle.LEGACY,
			// exporting module name
			// ex. "EXAMPLE"; usage 'import example = require("EXAMPLE");'
			// ex. "EXAMPLE/lib"; usage 'import example = require("EXAMPLE/lib");'
			// check javascript lib's import style
			exportModuleName:""
		};
		
		/**
		 * main function
		 * load json file
		 */
		main(
			srcPathStr:string,
			distPathStr:string, 
			options?:Option
		):void;
		/**
		 * 
		 */
		main(
			srcString:string,
			distPathStr:string,
			options?:Option
		):void;
		
		main(
			param1:string,
			distPathStr:string, 
			options?:Option
		){
			this.overrideDefaultOptions(options);
			
			if(/\n/.test(param1)){
				//source code text
				let s = this.parseTernJson(JSON.parse(param1), distPathStr);
				this.saveTSDFile(distPathStr,s);
			}
			else if(/\.json$/.test(param1)){
				//src json path
				this.loadTernJson(param1, (data:JSON)=>{
					let s = this.parseTernJson(data, distPathStr);
					
					this.saveTSDFile(distPathStr,s);
				})
			}
			
		}
		
		
		private overrideDefaultOptions(options?:Option){
			if(options){
				for(let i in options){
					if(this.option[i]!==undefined || this.option[i]!==null){
						//override default options
						this.option[i] = options[i];
					}
				}
			}
		}
		
		/**
		 * load ternjs json format data
		 * @param pathStr path/to/file/example.json, must be strings
		 */
		loadTernJson(pathStr:string, cb:(data:JSON)=>void){
			fs.readFile(pathStr,{encoding:"UTF-8"}, (err:NodeJS.ErrnoException, data:Buffer)=>{
				if(err)throw Error(err.name+" "+err.code+" "+err.message+" "+err.path);
				
				this.ternjsData = JSON.parse(data.toString());
				//console.log(JSON.stringify(this.ternjsData));
				console.log("Load a JSON file complete.");
				//this.parseTernJson(this.ternjsData);
				cb(this.ternjsData);
			});
		}
		
		/**
		 * save typescript d.ts file.
		 * TODO: add line feed option (LF/CR/CR-LF)
		 * @param name path/to/filename, no need file ext. like ".d.ts"
		 * @param src file data strings.
		 */
		saveTSDFile(name:string,src:string):boolean{
			try{
			fs.writeFile(`${name}.d.ts`, src, {encoding:"UTF-8"}, (err:NodeJS.ErrnoException)=>{
				if(err)throw Error(err.name+" "+err.code+" "+err.message+" "+err.path);
				console.log(`File saved. (${name}.d.ts)`);
				
			});
			}catch(e){
				throw Error(e);
				return false;
			}
			
			return true;
		}
		
		saveJSON(pathStr:string, data:string, complete:Function){
			fs.writeFile(pathStr, data, {encoding:"UTF-8"}, (e:NodeJS.ErrnoException)=>{
				if(e)throw Error(e.name+" "+e.code+" "+e.message+" "+e.path);
				complete();
			});
		}
		
		parseTernJson(data:JSON, distPathStr?:string):string{
			this.depth = 0;
			
			let o = this.parseJsonNodeDTS(data);
			//console.info("-----------------------");
			//console.log(JSON.stringify(o));
			
			let d = this.preModifiedJson(o);
			//console.info("-----------------------");
			//console.log(JSON.stringify(d));
			
			if(
				this.option.isOutExport &&
				this.userDefinedModuleName &&
				this.option.isNodeJsModule
			){
				d = this.replaceExportNamespace(d);
			}
			
			
			if(this.option.isDebug){
				this.saveJSON(distPathStr+".json", JSON.stringify(d), ()=>{});
			}
			
			let s = this.parseToDTS(d);
			
			if(this.option.isOutExport){
				//TODO:add export statements
				let n = this.option.exportModuleName ? this.option.exportModuleName : this.userDefinedModuleName;
				s += 
`
declare module '${n}' {
`;
				if(this.option.exportStyle === dtsgen.Option.ExportStyle.ES6){
					s += 
`
	export default ${this.userDefinedModuleName};    //es6 style module export 
`;
				}else{
					s += 
`
	export = ${this.userDefinedModuleName};    //legacy ts module export
`;
				}
				s += "}"+"\n";
			}
			
			return s;
			
		}
		
		private modJson = {};
		preModifiedJson(data:{}):Object{
			let modJson = clone(data);
			
			//searching defined objects
			const reg = /[.]/;
			
			for(let i in modJson[TernDef.DEFINE]){
				let value = modJson[TernDef.DEFINE][i];
				if(typeof i === "string" && reg.test(i)){
					//matched
					let p = i.split(".");
					if(p.length<=1) continue;	//not defined path
					
					//naming
					let s = "";
					if(value[0] && value[0].class && value[0].type === TSObjType.CLASS){
						//already defined class
						let np:string[] = value[0].class.split(".");
						
						s = np[np.length-1];
						
					}else{
						s = this.resolvePathToDTSName(p);
					}
					
					//replace
					this.searchAndReplaceDTS(modJson,p,s);
					
					
					//save
					if(typeof value === "string"){
						//only !type node
						let typeStr = value.toString();
						modJson[TernDef.DEFINE][i] = {};
						modJson[TernDef.DEFINE][i][TernDef.TYPE] = typeStr;
						//console.log("-----------------");
						//console.log(JSON.stringify(value));
					}else if(value instanceof Array){
						if(value[0].class){
							//same class instance
							
						}
					}
					
					modJson[TernDef.DEFINE][i][DTS_INTERFACE_STR] = s;
					//console.log("-----------------");
					//console.log(JSON.stringify(value));
					
					
					//namespace
					modJson[TernDef.DEFINE][i][DTS_NAMESPACE_STR] = this.resolveNamespace(p);
					
					
				}
			}
			
			this.modJson = modJson;
			
			return modJson; 
		}
		
		replaceExportNamespace(data:{}):Object{
			let modJson = clone(data);
			
			//nodejs node
			if(modJson[TernDef.DEFINE][TernDef.NODE]){
				let nodejsNode = modJson[TernDef.DEFINE][TernDef.NODE];
				for(let i in nodejsNode){
					//replace
					nodejsNode[this.userDefinedModuleName] = clone(nodejsNode[i]);
					
					//remove
					delete nodejsNode[i];
				}
			}
			
			//other nodes
			for(let i in modJson[TernDef.DEFINE]){
				let cNode = modJson[TernDef.DEFINE][i];
				if(cNode[DTS_NAMESPACE_STR]){
					//replace namespace
					cNode[DTS_NAMESPACE_STR] = this.userDefinedModuleName;
				}
				
				
			}
			
			if(
				modJson[this.userDefinedModuleName] &&
				modJson[this.userDefinedModuleName] instanceof Object &&
				Object.keys(modJson[this.userDefinedModuleName]).length === 0
			){
				//remove
				delete modJson[this.userDefinedModuleName];
			}
			
			return modJson;
		}
		
		resolvePathToDTSName(paths:string[]):string{
			let s = "";
			const reg2 = /^!.+/;
			const reg3 = /<.+>/;
			for(let j=paths.length-1; j>0; j--){
				
				//console.log("P[J]:"+p[j]);
				
				if(reg2.test(paths[j])){
					//tern def name
					let tmp = paths[j]
						.replace("!","")
						.replace(/^[a-z]/,(val)=>{
							return val.toUpperCase();
						});
					
					//console.log("DEFNAME:" + tmp);
						
					s = tmp + s;
					//console.log("DEFNAME2:" + s);
				}
				else if(reg3.test(paths[j])){
					//array type 
					let tmp = paths[j]
						.replace(/^</,"")
						.replace(/>$/,"")
						.replace(/^[a-z]/,
							(val)=> val.toUpperCase()
						);
					s = tmp + s;
				}
				else{
					//create defined name
					
					//console.log("BEFORENAME:" + s);
					
					let s2 = paths[j].replace(/^[a-z]/,(val)=>{
						return val.toUpperCase();
					});
					s = s2 + s;
					
					
					
					//console.log("NEW NAME: "+s);
					break;	//end
				}
			}
			return s;
		}
		
		resolveNamespace(p:string[]):string{
			let nsp:string[] = [];
			const len = p.length;
			const reg2 = /^!.+/;
			const reg3 = /<.+>/;
			
			const isOutRepNS = this.option.isOutExport;
			
			for(let i=len-1;i>=0;i--){
				
				if(reg2.test(p[i]) || reg3.test(p[i])){
					i--;
					continue;
				}
				
				
				if(isOutRepNS && p[i] === this.nodeModuleName){
					//replace nodejs namespace
					nsp.push(this.userDefinedModuleName);
				}else{
					nsp.push(p[i]);
				}
				
				
			}
			return nsp.reverse().join(".");
		}
		
		/**
		 * @param path searching ref path
		 * @param name a new name to replace
		 * @param isCheckDefine when in true, search & replace in "!define" object
		 */
		searchAndReplaceDTS(
			data:{},
			path:string[],
			name:string,
			isCheckDefine:boolean = true
		){
			const len = path.length;
			
			
			
			
			//type check
			const t = path[len-1];
			const rt = this.checkReplaceType(t);
			
			
			//search
			let ref = this.searchRef(data, path, isCheckDefine);
			if(!ref)return;	//no path
			
			
			//replace
			switch(rt){
				case ReplaceType.RETURN:
					let ret:TSObj[] = ref[0]["ret"];
					let retLen = ret.length;
					if(retLen===1){
						ret[0].class = name;
						ret[0].type = TSObjType.CLASS;
					}else{
						//TODO:real replace
						let o = <TSObj>{};
						o.class = name;
						o.type = TSObjType.CLASS;
						ret.push(o);
					}
					//console.log("ret_name:"+name);
					//console.log(`replace[${t}]:${JSON.stringify(ref[0]["ret"])}`);
					break;
				case ReplaceType.PARAM:
					let n = Number(t.replace(/^!/,""));
					
					
					//console.log(`ref:${JSON.stringify(ref)}`);
					//console.log(`ref[0]:${JSON.stringify(ref[0])}`);
					//console.log(`ref[0]["params"]:${ref[0]["params"]}`);
					
					let param = ref[0]["params"][n];
					if(param instanceof Array){
						let o = <TSObj>{};
						o.class = name;
						o.type = TSObjType.CLASS;
						
						//if same type has, then replace
						const pStr = path.slice(0, path.length-2).join(".")+"."+name;
						let hasSameClass = (<Array<TSObj>>param)
							.some((v,i,a)=>{
								return v.class && this.resolvePathToDTSName(v.class.split(".")) === name
							});
						
						//console.log("hasSameClass:", hasSameClass, name);
						
						let test = (<Array<TSObj>>param)
							.some((v,i,a)=>{
								return v.class && this.resolvePathToDTSName(v.class.split(".")) === name
							});
						
						//console.log("test",test);
						
						if(hasSameClass){
							(<Array<TSObj>>param)
								.filter((v,i,a)=>{
									return v.class && this.resolvePathToDTSName(v.class.split(".")) === name
								})
								.map((v,i,a)=>{
									v.type = TSObjType.CLASS;
									v.class = name;
								});
						}else{
							<Array<TSObj>>param.push(o);
						}
						
						
						
					}else{
						param.class = name;
						param.type = TSObjType.CLASS;
					}
					
					//ref[0].class = name;
					//console.log(`replace[${t}]:${JSON.stringify(ref[0]["params"])}`);
					break;
				case ReplaceType.CLASS:
					//console.log("REP CLASS "+name);
					ref[0]["class"] = "";
					ref[0].class = name;
					//console.log(`replace[${t}]:${JSON.stringify(ref[0])}`);
					break;
				case ReplaceType.ARRAY:
					//replacing array type
					
					let at = ref[0]["arrayType"];
					
					let nspace = path.slice(0, path.length-2).join(".") + "." + name;
					
					let nt:TSObj = {
						type:TSObjType.CLASS,
						class:nspace
					};
					//ref[0]["arrayType"] = nt;
					at[at.length-1] = nt;
					//console.log("REP_ARRAY:", name, JSON.stringify(at));
					break;
				case ReplaceType.OTHER:
					//ref[0].class = `/* ${name} */ any`;
					break;
			}
		}
		
		searchRef(
			data:{}, 
			path:string[], 
			isCheckDefine:boolean
		):any{
			
			const len = path.length;
			if(data[path[0]]) isCheckDefine = false;
			
			let ref = isCheckDefine ? data[TernDef.DEFINE] : data;
			
			
			const OBJECT_TO_STRING = "$toString";
			const OBJECT_VALUE_OF = "$valueOf";
			
			for(let i=0; i<len-1; i++){
				let s = path[i];
				
				//Object prototype prop special replace
				if(s==="toString") s = OBJECT_TO_STRING;
				if(s==="valueOf") s = OBJECT_VALUE_OF;
				
				
				if(
					s === "prototype" &&
					!ref[s] &&
					///^[A-Z].*/.test(path[i-1])
					this.checkReplaceType(path[i-1]) === ReplaceType.CLASS
				){
					//may be class member
					continue;
				}else if(ref[s] === undefined){
					//no path ref
					console.warn("no path ref:"+path.join("."));
					return;		//do nothing
				}else{
					ref = ref[s];
				}
			}
			
			//has !type node
			if(ref[TernDef.TYPE]){
				ref = ref[TernDef.TYPE];
			}
			
			return ref;
		}
		
		checkReplaceType(s:string):ReplaceType{
			let rt:ReplaceType;
			if(s === "!ret"){
				//return
				rt = ReplaceType.RETURN;
			}else if(/^![0-9]+/.test(s)){
				//param
				rt = ReplaceType.PARAM;
			}else if(/^[A-Z].*/.test(s)){
				//class or object, may be class
				rt = ReplaceType.CLASS;
			}else if(/^<.+>$/.test(s)){
				//array type
				rt = ReplaceType.ARRAY;
				//TODO:Array type replace
			}else{
				//other
				rt = ReplaceType.OTHER;
			}
			return rt;
		}
		
		ternDefClassToDTSClass(ternClassStr:string):string{
			let s = "";
			
			//console.log("-----------CLASS-------------");
			//console.log(ternClassStr);
			
			let regInstance = /^\+.*/;
			let regDefined = /^!.+/;
			if(regInstance.test(ternClassStr)){
				//some class instance
				let p = ternClassStr.split(".");
				s = p[p.length-1];
			}else if(regDefined.test(ternClassStr)){
				//path to class
				
				let p = ternClassStr.split(".");
				s = this.resolvePathToDTSName(p);
				
				//console.log("-----------CLASS-------------");
				//console.log(ternClassStr);
				
				
				
				
				//this.modJson;
			}
			
			return s;
		}
		
		/**
		 * ternjs type definition to TSObj
		 */
		parseJsonNodeDTS(data:{}):any{
			let o = JSON.parse("{}");
			
			for(let i in data){
				let value: string | {}; 
				value = data[i];
				
				switch(i){
					//converts
					case TernDef.DEFINE:
						o[i] = {};
						
						if(typeof value === "string")continue;
						else{
							for(let j in value){
								o[i] = this.parseJsonNodeDTS(value);
							}
						}
						
						break;
					case TernDef.NODE:
						if(typeof value === "string"){
							this.option.isNodeJsModule = true;
							this.nodeModuleName = value;
						}
						o[i] = this.parseJsonNodeDTS(value);
						break;
					//no converts
					case TernDef.NAME:
						this.userDefinedModuleName = <string>value;
					case TernDef.DOC:
					case TernDef.URL:
						o[i] = value;
						break;
					default:
						
						
						if(typeof value === "string"){
						//node end
							
							//Object has same name default
							switch(i){
								case "toString":
								case "valueOf":
									let newPropName = `$${i}`;
									o[newPropName] = {};
									o[newPropName] = this.parseTernDef(value);
									break;
								default:
									o[i] = this.parseTernDef(value);
							}
						}else if(
							value[TernDef.TYPE] && 
							value["prototype"]
						){
						//has !type && .prototype
							o[i] = {};
							
							//constructor
							o[i][DTSDef.NEW] = {};
							o[i][DTSDef.NEW] = this.parseTernDef(value[TernDef.TYPE], i, true);
							
							//prototype
							
							for(let j in value["prototype"]){
								if(typeof value["prototype"][j] === "string")
									o[i][j] = this.parseTernDef(value["prototype"][j]);
								else
									o[i][j] = this.parseJsonNodeDTS(value["prototype"][j]);
							}
							
							
							//member without prototype/!type
							
							for(let j in value){
								if(j===TernDef.TYPE)continue;
								if(j==="prototype")continue;
								
								if(typeof value[j] === "string"){
									if(
										j===TernDef.DOC || 
										j===TernDef.URL
									){
										o[i][j] = value[j];
									}else{
										o[i][j] = this.parseTernDef(value[j]);
									}
								}else{
									o[i][j] = this.parseJsonNodeDTS(value[j]);
								}
								
							}
						}else{
							o[i] = this.parseJsonNodeDTS(value);
						}
						break;
				}
			}
			
			return o;
		}
		
		private isInDefine = false;
		private isNodeJsModule = false;
		private isInClassOrInterface = false;
		private isInObjectLiteral = false;
		private isNeedDeclare = true;
		
		parseToDTS(data:{}):string{
			let s = "";
			for(let i in data){
				let value:string|Object[]|Object;
				value = data[i];
				
				switch (i) {
				case TernDef.NAME:
					s += `/* LIB: ${value} */\n`;
					break;
				case TernDef.DEFINE:
					//already defined class instance
					if(value instanceof Array)continue;
					//nothing
					if(typeof value === "string")continue;
					
					this.isInDefine = true;
					for(let j in <Object>value){
						//nodejs module
						if(j === TernDef.NODE){
							this.isNodeJsModule = true;
							
							s = this.wrapNamespace(value[TernDef.NODE], s, TernDef.NODE);
							
							this.isNodeJsModule = false;
						}
						//global defined
						else{
							let ns:string = "";
							let defName:string = "";
							if(value[j][DTS_INTERFACE_STR]){
								defName = value[j][DTS_INTERFACE_STR].toString();
								delete value[j][DTS_INTERFACE_STR];
							}else{
								defName = j;
							}
							
							//has namespace
							if(value[j][DTS_NAMESPACE_STR]){
								ns = value[j][DTS_NAMESPACE_STR];
								delete value[j][DTS_NAMESPACE_STR];
							}
							
							//already defined no output
							if(
								value[j] instanceof Array &&
								value[j].length === 1 &&
								value[j][0].type === TSObjType.CLASS 
							){
								
								continue;
							}
							
							//outputs
							if(ns!=""){
								//namespace open
								s += this.indent();
								s += this.addDeclare(true);
								s += `namespace ${ns}{\n`;
								this.depth++;
							}
							
							//type alias
							if(value[j] instanceof Array){
								s += this.indent();
								s += `// ${j}\n`;	
								s += this.indent();
								s += `type ${defName} = `;
								s += this.tsObjsToUnionDTS(
									value[j],
									(<TSObj[]>value[j]).some((v,i,a)=> v.type === TSObjType.FUNCTION)
								);
								s += ";\n";
							}
							//global variables
							else if(typeof value[j] === "string"){
								s += this.indent();
								s += this.outJSDoc(
									value[j][TernDef.DOC] ? value[j][TernDef.DOC] : undefined,
									value[j][TernDef.URL] ? value[j][TernDef.URL] : undefined
								);
								s += `var ${defName}: ${value[j]}\n`;
							}
							//interface
							else{
								
								s += this.interfaceDTS(defName, value[j], j);
							}
							
							if(ns!=""){
								//namespace close
								this.depth--;
								s += this.indent();
								s += `}\n`;
							}
						}
					}
					this.isInDefine = false;
					//}
					break;
				case TernDef.DOC:
					//output only jsdoc
					break;
				case TernDef.SPAN:
					break;
				default:
					//node end
					if(value instanceof Array){
						s += this.indent();
						s += this.convertTSObjToString(i, value, value[TernDef.DOC], value[TernDef.URL]);
					}
					else if(typeof value === "string"){
						s += this.outJSDoc(
							value[TernDef.DOC],
							value[TernDef.URL]
						);
						s += this.indent();
						s += this.addDeclare();
						s += i + " : " + value;
					}
					//has "new ()" is class interface
					else if(value && value[DTSDef.NEW]){
						s += this.interfaceDTS(i,value);
					}
					//has only {} node end
					else if(value instanceof Object &&Object.keys(value).length===0){
						
						
						
						s += this.indent();
						s += this.convertTSObjToString(i, [<TSObj>{}], value
							[TernDef.DOC], value[TernDef.URL]);
					}
					//has only terndef children
					else if(
						value &&
						value[TernDef.TYPE]
						//TODO: other terndef node
					){
						//s += this.outJSDoc();
						s += this.indent();
						s += this.convertTSObjToString(i,value[TernDef.TYPE],value[TernDef.DOC], value[TernDef.URL]);
					}
					//has class/interface children is namespace
					else if(
						this.isNamespace(value)
					){
						s += this.indent();
						s += this.addDeclare();
						s += `namespace ${i}{\n`;
						this.depth++;
						s += this.parseToDTS(value);
						this.depth--;
						s += this.indent();
						s += `}\n`;
					}
					//has child
					else{
						
						s += this.outJSDoc(
							value[TernDef.DOC],
							value[TernDef.URL]
						);
						s += this.indent();
						//object literal type
						if(!this.isInObjectLiteral && !this.isInClassOrInterface){
							s += this.addDeclare();
							s += "var ";
						}
						s += `${i} : {\n`;
						this.isInObjectLiteral = true;
						this.depth++;
						//s += this.indent();
						s += this.parseToDTS(value);
						this.depth--;
						this.isInObjectLiteral = false;
						s += this.indent();
						s += `}\n`;
						
					}
					
					break;
				}
			}
			return s;
		}
		
		addDeclare(flag?:boolean):string{
			const DECLARE_STR = "declare ";
			if(flag && flag === true) return DECLARE_STR;
			else if(this.depth===0) return DECLARE_STR;
			else return "";
		}
		
		/**
		 * @param defName interface name
		 */
		interfaceDTS(
			defName:string,
			value:{}|{}[],
			path?:string
		):string{
			let s = "";
			
			//interface name
			if(path){
				s += this.indent();
				s += `// ${path}\n`;	//TODO:output option ternjs internal ref path
			}
			s += this.outJSDoc(
				value[TernDef.DOC] ? value[TernDef.DOC] : null,
				value[TernDef.URL] ? value[TernDef.URL] : null
			);
			s += this.indent();
			s += this.addDeclare();
			s += `interface ${defName}`;
			
			//extending other class/interface
			if(value[TernDef.PROTO]){
				let proto = value[TernDef.PROTO];
				
				if(
					proto instanceof Array &&
					proto.length > 1
				){
					const str = "Object extends 2 or more other objects, but TypeScript only extends SINGLE Class/Interface.";
					console.warn(str);
					s += `/* ${str} */`;
					
				}else{
					
					let t:TSObj = proto[0];
					
					//resolve path to object prototype
					let p = t.class.split(".");
					if(p[p.length-1]==="prototype"){
						//output
						let ext = p.slice(0, p.length-1).join(".");
						s += ` extends ${ext}`;
					}
					
					//delete temp property
					value[TernDef.PROTO] = undefined;
					delete value[TernDef.PROTO];
				}
			}
			
			//interface body
			this.isInClassOrInterface = true;
			this.isInObjectLiteral = true;
			this.isNeedDeclare = false;
			s += ` {\n`;
			this.depth++;
			
			s += this.parseToDTS(value);
			
			this.depth--;
			s += this.indent();
			s += `}\n`;
			this.isInObjectLiteral = false;
			this.isInClassOrInterface = false;
			this.isNeedDeclare = true;
			//interface var to new()
			if(value[dtsgen.DTSDef.NEW] && this.option.isExportInterfaceSameNameVar){
				s += this.indent();
				s += this.addDeclare();
				s += `var ${defName}: ${defName};\n`;
			}
			
			return s;
		}
		
		isNamespace(value:any):boolean{
			if(!value){
				return false;
			}
			else if(value instanceof Array)
				return false;
			else if(value[TernDef.TYPE])
				return false;
			else if(!(value instanceof Object))
				return false;
			else if(Object.keys(value).length === 0)
				return false;
			else{
				let hasNewFunc = false;
				for(let i in value){
					if(!value[i])continue;
					//console.log(`value[${i}]:${value[i]}`);
					if(value[i][DTSDef.NEW]){
						hasNewFunc=true;
						break;
					}
				}
				return hasNewFunc;
			}
		}
		
		/**
		 * 
		 */
		outJSDoc(
			comment?:string, 
			url?:string,
			params?:string[],
			ret?:string
		):string{
			let s = "";
			
			//jsdoc open
			s += this.indent();
			s += "\n";
			s += this.indent();
			s += `/**\n`;
			
			//base comment from js files
			s += this.indent();
			if(comment){
				//TODO:support multi platform BR
				const aComment = comment.split("\n");
				const len = aComment.length;
				for(let i=0; i<len; i++){
					if(i!==0) s += this.indent(); 
					s += ` * ${aComment[i]}\n`;
					
				}
			}else{
				s += ` * \n`;
			}
			
			//params
			if(params){
				for(let i of params){
					s += this.indent();
					s += ` * @param ${i} \n`;
				}
				
			}
			
			//returns
			if(ret){
				s += this.indent();
				s += ` * @return ${ret}\n`;
			}
			
			//url
			if(url){
				s += this.indent();
				s += ` * @url ${url}\n`;
			}
			
			//jsdoc close
			s += this.indent();
			s += ` */\n`;
			
			return s;
		}
		
		outFuncJsDocs(
			t:TSObj,
			docData?:string,
			urlData?:string
		):string{
			let s = "";
			let ps = 
				(t.params) ?
				t.params
					.map((v,i,a)=>{
						if(v instanceof Array){
							return v[0].name;
						}else{
							return v.name;
						}
					}) :
				null;
			let rs = 
				(
					!t.ret || 
					t.ret
					.every((v,i,a)=>v.type === TSObjType.VOID) 
				) ? 
				null :	//no ret or void only 
				//t.ret.map((v,i,a)=> v.class ? v.class : "").join(", ");
				//TODO:return info
				" "
			s += this.outJSDoc(docData,urlData,ps,rs);
			return s;
		}
		
		
		convertTSObjToString(
			symbolName:string, 
			tsObjects:TSObj[],
			docData?:string,	//TODO:support doc data
			urlData?:string,	//TODO:support url data
			spanData?:string	//TODO:support spandata
		):string{
			let s = "";
			let keyword = "";
			
			let isFunc = false;
			if(tsObjects[0].type === TSObjType.FUNCTION){
				isFunc = true;
			}
			
			//Object property special replace revert
			if(/^\$(toString|valueOf)$/.test(symbolName)){
				//console.log(symbolName+" should revert.");
				symbolName = symbolName.replace(/^\$/,"");
			}
			
			
			//may be class
			let isMaybeClass = false;
			if(
				/^[A-Z]/.test(symbolName) &&  //PascalCase
				tsObjects[0].type === TSObjType.FUNCTION
			){
				isMaybeClass = true;
			}
			
			//keyword
			if(this.isInClassOrInterface){
				
			}else if(this.isInObjectLiteral){
				
			}
			else{
				
				if(isFunc && !isMaybeClass){
					keyword = "function ";
				}else if(isFunc && isMaybeClass){
					//TODO:option class or interface (default)
					keyword = "class ";
				}else{
					keyword = "var ";
				}
			}
			
			//function not class/interface
			if(isFunc && !isMaybeClass){
				let ol = tsObjects.length;
				//TODO:overloads support
				
				
				//out
				ol = tsObjects.length;
				for(let i=0;i<ol;i++){
					let t = tsObjects[i];
					//console.log("T:"+JSON.stringify(t));
					
					//jsdoc
					s += this.outFuncJsDocs(t, docData,urlData)
					s += this.indent();
					
					//output function d.ts
					s += this.addDeclare();
					s += keyword + symbolName + "("+ this.paramsToDTS(t.params) +")";
					
					//return type					
					
					if(
						t.ret &&
						symbolName === DTSDef.NEW &&
						!this.option.isAnnotateTypeInstance &&
						
						t.ret.every((v)=>v.type === TSObjType.VOID) 
						
					){
						//constructor maynot return self instance
						//no output type annotation
					}
					else if(t.ret){
						s += `: ${this.tsObjsToUnionDTS(t.ret, false, t, false)}`;
					}
				}
				
				
				//s += keyword + symbolName + "():" + JSON.stringify(tsObjects);
			}
			//may be class/interface
			else if(isFunc && isMaybeClass){
				
				let nt:any = {
					//type:TSObjType.FUNCTION,
					[DTSDef.NEW]:[],
					[TernDef.DOC]:docData ? docData : null//,
					//[TernDef.URL]:urlData ? urlData : null
				};
				if(urlData)nt[TernDef.URL] = urlData;
				for(let i in tsObjects){
					if(i===TSObj.Def.TYPE)continue;
					let tmp = tsObjects[i];
					//console.log("TMP:", JSON.stringify(tmp));
					tmp.ret
						.filter((v,i,a)=>v.type===TSObjType.VOID)
						.map((v,i,a)=>{
							//console.log("V1:",JSON.stringify(v))
							v.type = TSObjType.CLASS;
							v.class = symbolName;
							//console.log("V2:",JSON.stringify(v))
							return v;
						});
					
					nt[DTSDef.NEW].push(tmp);
				}
				s += this.interfaceDTS(symbolName, nt);
				
				if(false){
					//class open
					s += this.outJSDoc(docData,urlData);
					s += this.indent();
					s += keyword + symbolName + "{\n";
					this.depth++;
					
					//constructor only
					for(let i in tsObjects){
						//constructor overloads
						let t = tsObjects[i];
						
						//jsdoc
						s += this.indent();
						s += this.outFuncJsDocs(t, docData,urlData)
						
						
						s += this.indent();
						s += "constructor(" + this.paramsToDTS(t.params) +");\n";
					}
					
					//class close
					this.depth--;
					s += this.indent();
					s += "}";
				}
			}
			else{
				s += this.outJSDoc(
					docData,
					urlData
				);
				s += this.indent();
				if(!this.isInDefine && !this.isInObjectLiteral && !this.isInClassOrInterface) s += "export ";
				s += this.addDeclare();
				s += keyword + symbolName+" : "+this.tsObjsToUnionDTS(tsObjects);
			}
			
			//close ;
			if(isMaybeClass)s += "\n";
			else s += ";\n";
			//this.depth--;
			
			return s;
		}
		
		
		
		paramsToDTS(params:TSObj[]):string{
			//console.log("PARAMS:" + JSON.stringify(params));
			
			if(params==null) return "";
			else 
				return params
				.map((v, i, a)=>{
					//console.log(`|-[${i}]:${JSON.stringify(v)}`);
					if(v instanceof Array){
						return this.tsObjsToUnionDTS(<any>v, true);
					}else{
						if(!v.name) v.name = `param${i+1}`;
						return this.tsObjToDTS(v);
					}
				})
				.join(", ");
		}
		
		/**
		 * @param wrap wrap params with "()"
		 */
		tsObjsToUnionDTS(
			t:TSObj[],
			wrap:boolean = false,
			parentTSObj?:TSObj,
			isOutName:boolean = true
		):string{
			if(!t){
				//not unions
				throw Error("union needs dts any tsObjs.")
			} //return "!!ERROR!!";
			
			//merge `any` only union
			let isOnlyAny = t
				.every((v,i,a)=>(v.type === TSObjType.ANY));
			if(isOnlyAny){
				return this.tsObjToDTS(t[0], wrap, parentTSObj, isOutName);
			}
			
			//replace `any` to `{}` or `Object` if this is not `any` only union
			//because typescript type inferrence can't show union types (eg. VS Code)
			let hasAny = t.some((v,i,a)=>(v.type === TSObjType.ANY)) && (t.length > 1);
			if(hasAny){
				t = t.map((v,i,a)=>{
					if(v.type === TSObjType.ANY){
						v.type = TSObjType.CLASS;
						v.class = "{}";
					}
					return v;
				});
			}
			
			
			return t
				.map((v, i, a)=>{
					let isOutParamName = isOutName;
					if(i!==0) isOutParamName = false;
					// v.name = null;	//don't output
					//if(!isOutName) v.name = null;
					
					return this.tsObjToDTS(v, wrap, parentTSObj, isOutParamName);
				})
				.join(" | ");
		}
		
		tsObjToDTS(
			t:TSObj,
			wrap:boolean = false,
			parentTSObj?:TSObj,
			isOutName:boolean = true
		):string{
			let s = "";
			if(t.name && isOutName) s += t.name + " : ";
			wrap = wrap && (t.type === TSObjType.FUNCTION);
			if(wrap) s += "(";	//wrap start
			switch(t.type){
				case TSObjType.ANY:
					s += "any";
					break;
				case TSObjType.ARRAY:
					s += "Array<"+this.tsObjsToUnionDTS(t.arrayType)+">";
					
					break;
				case TSObjType.BOOLEAN:
					s += "boolean";
					break;
				case TSObjType.CLASS:
					//ref to user class
					
					if(/^\+.+/.test(t.class)){
						//class instance
						s += t.class.replace(/^\+/,"");
						//TODO:check real path
					}else{
						s += t.class;
					}
					
					//this.ternDefClassToDTSClass(t.class);
						
					break;
				case TSObjType.FUNCTION:
					//console.log("TStoDTS:fn("+t.params+")"+(t.ret)?"=>"+t.ret:"");
					
					s += "("+ this.paramsToDTS(t.params) +")";
					
					if(!t.ret){
						t.ret = [<TSObj>{type:TSObjType.VOID}];
					}
					s += " => " + this.tsObjsToUnionDTS(t.ret, false, null, false);
					
					
					break;
				case TSObjType.NUMBER:
					s += "number";
					break;
				case TSObjType.OBJECT:
					if(t.class){
						
						switch (this.checkReplaceType(t.class)) {
						case ReplaceType.PARAM:
							//TODO:replace
							let n = Number(t.class.replace(/^!/, ""));
							
							if(!parentTSObj || !parentTSObj.params){
								s += `/*${t.class}*/ any`;
								break;
							}
							
							let rep:TSObj|TSObj[] = parentTSObj.params[n];
							//console.log("rep_rep:"+JSON.stringify(rep))
							if(rep instanceof Array){
								s += this.tsObjsToUnionDTS(rep,false,null,false);
							}else{
								s += this.tsObjToDTS(<TSObj>rep,false,null,false);
								if((<TSObj>rep).type===TSObjType.ANY){
									s += ` /* same type param "${(<TSObj>rep).name}" */`;
									//TODO:generate class/interface
								}
							}
							
							
							break;
						case ReplaceType.RETURN:
							//TODO:replace
							s += `/* ${t.class} */`;
							break;
						case ReplaceType.ARRAY:
							//TODO:replace
							s += `/* Array<${t.class}> */`;
							break;
						default:
							s += `/* ${t.class} */ `;
							s += "any";
							break;
						}
					}else{
						s += "any";
					}
					
					break;
				case TSObjType.STRING:
					s += "string";
					break;
				case TSObjType.UNIONS:
					throw Error("unions? "+ JSON.stringify(t));
					break;
				case TSObjType.VOID:
					if(this.option.isOutVoidAsAny) s += "/* void */ any";
					else s += "void";
					break;
				default:
					s += "/*no type*/{}";	//no type
					break;
			}
			if(wrap) s += ")";	//wrap end
			return s;
		}
		
		/**
		 * 
		 */
		wrapNamespace(value:string|Object, s:string, nodeName:string):string{
			if(typeof value === "string"){
				throw Error(nodeName +" node value must not to be string.");
			}else{
				for(let j in value){
					//open namespace
					s += "//nodejs module namespace\n";
					s += this.addDeclare();
					s += `namespace ${j}{\n`;
					//TODO:use namespace keyword option
					this.depth++;
					//s += this.indent();
					s += this.parseToDTS(value[j]);
					this.depth--;
					//close namespace
					s += `}\n`;
				}
			}
			return s;
		}
		
		private depth:number = 0;
		indent():string{
			let s = "";
			const INDENT_STR = "	";	//defalut tab string
			for(let i = 0|0; (i|0)<(this.depth|0);i++){
				s += INDENT_STR;
			}
			return s;
		}
		
		convertTernJsToTs(ternDef:string):TSObj{
			let ts:TSObj;
			
			return ts;
		}
		
		parseTernDef(ternDef:string, parentName?:string, isConstructor:boolean = false):any[]{
			if(!ternDef) throw Error("need ternjs def string.");
			
			//remove spaces
			ternDef = ternDef.replace(/[\s\t\n]+/g,"");
			
			//remove outer ()
			let reg = /^\((.+)\)$/;
			if(reg.test(ternDef)){
				//console.log("reg:"+ternDef.match(reg)[1]);
				ternDef = ternDef.match(reg)[1];
				//console.log("rm ():"+ ternDef);
			}
			
			//
			let sa = this.splitUnions(ternDef);
			let ret:any[] = [];
			for(let i of sa){
				let ts = <TSObj>{};
				ts.type = this.checkType(i);
				if(parentName)ts.name = parentName;
				if(ts.type === TSObjType.CLASS || ts.type === TSObjType.OBJECT){
					ts.class = i;
					//console.log("++++++++++++++++++++++++");
					//console.log(" ["+i+"]:" + ts.class);
					//console.log("++++++++++++++++++++++++");
				} 
				//console.log(`ts:${JSON.stringify(ts)}, ts.type:${ts.type}`);
				switch (ts.type) {
					case TSObjType.UNIONS:
						ret.push(this.parseTernDef(i));
						continue;
						break;
					case TSObjType.ARRAY:
						//console.log("ARRAY:"+i);
						let test = i.replace(/^\[/,"").replace(/\]$/,"");
						//console.log(`i.replace(/^\[/,"").replace(/\]$/,""):${test}`);
						ts.arrayType = 
							this.parseTernDef(
								i.replace(/^\[/,"").replace(/\]$/,"")
							);
						break;
					case TSObjType.FUNCTION:
						//console.log(`fn:${i}`);
						
						ts.ret = this.parseFnReturn(i, parentName, isConstructor);
						
						ts.params = 
							this.parseParams(i);
						break;
					case TSObjType.CLASS:
					case TSObjType.OBJECT:
						ts.class = i;
						//console.log("---CLASS/Object----"+ i + "----------");
						break;
					case TSObjType.ANY:
					case TSObjType.BOOLEAN:
					case TSObjType.NUMBER:
					default:
						break;
				}
				ret.push(ts);
				//ret.push(this.parseTernDef(i));
			}
			//console.log(`ret:${JSON.stringify(ret)}`);
			return ret;
		}
		
		private parseFnReturn(fnStr:string, parentName?:string, isConstructor:boolean = false):TSObj[]{
			let sa = this.splitReturn(fnStr);
			
			if(isConstructor && this.option.isAnnotateTypeInstance && parentName && sa.length === 1){
				//force annotate constructor return type instance
				return [<TSObj>{type:TSObjType.CLASS,class:parentName}];
			}
			else if(sa.length===1){
				//void
				return [<TSObj>{type:TSObjType.VOID}];
			}
			
			//console.log(`fn-ret:${sa[1]}`);
			//return null;
			/*
			let ret:any[] = [];
			for(let i of sa){
				ret.push(this.parseTernDef(i));
			}*/
			let ret = this.parseTernDef(sa[1]);
			if(isConstructor && this.option.isAnnotateTypeInstance && parentName){
				ret
					.filter((v,i,a)=>v.type===TSObjType.VOID)
					.map((v,i,a)=>{
						return <TSObj>{type:TSObjType.CLASS,class:parentName}
					});
				
			}
			return ret;
		}
		
		parseParams(fnStr:string):any[]{
			let fns = this.splitReturn(fnStr)[0];
			//console.log("paramFnStr: "+fns);
			let reg1 = /^fn\(/;
			let reg2 = /\)$/;
			//let reg3 = /.*->.*/;
			
			//still inner
			/*
			if(reg1.test(fnStr)&&reg2.test(fnStr)&&reg3.test(fnStr)){
				
			}*/
			
			
			let fna = 
				reg1.test(fns) && reg2.test(fns) /*&& !reg3.test(fnStr) */?
				fns
					.replace(/^fn\(/, "")
					.replace(/\)$/,"") :
				fns;
			/*
			console.log(
				"\u001b[32m■[check!]:\u001b[0m"+
				reg1.test(fns)+
				"^"+
				reg2.test(fns)+
				//"^"+
				//!reg3.test(fnStr)+
				",\n"+
				fna
			);*/
			
			if(!fna || fna.length===1){
				//console.log("no params. : "+fnStr)
				return null;
			}else{
				let paramStr = fna;
				//console.log("param_str[1]:"+ paramStr);
				//return;
				//*
				let sa = this.splitParams(paramStr);
				
				//console.log(`param_str[2]:${sa}, len:${sa.length}`)
				
				let ret:any[] = [];
				for(let i of sa){
					let n = i.search(/:/);
					let name = (n===-1) ? null : i.substring(0,n);
					let sType = i.substring(n+1); 
					//console.log(`sType:${sType}`);
					let checked = this.checkType(sType);
					if(TSObjType.UNIONS === checked){
						//unions
						
						let pa = this.parseTernDef(sType, name);
						ret.push(pa);
					}
					else if(TSObjType.ARRAY === checked){
						let a = this.parseTernDef(sType,name);
						if(a.length===1){
							ret.push(a[0]);
						}else{
							ret.push(a);
						}
						
					}
					else{
						
						let ts = <TSObj>{};
						if(n!==-1)ts.name = name;
						ts.type = checked;
						
						if(
							ts.type === TSObjType.OBJECT ||
							ts.type === TSObjType.CLASS
						){
							ts.class = sType;
						}
						
						
						//if(n===-1)console.log(`ts:${ts.name},${ts.type}`);
						ret.push(ts);
					}
				}
				
				return ret;
			}
			
		}
		
		/**
		 * ternjs type to typescript type enum
		 * | (a|b) | UNIONS   |
		 * | fn()  | FUNCTION |
		 * |  ?    | ANY      |
		 * | bool  | BOOLEAN  |
		 * | number| NUMBER   |
		 * | string| STRING   |
		 * | [?]   | ARRAY    |
		 * | +abc  | CLASS    |
		 * | other above | OBJECT |
		 * @return TSObjType return enums (number)
		 */
		checkType(ternDef:string):TSObjType{
			if(this.splitUnions(ternDef).length>1){
				return TSObjType.UNIONS;
			}else if(/^fn\(/.test(ternDef)){
				//function
				return TSObjType.FUNCTION;
			}else if(ternDef==="?"){
				return TSObjType.ANY;
			}else if(ternDef==="bool"){
				return TSObjType.BOOLEAN;
			}else if(ternDef==="number"){
				return TSObjType.NUMBER;
			}else if(ternDef==="string"){
				return TSObjType.STRING;
			}else if(/^\[.+\]$/.test(ternDef)){
				return TSObjType.ARRAY;
			}else if(/^\+.+$/.test(ternDef)){
				return TSObjType.CLASS;
			}else if(ternDef!=""){
				//console.log(`\u001b[35mWARNING: \u001b[0m ${ternDef} may not be type string. Is this a Object?`);
				return TSObjType.OBJECT;
			}else{
				throw Error("\u001b[31mcan not check type. : \u001b[0m"+ternDef);
				return;
			}
		}
		
		private splitUnions(ternDef:string):string[]{
			return this.splits(ternDef, "(", ")", "|");
		}
		
		splitParams(paramStr:string):string[]{
			return this.splits(paramStr, "(", ")", ",");
		}
		
		private splitReturn(fnStr:string):string[]{
			return this.splits(fnStr, "(",")","->");
		}
		
		private splits(
			str:string, 
			depthUpStr:string,
			depthDownStr:string,
			splitter:string
		):string[]{
			let delimIdxs:number[] = [];
			let retStr:any[] = [];
			const len = str.length|0;
			let depth = 0;
			
			
			
			//*
			const dUpIni = depthUpStr.charAt(0);
			const dDwIni = depthDownStr.charAt(0);
			const splIni = splitter.charAt(0);
			for(let i = 0|0;(i|0)<(len|0);i=(i+1)|0){
				let cs = str.charAt(i);
				
				switch (cs) {
					case dUpIni:
						depth++;
						break;
					case dDwIni:
						depth--;
						break;
					case splIni:
						if(str.substr(i, splitter.length) != splitter) break;
						if(depth===0){
							delimIdxs.push(i);
							i += splitter.length;
						}
						break;	
					default:
						break;
				}

			}//*/
			
			const delimLen = delimIdxs.length;
			if(delimLen===0){
				retStr.push(str);
			}else{
				
				let start = 0;
				let end = 0;
				
				for(let j=0;j<delimLen;j++){
					end = delimIdxs[j];
					let s = str.slice(start,end);
					start = delimIdxs[j]+splitter.length;
					retStr.push(s);
					
					if(j==delimLen-1){
						retStr.push(
							str.slice(start)
						);
					}
				}
			}
			//console.log(`retStr:${retStr}`);
			return retStr;
		}
		
	}
	
	/**
	 * config option interface
	 */
	export interface Option{
		isDebug?:boolean,
		isOutVoidAsAny?:boolean,
		isExportInterfaceSameNameVar?:boolean,
		isAnnotateTypeInstance?:boolean,
		isNodeJsModule?:boolean,
		isOutExport?:boolean,
		exportStyle?:string,
		exportModuleName?:string
	}
	
	/**
	 * d.ts file data
	 */
	interface DTS{
		name:string;
		isNodeModule:boolean;
		defines:{};
		globals:Object[];
	}
	
	interface DTSNode{
		path?:string;
		
	}
	
	export const enum EnumTernDef{
		NAME,
		DEFINE,
		TYPE,
		DOC,
		URL,
		EFFECTS,
		THIS,
		RET,
		SPAN,
		PROTO,
		STR_PROTO,
		NODE
	}
	
	export /*const*/ enum ReplaceType{
		RETURN,
		PARAM,
		CLASS,
		ARRAY,
		OTHER
	}
	
	
	/**
	 * 
	 * TODO:compat to TypeScript AST
	 */
	export interface TSObj{
		type:TSObjType;
		//only for param/object/class
		name?:string;
		//only for function type
		params?:TSObj[];
		ret?:TSObj[];
		//only for array
		arrayType?:TSObj[];
		//only for class
		class?:string;
	}
	export enum TSObjType{
		ANY,
		VOID,
		BOOLEAN,
		NUMBER,
		STRING,
		FUNCTION,
		ARRAY,
		CLASS,
		UNIONS,
		OBJECT
	}
}
export namespace dtsgen.DTSDef{
	export const NEW = "new ";
}

export namespace dtsgen.TSObj.Def{
	export const TYPE = "type";
	export const NAME = "name";
	export const PARAMS = "params";
	export const RET = "ret";
	export const ARRAYTYPE = "arrayType";
	export const CLASS = "class";
}

export namespace dtsgen.Option.ExportStyle{
	/**
	 * es6 style `export default MODULE;`
	 */
	export const ES6 = "es6";
	/**
	 * legacy ts style `export = MODULE;`
	 */
	export const LEGACY = "legacy";
	
}

export namespace dtsgen.TernDef{
	export const NAME = "!name";
	export const DEFINE = "!define";
	export const TYPE = "!type";
	export const DOC = "!doc";
	export const URL = "!url";
	export const EFFECTS = "!effects";
	export const THIS = "!this";
	export const RET = "!ret";
	export const SPAN = "!span";
	export const PROTO = "!proto";
	export const STR_PROTO = "!stdProto";
	export const NODE = "!node";
	
	/**
	 * convert TernDef.CONST:string to EnumTernDef.CONST:number
	 * @param s TernDef class prop constraint string
	 * @return EnumTernDef enum
	 */
	export function strToEnum(s:string):EnumTernDef{
		switch (s) {
			case this.NAME: return EnumTernDef.NAME;break;
			case this.DEFINE: return EnumTernDef.DEFINE;break;
			case this.TYPE: return EnumTernDef.TYPE;break;
			case this.DOC: return EnumTernDef.DOC;break;
			case this.URL: return EnumTernDef.URL;break;
			case this.EFFECTS: return EnumTernDef.EFFECTS;break;
			case this.THIS: return EnumTernDef.THIS;break;
			case this.RET: return EnumTernDef.RET;break;
			case this.SPAN: return EnumTernDef.SPAN;break;
			case this.PROTO: return EnumTernDef.PROTO;break;
			case this.STD_PROTO: return EnumTernDef.STR_PROTO;break;
			case this.NODE: return EnumTernDef.NODE;break;
			default:
				throw Error("no match enum strings:"+s);
				break;
		}
	}
}
///////////////////////////////
// CLI 
//////////////////////////////
//var dgen = new dtsgen.DTSGen();
