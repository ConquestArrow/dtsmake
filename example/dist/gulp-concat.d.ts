// Type definitions for gulpConcat
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/// <reference path="../test/fixture/node.d.ts" />

/**
 * file can be a vinyl file object or a string
 * when a string it will construct a new one
 * @param file 
 * @param opt 
 * @return  
 */
declare function gulpConcat(file : any, opt : any): any;
/**
 * file can be a vinyl file object or a string
 * when a string it will construct a new one
 * @param override 
 * @return  
 */
declare function gulpConcat(override : any): any;

declare module 'gulp-concat' {

	export = gulpConcat;    //legacy ts module export
}
