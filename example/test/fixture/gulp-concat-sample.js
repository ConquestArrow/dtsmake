//from gulp-concat README.md

/*
This will concat files by your operating systems newLine. It will take the base directory from the first file that passes through it.
*/
var gulp = require("gulp");
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src('./lib/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

/*
Files will be concatenated in the order that they are specified in the gulp.src function. For example, to concat ./lib/file3.js, ./lib/file1.js and ./lib/file2.js in that order, the following code will create a task to do that:
*/
gulp.task('scripts2', function() {
  return gulp.src(['./lib/file3.js', './lib/file1.js', './lib/file2.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

/*
To specify cwd, path and other vinyl properties, gulp-concat accepts Object as first argument:
*/
gulp.task('scripts3', function() {
  return gulp.src(['./lib/file3.js', './lib/file1.js', './lib/file2.js'])
    .pipe(concat({ path: 'new.js', stat: { mode: 0666 }}))
    .pipe(gulp.dest('./dist'));
});
