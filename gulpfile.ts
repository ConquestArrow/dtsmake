/// <reference path="./typings/tsd.d.ts" />


import gulp = require("gulp");
import gts = require("gulp-typescript");
import concat = require("gulp-concat");
//var sq = require("streamqueue");
var header = require('gulp-header');


gulp.task("cmdbuild",()=>{
	return 
		gulp
			.src(["./src/index.ts"])
			.pipe(gts({
				noImplicitAny:true,
				suppressImplicitAnyIndexErrors: true,
				module:"commonjs",
				target:"ES5"
			}))
			.js
		.pipe(header("#!/usr/bin/env node\n"))
		.pipe(concat("dtsgen"))
		.pipe(gulp.dest("./bin/"))
});

gulp.task("watch",()=>{
	gulp.watch("./src/index.ts", ["cmdbuild"]);
})