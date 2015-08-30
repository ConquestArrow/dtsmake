// Type definitions for tern
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
//nodejs module namespace
declare namespace tern{
		
	/**
	 * 
	 * @param name 
	 * @param init 
	 */
	function registerPlugin(name : string, init : any): void;
	
	/**
	 * 
	 */
	namespace defaultOptions{
				
		/**
		 * 
		 */
		var debug : boolean;
				
		/**
		 * 
		 */
		var async : boolean;
				
		/**
		 * 
		 * @param _f 
		 * @param c 
		 */
		function getFile(_f : any, c : any): void;
				
		/**
		 * 
		 */
		var defs : Array<any>;
				
		/**
		 * 
		 */
		var fetchTimeout : number;
				
		/**
		 * 
		 */
		var dependencyBudget : number;
				
		/**
		 * 
		 */
		var reuseInstances : boolean;
				
		/**
		 * 
		 */
		var stripCRs : boolean;
				
		/**
		 * 
		 */
		var ecmaVersion : number;
	}
		
	/**
	 * 
	 * @param name 
	 * @param desc 
	 */
	function defineQueryType(name : string, desc : /* !node.``/node_modules/tern/lib/tern`js.defineQueryType.!1 */ any): void;
	
	/**
	 * 
	 */
	interface Server {
				
		/**
		 * 
		 * @param options 
		 */
		new (options : any);
				
		/**
		 * 
		 * @param name 
		 * @param text 
		 * @param parent 
		 */
		addFile(name : string, text : any, parent : any): void;
				
		/**
		 * 
		 * @param name 
		 */
		delFile(name : any): void;
				
		/**
		 * 
		 */
		reset(): void;
				
		/**
		 * 
		 */
		cx : /*no type*/{};
				
		/**
		 * 
		 */
		uses : number;
		
		/**
		 * 
		 */
		budgets : {
		}
				
		/**
		 * 
		 * @param doc 
		 * @param c 
		 */
		request(doc : any, c : any): void;
				
		/**
		 * 
		 * @param name 
		 * @return  
		 */
		findFile(name : string): /* !this.fileMap.<i> */ any;
				
		/**
		 * 
		 * @param c 
		 */
		flush(c : tern.Server.prototype.Flush0): void;
				
		/**
		 * 
		 */
		startAsyncAction(): void;
				
		/**
		 * 
		 * @param err 
		 */
		finishAsyncAction(err : any): void;
	}
		
	/**
	 * 
	 * @param file 
	 * @param pos 
	 * @param tolerant 
	 * @return  
	 */
	function resolvePos(file : tern.ResolvePos0, pos : {} | number, tolerant : boolean): {} | number;
		
	/**
	 * 
	 * @param query 
	 * @param file 
	 * @param pos 
	 * @return  
	 */
	function outputPos(query : any, file : any, pos : any): OutputPosRet;
		
	/**
	 * 
	 * @param query 
	 * @param completions 
	 * @param name 
	 * @param aval 
	 * @param depth 
	 * @return  
	 */
	function addCompletion(query : any, completions : Array<any>, name : boolean | string, aval : any, depth : number): boolean | string;
		
	/**
	 * 
	 * @param file 
	 * @param query 
	 * @param wide 
	 * @return  
	 */
	function findQueryExpr(file : any, query : any, wide : boolean): FindQueryExprRet;
		
	/**
	 * 
	 * @param obj 
	 * @return  
	 */
	function getSpan(obj : any): GetSpanRet;
		
	/**
	 * 
	 * @param srv 
	 * @param query 
	 * @param span 
	 * @param target 
	 */
	function storeSpan(srv : /* tern.Server */ any, query : any, span : any, target : any): void;
		
	/**
	 * 
	 */
	var version : string;
		
	/**
	 * 
	 */
	var files : Array<any>;
		
	/**
	 * 
	 */
	var needsPurge : Array<any>;
		
	/**
	 * 
	 */
	var uses : number;
		
	/**
	 * 
	 */
	var pending : number;
	
	/**
	 * 
	 */
	namespace passes{
	}
	
	/**
	 * 
	 */
	namespace _component{
		
		/**
		 * 
		 */
		namespace server{
						
			/**
			 * 
			 */
			var version : string;
						
			/**
			 * 
			 * @return  
			 */
			function cx(): any			
			/**
			 * 
			 */
			function cx();
						
			/**
			 * 
			 */
			var uses : number;
						
