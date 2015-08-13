/// <reference path="./typings/tsd.d.ts" />


import gulp = require("gulp");
import gts = require("gulp-typescript");
import concat = require("gulp-concat");
//var sq = require("streamqueue");
var header = require('gulp-header');

/*
gulp.task("cmdbuild", ()=>{
	let result = gulp
			.src(["./src/index.ts"])
			.pipe(
				gts(
				{
					noImplicitAny:true,
					suppressImplicitAnyIndexErrors: true,
					module:"commonjs",
					target:"ES5",
					//noEmitOnError:true,
					//out:"./lib/index.js"
				},
				undefined,
				gts.reporter.fullReporter()
				)
			);
	return result
			.js
			.pipe(gulp.dest("./lib/"))
			.pipe(header("#!/usr/bin/env node\n"))
			.pipe(concat("dtsgen"))
			.pipe(gulp.dest("./bin/"));
});*/

gulp.task("build", ()=>{
	let result = gulp
		.src("./src/*.ts")
		.pipe(gts(gts.createProject("./tsconfig.json")));
	return result
		.js
		.pipe(gulp.dest("./lib/"));
});

gulp.task("watch",()=>{
	gulp.watch("./src/*.ts", ["build"]);
})