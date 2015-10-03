var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  cssMin = require('gulp-minify-css'),
  sass = require('gulp-sass'),
  notify = require('gulp-notify'),
  rename = require('gulp-rename'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  reactify = require('reactify');

var jsxSrc = './public/javascripts/src/app.jsx',
  jsFile = 'app.js',
  jsDest = './public/javascripts/build/', 
  sassSrc = './public/stylesheets/scss/*.scss',
  sassDest = './public/stylesheets/css';

/* 
 * Transform jsx to js && uglify
 */
gulp.task('js', function(){
  return browserify(jsxSrc)
    .transform(reactify)
    .bundle()
    .pipe(source(jsFile))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(jsDest))
    .pipe(notify({ message : 'JSX transformation complete'}));
});

/*
 * SASS compile and minify
 */
gulp.task('sass', function(){
  return gulp.src(sassSrc)
    .pipe(sass())
    .pipe(gulp.dest(sassDest))
    .pipe(rename({ suffix : '.min'}))
    .pipe(cssMin())
    .pipe(gulp.dest(sassDest))
    .pipe(notify({ message : 'SASS compilation complete' }));
});

/*
 * Watch for changes and rebuild
 */
gulp.task('watch', function(){
  gulp.watch(jsxSrc, ['js']);
  gulp.watch(sassSrc, ['sass']);
})

gulp.task('default', ['js', 'sass', 'watch']);
