import gulp = require("gulp");
import gts = require("gulp-typescript");
import concat = require("gulp-concat");
//var sq = require("streamqueue");
//import header from 'gulp-header'//= require('gulp-header');
const todo = require('gulp-todo');

require('gulp-release-tasks')(gulp);

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
	let tsProj = gts.createProject("tsconfig.json")
	tsProj.src("./node_modules/@types")

	let result = gulp
		.src("./src/*.ts")
		.pipe(tsProj());

	return result
		.js
		.pipe(gulp.dest("./lib/"));
});

gulp.task("todo",()=>{
	return gulp
		.src("./src/*.ts")
		.pipe(todo({
			fileName:"TODO.md"
		}))
		.pipe(gulp.dest('./'));
})

gulp.task("watch",()=>{
	gulp.watch("./src/*.ts", ["build"]);
	gulp.watch("./src/*.ts", ["todo"]);
})