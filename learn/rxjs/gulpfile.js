var gulp = require('gulp');
var babel = require("gulp-babel");


gulp.task('build', function () {
  return gulp.src('./src/*.js')
      .pipe(babel())
      .pipe(gulp.dest("dist"));
});

gulp.task("watch", function(){
  gulp.watch('./src/*.js', ['build'])
});


//var browserify = require('browserify');
//var babelify = require('babelify');
//var source = require('vinyl-source-stream');
//var transform = require('vinyl-transform');

//gulp.task('browserify', function() {
//  browserify({
//    entries: ['./src/app.js'],
//    debug: true
//  })
//      .transform(babelify)
//      .bundle()
//      .pipe(source('output.js'))
//      .pipe(gulp.dest('./dist'));
//});
