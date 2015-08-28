dtsmake
====

[TypeScript](http://www.typescriptlang.org/)'s type definition file (*.d.ts files) generator tool from JavaScript files. 

## Description

[TypeScript](http://www.typescriptlang.org/)'s type definition file (*.d.ts files) generator tool from JavaScript files. This tool is WIP (Work In Progress).


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
 `dtsmake -s ./path/to/sourcefile.js`

other case:
 `dtsmake -s ./path/to/src/target.js --dist ./path/to/dist/mydefinition -n "mydefinition" -p node -e -S "legacy" -M "MyDefinition" -x "./path/to/extrafile1.js,./path/to/extrafile2.js" -N --def ./path/to/def/ecma6 -A -i -a -g`

### Example


more examples in [/example/example.js](./example/example.js)

### Options

#### -h, --help                    
 output usage information
#### -v, --version                 
 output the version number
#### -s, --src `<path>`              
 __[MUST]__ target javascript file path
#### --dist [value]                
 outout d.ts file path. no need `.d.ts` file extension.
#### -n, --n [value]               
 module name
#### -p, --plugin `<names>`          
 tern.js plugin.
 see tern.js server plugin(http://ternjs.net/doc/manual.html#plugins)
#### -d, --def `<paths>`             
 tern.js def files. DEFAULT:'ecma5'
#### -x, --extrafiles `<paths>`      
 sample files for target js lib. help for ternjs type inference.
#### -D, --debug                   
 debug output mode
#### -A, --voidAsAny               
 force output `void` to `any`
#### -i, --interfaceSameNameVar    
 export a namespace property same with a interface name
#### -a, --annotateTypeInstance    
 annotate interface's constructor type as return type instance
#### -g, --globalObject            
 how to export objects that same name with JS Global Object; "remove" or "wrap" or "rename"; DEFAULT:"wrap" 
#### -N, --NodeJSModule            
 nodejs module special replace
#### -e, --export                  
 add export statement in a bottom of d.ts file
#### -S, --exportStyle [value]     
 if --outExport true, select export style "es6" or "legacy"
#### -M, --exportModuleName [value]
 exporting module name. ex. "EXAMPLE"; usage `import example = require("EXAMPLE");`

## Known Issues

 1. JSDoc tag (`@param`, `@return`) duplication when it was already defined in the target  JavaScript code.
 2. When `-p node` (Ternjs's Nodejs plugin) option is ON, dtsgen sometimes outputs nothing.

## TODOs

see [TODO.md](./TODO.md)

## Licence

MIT

## Author

ConquestArrow
[Github](https://github.com/ConquestArrow/) | [Qiita](http://qiita.com/ConquestArrow)


[TypeScript](http://www.typescriptlang.org/)
