// Type definitions for clone
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * Clones (copies) an Object using deep copying.
 * 
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 * 
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 * 
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
 * @param parent 
 * @param circular 
 * @param depth 
 * @param prototype 
 * @param includeNonEnumerable 
 * @return  
 */
declare function clone(parent : any, circular : boolean, depth : number, prototype : any, includeNonEnumerable : any): any;

/**
 * 
 */
declare namespace clone{
		
	/**
	 * Simple flat clone using prototype, accepts only objects, usefull for property
	 * override on FLAT configuration object (no nested props).
	 * 
	 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
	 * works.
	 * @param parent 
	 */
	function clonePrototype(parent : any): void;
		
	/**
	 * private utility functions
	 * @param o 
	 * @return  
	 */
	function __objToStr(o : any): string;
		
	/**
	 * 
	 * @param o 
	 * @return  
	 */
	function __isDate(o : any): boolean;
		
	/**
	 * 
	 * @param o 
	 * @return  
	 */
	function __isArray(o : any): boolean;
		
	/**
	 * 
	 * @param o 
	 * @return  
	 */
	function __isRegExp(o : any): boolean;
		
	/**
	 * 
	 * @param re 
	 * @return  
	 */
	function __getRegExpFlags(re : any): string;
}
