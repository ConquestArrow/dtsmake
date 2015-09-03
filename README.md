dtsmake 
====

[TypeScript](http://www.typescriptlang.org/)'s type definition file (*.d.ts files) generator tool from JavaScript files. 

[![Build Status](https://travis-ci.org/ConquestArrow/dtsmake.svg?branch=master)](https://travis-ci.org/ConquestArrow/dtsmake) [![NPM version](https://badge.fury.io/js/dtsmake.svg)](http://badge.fury.io/js/dtsmake) [![Dependency status](https://david-dm.org/ConquestArrow/dtsmake.svg)](https://david-dm.org/ConquestArrow/dtsmake#info=dependencies&view=table) 

## Description

[TypeScript](http://www.typescriptlang.org/)'s type definition file (`*.d.ts` files) generator tool from JavaScript files. This tool is **WIP** (Work In Progress).

A Japanese document: [TypeScript型定義ファイルのコツと生成ツール dtsmake](http://qiita.com/ConquestArrow/items/450f961c3d54bc932cf3)

### Features

 * Generating a `*.d.ts` file from a JavaScript file.
 * Type inference powered by [TernJS](http://ternjs.net/). (Need some sample JS files.)
 * Auto annotation JSDoc style comments.
 * Original JSDoc comment in base JS code output.
 * Header template output.

## VS. 

* [dtsgenerator](https://github.com/horiuchi/dtsgenerator) - d.ts file generator tool, for only JSON Schema files.
* [js2tsd](https://github.com/mhelvens/js2tsd) - d.ts file generator tool, no type inferrence.
* [JS2TSD](http://nekok.com/2014/05/javascript-to-typescript-type-definitions-d-ts-auto-converter/) d.ts file generator GUI tool app. Not CLI.

## Requirement

Node.js

## Install

`npm i dtsmake -g`

## Usage

simple case:
```
dtsmake -s ./path/to/sourcefile.js
```
other case:
```
dtsmake -s ./path/to/src/target.js --dist ./path/to/dist/mydefinition -n "mydefinition" -p node -e -S "legacy" -M "MyDefinition" -x "./path/to/extrafile1.js,./path/to/extrafile2.js" -N --def ./path/to/def/ecma6 -A -i -a -g
```

### Example


 * more usage examples -> [/example/example.js](./example/example.js)
 * generated TS definition files examples -> [/example/dist/](./example/dist/)

### Best Practice

#### Generating Gulp.js plugin definition files

`dtsmake -s /path/to/gulp/any/plugin.js -n "canalCasePluginName" -p node -e -M "gulp-*" -N -l "/path/to/node.d.ts"`

 * `-n "canalCasePluginName"`
  * gulp.js plugins has a name as `gulp-*`.
  * but, this is a invalid namespace name in TS.
  * so, naming canal case.
   * ex. `gulp-header` -> `gulpHeader`
   * or valid namespace name.
 * `-M "gulp-*"`
  * no need to name canal case. 
 * `-p node`
  * use nodejs plugin of tern server. 
 * `-N`
  * set nodejs module option ON
 * `-e`
  * set export option ON
 * `-l "/path/to/node.d.ts"`
  * add referrece path to node.d.ts definition file
  

### Options

#### -h, --help                    
 output usage information
#### -v, --version                 
 output the version number
#### -s, --src `<path>`              
 __[MUST]__ target javascript file path
#### --dist [value]                
 outout d.ts file path. no need `.d.ts` file extension.

ex. `--dist /path/to/dist` -> `/path/to/dist.d.ts`

#### -n, --n [value]               
 module name
#### -p, --plugin `<names>`          
 tern.js plugin.
 
  * see [tern.js server plugin](http://ternjs.net/doc/manual.html#plugins)
  * [currently support plugins](https://github.com/marijnh/tern/tree/0.14.0/plugin)

ex. `-p "node,module,commonjs"`

#### -d, --def `<paths>`             
 tern.js def files. DEFAULT:'ecma5'
 
 see [Tern.js's def json format](http://ternjs.net/doc/manual.html#typedef) and [Tern.js's sample def files](https://github.com/marijnh/tern/tree/master/defs).
#### -x, --extrafiles `<paths>`      
 sample files for target js lib. help for ternjs type inference.
 
 ex. `-x "./path/to/extrafile1.js,./path/to/extrafile2.js"`
#### -D, --debug                   
 debug output mode
#### -A, --voidAsAny               
 force output `void` to `any`
#### -i, --interfaceSameNameVar    
 export a namespace property same with a interface name
#### -a, --annotateTypeInstance    
 annotate interface's constructor type as return type instance
#### -g, --globalObject [value]            
 how to export objects that same name with JS Global Object; "remove" or "wrap" or "rename"; DEFAULT:"wrap" 

```javascript
//--globalObject "remove"
// ※no output

//--globalObject "wrap"
declare namespace mylib{
    interface Error{
        //...
    }
}

//--globalObject "rename"
interface Mylib$Error{
    //...
}
```


#### -N, --NodeJSModule            
 nodejs module special replace
#### -e, --export                  
 add export statement in a bottom of d.ts file
#### -S, --exportStyle [value]     
 if --outExport true, select export style "es6" or "legacy"

```javascript
//--exportStyle "legacy"
declare module 'mylib'{
    export = mylib;    //legacy ts module export
}
//--exportStyle "es6"
declare module 'mylib'{
    export defalut mylib;    //es6 style module export 
}
```
 
#### -M, --exportModuleName [value]

exporting module name. 
 
ex. "EXAMPLE"; usage `import example = require("EXAMPLE");`

#### -l, --lib `<paths>`

add referrece path d.ts files. 

ex. `--lib path/to/ex1.d.ts,path/to/ex2.d.ts`

=>

```javascript
/// <reference path="path/to/ex1.d.ts" />
/// <reference path="path/to/ex2.d.ts" />
```


## Known Issues

 1. JSDoc tag (`@param`, `@return`) duplication when it was already defined in the target  JavaScript code.
 2. When `-p node` (Ternjs's Nodejs plugin) option is ON, dtsmake sometimes outputs nothing.
 3. Only support Tern.js server plugins in [here](https://github.com/marijnh/tern/tree/0.14.0/plugin). 

## TODOs

 * Tern.js's server plugin without default support.
  * tern/condense cmd cannot load 3rd party plugins (ex. [tern-gulp](https://github.com/angelozerr/tern-gulp) ), so, replace or patches it.

see [TODO.md](./TODO.md)

## Licence

MIT

## Author

ConquestArrow
[Github](https://github.com/ConquestArrow/) | [Qiita](http://qiita.com/ConquestArrow)

