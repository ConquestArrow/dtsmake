/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/tern.d.ts" />
/// <reference path="../typings/infer.d.ts" />
import * as assert from 'power-assert';
import p = require("power-assert");
//import tern = require("tern/lib/tern");
import {dtsgen} from '../src/dtsgen';
import fs = require('fs');

//import {default as tern} from "tern/lib/tern";
//import * as tern from "tern/lib/tern";

import * as tern from "tern/lib/tern";

//----
//importing from "export default" syntax (es6 style)
//-----
//pattern A
//import tern from "tern/lib/tern";
//pattern B
//import {default as tern} from "tern/lib/tern";

//----
//importing from "export =" syntax (legacy style)
//----
//pattern A
//import * as tern from "tern/lib/tern";

var b:tern.GetSpanRet;

var server = new tern.Server({});
server.reset();
tern.version;
//console.log(JSON.stringify(server));



//import infer = require("tern/lib/infer");
//new infer.Context(null, null);
