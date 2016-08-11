
var gulp = require('gulp'),
   mainBowerFiles = require('gulp-bower'),
   usemin = require('gulp-usemin'),
   minifyhtml = require('gulp-htmlmin'),
   cleancss = require('gulp-clean-css'),
   uglify = require('gulp-uglify'),
   debug = require('gulp-debug');


gulp.task('bower', function () {
   return mainBowerFiles('project/bower_components')
       .pipe(gulp.dest('build/bower_components'))
});

gulp.task('usemin', function() {
   return gulp.src('./project/*.html')
       .pipe(usemin({
           html: [minifyhtml({ collapseWhitespace: true })],
           css: [cleancss({ compatibility: 'ie8' })],
           js: [uglify(), 'concat']
       }))
       .pipe(debug({ title: 'usemin-debug' }))
       .pipe(gulp.dest('build'))
});

gulp.task('images', function() {
   return gulp.src(['./project/images/*.png'])
       .pipe(debug({ title: 'images-debug' }))
       .pipe(gulp.dest('build/images'))
});

gulp.task('build', ['bower', 'images', 'usemin']);
gulp.task('default', ['build']);
