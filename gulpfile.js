var gulp = require('gulp'),
    watch = require('gulp-watch'),
    mainBowerFiles = require('gulp-bower'),
    //usemin = require('gulp-usemin'),
    minifyhtml = require('gulp-htmlmin'),
    cleancss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    debug = require('gulp-debug');


var paths = {
    css: ['project/css/*.css', 'projects/css/components/*.css'],
    js: ['project/js/*.js', 'project/js/components/*.js'],
    html: ['project/*.html']
};

gulp.task('bower', function() {
    return mainBowerFiles('project/bower_components')
        .pipe(gulp.dest('build/bower_components'))
});

// not using?
/*gulp.task('usemin', function() {
 return gulp.src('./project/!*.html')
 .pipe(usemin({
 html: [minifyhtml({collapseWhitespace: true})],
 css: [cleancss({compatibility: 'ie8'})],
 js: [uglify(), 'concat']
 }))
 .pipe(debug({title: 'usemin-debug'}))
 .pipe(gulp.dest('build'))
 });*/

gulp.task('images', function() {
    return gulp.src(['./project/images/*.png'])
        .pipe(debug({title: 'images-debug'}))
        .pipe(gulp.dest('build/images'))
});

gulp.task('watch', function() {
    gulp.watch(paths.css, ['css']);
    gulp.watch(paths.js, ['scripts']);
    gulp.watch(paths.html, ['minifyhtml']);
});

gulp.task('scripts', function() {
    var bundler = browserify({
        entries: 'js/source/app.js',
        debug: true
    });
    bundler.transform(babelify, {presets: ["es2015", "react"]});
    return bundler.bundle()
        .on('error', function(err) {
            console.log(err)
        })
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('css', function() {
    return gulp.src(['/project/css/*.css', '/project/css/components/*.css'])
        .pipe(cleancss({compatibility: 'ie8'}))
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('build'));
});

gulp.task('minifyhtml', function() {
    return gulp.src('project/*.html')
        .pipe(minifyhtml({collapseWhitespace: true}))
        .pipe(gulp.dest('build'));
});


gulp.task('build', ['bower', 'images', 'scripts', 'css', 'minifyhtml']);
gulp.task('default', ['build']);