			/**
			 * 
			 */
			var pending : number;
						
			/**
			 * 
			 */
			var registerPlugin : /* !node.``/node_modules/tern/lib/tern`js.registerPlugin */ any;
						
			/**
			 * 
			 */
			var defaultOptions : /* !node.``/node_modules/tern/lib/tern`js.defaultOptions */ any;
						
			/**
			 * 
			 */
			var defineQueryType : /* !node.``/node_modules/tern/lib/tern`js.defineQueryType */ any;
						
			/**
			 * 
			 */
			var Server : /* !node.``/node_modules/tern/lib/tern`js.Server */ any;
						
			/**
			 * 
			 */
			var resolvePos : /* !node.``/node_modules/tern/lib/tern`js.resolvePos */ any;
						
			/**
			 * 
			 */
			var outputPos : /* !node.``/node_modules/tern/lib/tern`js.outputPos */ any;
						
			/**
			 * 
			 */
			var addCompletion : /* !node.``/node_modules/tern/lib/tern`js.addCompletion */ any;
						
			/**
			 * 
			 */
			var findQueryExpr : /* !node.``/node_modules/tern/lib/tern`js.findQueryExpr */ any;
						
			/**
			 * 
			 */
			var getSpan : /* !node.``/node_modules/tern/lib/tern`js.getSpan */ any;
						
			/**
			 * 
			 */
			var storeSpan : /* !node.``/node_modules/tern/lib/tern`js.storeSpan */ any;
						
			/**
			 * 
			 */
			var options : any;
						
			/**
			 * 
			 */
			var handlers : any;
						
			/**
			 * 
			 */
			var files : /* !node.``/node_modules/tern/lib/tern`js.files */ any;
						
			/**
			 * 
			 */
			var fileMap : any;
						
			/**
			 * 
			 */
			var needsPurge : /* !node.``/node_modules/tern/lib/tern`js.needsPurge */ any;
						
			/**
			 * 
			 */
			var budgets : any;
						
			/**
			 * 
			 */
			var passes : /* !node.``/node_modules/tern/lib/tern`js.passes */ any;
						
			/**
			 * 
			 */
			var _component : /* !node.``/node_modules/tern/lib/tern`js._component */ any;
						
			/**
			 * 
			 */
			var _docComment : /* !node.``/node_modules/tern/lib/tern`js._docComment */ any;
						
			/**
			 * 
			 */
			var _node : /* !node.``/node_modules/tern/lib/tern`js._node */ any;
						
			/**
			 * 
			 */
			var _requireJS : /* !node.``/node_modules/tern/lib/tern`js._requireJS */ any;
						
			/**
			 * 
			 */
			var _angular : /* !node.``/node_modules/tern/lib/tern`js._angular */ any;
		}
	}
		
	/**
	 * 
	 */
	var _docComment : /*no type*/{};
		
	/**
	 * 
	 */
	var _node : /*no type*/{};
		
	/**
	 * 
	 */
	var _requireJS : /*no type*/{};
		
	/**
	 * 
	 */
	var _angular : /*no type*/{};
}
declare namespace tern.Server.prototype{
	// !node.``/node_modules/tern/lib/tern`js.Server.prototype.flush.!0
	type Flush0 = (() => void);
}
declare namespace tern{
	// !node.``/node_modules/tern/lib/tern`js.resolvePos.!0
	
	/**
	 * 
	 */
	interface ResolvePos0 {
				
		/**
		 * 
		 */
		name : string;
				
		/**
		 * 
		 */
		lineOffsets : Array<number>;
				
		/**
		 * 
		 */
		text : string;
	}
}
declare namespace tern{
	// !node.``/node_modules/tern/lib/tern`js.outputPos.!ret
	
	/**
	 * 
	 */
	interface OutputPosRet {
				
		/**
		 * 
		 */
		line : number;
				
		/**
		 * 
		 */
		ch : number;
	}
}
declare namespace tern{
	// !node.``/node_modules/tern/lib/tern`js.findQueryExpr.!ret
	
	/**
	 * 
	 */
	interface FindQueryExprRet {
		
		/**
		 * 
		 */
		node : {
						
			/**
			 * 
			 */
			type : string;
		}
	}
}
declare namespace tern{
	// !node.``/node_modules/tern/lib/tern`js.getSpan.!ret
	
	/**
	 * 
	 */
	interface GetSpanRet {
	}
}

declare module 'tern/lib/tern' {

	export = tern;    //legacy ts module export
}
