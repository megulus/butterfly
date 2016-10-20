var gulp = require('gulp'),
    watch = require('gulp-watch'),
    mainBowerFiles = require('gulp-bower'),
    minifyhtml = require('gulp-htmlmin'),
    cleancss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    envify = require('envify/custom'),
    gulpif = require('gulp-if'),
    env = require('gulp-env'),
    argv = require('yargs').argv,
    debug = require('gulp-debug');


//process.env.NODE_ENV = 'foo';


var paths = {
    css: ['project/css/*.css', 'project/css/components/*.css'],
    js: ['project/js/*.js', 'project/js/components/*.js', 'project/js/flux/*.js'],
    html: ['project/*.html']
};

gulp.task('bower', function() {
    return mainBowerFiles('project/bower_components')
        .pipe(gulp.dest('build/bower_components'))
});


gulp.task('images', function() {
    return gulp.src(['./project/images/*.png'])
        .pipe(gulpif(argv.gulpdebug, debug({title: 'images-debug'})))
        .pipe(gulp.dest('build/images'))
});

gulp.task('watch', function() {
    gulp.watch(paths.css, ['css']);
    gulp.watch(paths.js, ['scripts']);
    gulp.watch(paths.html, ['html']);
});

gulp.task('scripts', function() {
    var bundler = browserify({
        entries: 'project/js/app.js'
    });
    bundler
        .transform(babelify, {presets: ["es2015", "react"]});
    return bundler.bundle()
        .on('error', function(err) {
            console.error(err)
        })
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulpif(argv.production, env({vars: {NODE_ENV: 'production'}})))
        .pipe(gulpif(argv.production, uglify()))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('css', function() {
    return gulp.src(['./project/css/*.css', './project/css/components/*.css'])
        .pipe(gulpif(argv.gulpdebug, debug({title: 'css-debug'})))
        .pipe(gulpif(argv.production, cleancss({compatibility: 'ie8'})))
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('build'));
});

gulp.task('html', function() {
    return gulp.src('project/*.html')
        .pipe(gulpif(argv.gulpdebug, debug({title: 'html-debug'})))
        .pipe(gulpif(argv.production, minifyhtml({collapseWhitespace: true})))
        .pipe(gulp.dest('build'));
});


gulp.task('build', ['bower', 'images', 'scripts', 'css', 'html']);
gulp.task('default', ['build']);
