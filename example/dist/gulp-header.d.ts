// Type definitions for gulpHeader
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/// <reference path="../test/fixture/node.d.ts" />

/**
 * gulp-header plugin
 * @param headerText 
 * @param data 
 * @return  
 */
declare function gulpHeader(headerText : any, data : any): any;
/**
 * gulp-header plugin
 * @param override 
 * @return  
 */
declare function gulpHeader(override : any): any;

declare module 'gulp-header' {

	export = gulpHeader;    //legacy ts module export
}
