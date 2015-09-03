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
	function registerPlugin(name : any, init : any): void;
	
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
		 * @param name 
		 * @return  
		 */
		function normalizeFilename(name : any): any;
				
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
				
		/**
		 * 
		 */
		var projectDir : string;
	}
		
	/**
	 * 
	 * @param name 
	 * @param desc 
	 */
	function defineQueryType(name : any, desc : any): void;
	
	/**
	 * 
	 */
	interface Server {
				
		/**
		 * 
		 * @param options 
		 */
		new (options : /* !modules.``/node_modules/tern/lib/tern`js.Server.!0 */ any);
				
		/**
		 * 
		 * @param name 
		 * @param text 
		 * @param parent 
		 */
		addFile(name : any, text : any, parent : any): void;
				
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
		flush(c : any): void;
				
		/**
		 * 
		 */
		startAsyncAction(): void;
				
		/**
		 * 
		 * @param err 
		 */
		finishAsyncAction(err : any): void;
				
		/**
		 * 
		 * @param defs 
		 * @param toFront 
		 */
		addDefs(defs : any, toFront : any): void;
				
		/**
		 * 
		 * @param name 
		 * @param options 
		 */
		loadPlugin(name : any, options : boolean): void;
				
		/**
		 * 
		 * @param name 
		 */
		normalizeFilename(name : any): void;
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
	function outputPos(query : any, file : tern.OutputPos1, pos : any): OutputPosRet;
		
	/**
	 * 
	 * @param query 
	 * @param completions 
	 * @param name 
	 * @param aval 
	 * @param depth 
	 * @return  
	 */
	function addCompletion(query : any, completions : tern.AddCompletion1, name : boolean | string, aval : any, depth : number): boolean | string;
		
	/**
	 * 
	 * @param file 
	 * @param query 
	 * @param wide 
	 * @return  
	 */
	function findQueryExpr(file : any, query : any, wide : boolean): any	
	/**
	 * 
	 */
	function findQueryExpr();
		
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
	function storeSpan(srv : any, query : any, span : any, target : tern.StoreSpan3): void;
		
	/**
	 * 
	 */
	var version : string;
		
	/**
	 * 
	 */
	var projectDir : string;
		
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
	namespace plugins{
	}
}
declare namespace tern{
	// !modules.``/node_modules/tern/lib/tern`js.Server.!0
	
	/**
	 * 
	 */
	interface Server0 {
	}
}
declare namespace tern{
	// !modules.``/node_modules/tern/lib/tern`js.resolvePos.!0
	
	/**
	 * 
	 */
	interface ResolvePos0 {
				
		/**
		 * 
		 */
		lineOffsets : Array<number>;
	}
}
declare namespace tern{
	// !modules.``/node_modules/tern/lib/tern`js.outputPos.!1
	
	/**
	 * 
	 */
	interface OutputPos1 {
				
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
	// !modules.``/node_modules/tern/lib/tern`js.outputPos.!ret
	
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
	// !modules.``/node_modules/tern/lib/tern`js.addCompletion.!1
	type AddCompletion1 = Array<any>;
}
declare namespace tern{
	// !modules.``/node_modules/tern/lib/tern`js.getSpan.!ret
	
	/**
	 * 
	 */
	interface GetSpanRet {
	}
}
declare namespace tern{
	// !modules.``/node_modules/tern/lib/tern`js.storeSpan.!3
	
	/**
	 * 
	 */
	interface StoreSpan3 {
				
		/**
		 * 
		 */
		contextOffset : number;
	}
}

/**
 * 
 */
declare namespace tern{
	
	/**
	 * 
	 */
	interface Error {
				
		/**
		 * 
		 */
		name : string;
	}
}

declare module 'tern/lib/tern' {

	export = tern;    //legacy ts module export
}
