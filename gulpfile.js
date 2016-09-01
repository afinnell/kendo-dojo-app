'use strict';

var depLinker = require('dep-linker');
var path = require('path');
var browserify = require('browserify');
var eslint = require('gulp-eslint');
var ghPages = require('gulp-gh-pages');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var testServer = require('./test/server/index.js');

var buildSources = ['lib/**/*.js'];
var lintSources = buildSources.concat([
    'gulpfile.js',
    'recipes/**/*.js',
    'test/**/*.js']);

gulp.task('link-dependencies', function () {
    return depLinker.linkDependenciesTo('./src/js/deps');
});

gulp.task('build', function () {



    // .require(require.resolve('./src/js/main.js'), {
    //     entry: true,
    //     debug: true
    // })

    // return browserify({
    //     entries: ['./src/js/main.js']
    // })
    //     .bundle()
    //     .on('error', function (err) {
    //         console.error(err);
    //     })
    //     .pipe(source('bundle.js'))
    //     .pipe(gulp.dest('./src/build/'));


    // var bundler = browserify({
    //     entries: ['./src/js/main.js'],
    //     // standalone: 'toolbox',
    //     debug: true
    // });

    //bundler.plugin('browserify-header');

    // bundler.plugin('minifyify', {
    //     map: './build/bundle.map.json',
    //     output: './build/bundle.map.json'
    // });

    // return bundler
    //     .bundle()
    //     .on('error', function (err) { console.error(err); })
    //     .pipe(source('bundle.js'))
    //     .pipe(gulp.dest('./src/build/'));
});

gulp.task('lint', function () {
    return gulp.src(lintSources)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('watch', ['build'], function () {
    gulp.watch(buildSources, ['build']);
});

gulp.task('default', ['build']);