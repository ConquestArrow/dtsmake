// Type definitions for mylib
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare namespace mylib{
		
	/**
	 * function prop test doc
	 * @example not supported doc tag sample.
	 * @param a param 1. may be number.
	 * @param b param 2. may be number.
	 * @return may be number.
	 * @param a 
	 * @param b 
	 * @return  
	 */
	function func(a : any, b : any): number;
		
	/**
	 * string prop test doc
	 */
	export var str : string;
		
	/**
	 * number prop test doc
	 */
	export var num : number;
		
	/**
	 * boolean prop test doc
	 */
	export var bool : boolean;
		
	/**
	 * array[string] prop test doc
	 */
	export var arr : Array<string>;
		
	/**
	 * added prop doc
	 * @param a 
	 * @param b 
	 * @param c 
	 * @return  
	 */
	function addedProp(a : string, b : any, c : number): string;
}

declare module 'mylib' {

	export = mylib;    //legacy ts module export
}
