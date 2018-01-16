'use strict';

// # System configured by Mario Dak #

// # Plugins here #
var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence').use(gulp),
    runSequence = require('run-sequence'),
    glob = require('glob'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    babel = require('gulp-babel'),
    autoprefixer = require('gulp-autoprefixer'),
    logger = require('gulp-logger'),
    browserSync = require('browser-sync');


// Web Server Settings
// Synchronized Browser Reload, pc + mobile

// -------------------------------------------------
//     Local: http://localhost:3000 (Main pc)
//  External: http://your-ip:3000   (Other devices)
// -------------------------------------------------

gulp.task('browser-sync', function () {
    browserSync({
        open: true,
        notify: false,
        files: "dist/**/*.html, dist/**/*.css, dist/**/*.js",
        server: {
            baseDir: "dist",
            index: "index.html"
        }
    });
});


// # Compile PUG, SASS, JS & Watch changes #
// #           Exclude _lib folder         #

const pug_files = ['!src/{lib,lib/**}', '!src/**/lib/*.pug', 'src/**/*.pug'];
const sass_files = ['!src/{lib,lib/**}', '!src/**/lib/*.sass', 'src/**/*.sass'];
const js_files = ['!src/{lib,lib/**}', '!src/**/lib/*.sass', 'src/**/*.js'];
const other_files = ['!src/assets/lib', '!src/**/*.{pug,sass}', 'src/**/*'];
const prefix_files = ['!src/{lib,lib/**}', 'dist/**/*.css'];


// # Build Website, Compile sass, pug, js #
// #         adding prefix to css         #
// #            copying files             #
// #                BUILD                 #

gulp.task("build", function () {

    // Compile PUG
    gulp.src(pug_files)
        .pipe(pug())
        .pipe(gulp.dest('dist'))
        .pipe(logger({
            before: 'Compiling PUG..',
            after: 'PUG Compiled!',
            extname: '(html)',
            showChange: true
        }));

    // Compile SASS
    gulp.src(sass_files)
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
        .pipe(logger({
            before: 'Compiling SASS..',
            after: 'SASS Compiled!',
            extname: '(css)',
            showChange: true
        }));

    // Compile JS
    gulp.src(js_files)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'))
        .pipe(logger({
            before: 'Compiling JS..',
            after: 'JS Compiled!',
            extname: '(js)',
            showChange: true
        }));

    // Copying files
    gulp.src(other_files)
        .pipe(gulp.dest('dist'))
        .pipe(logger({
            before: 'Copying files..',
            after: 'Files copied!',
            extname: '(file)',
            showChange: true
        }));

});

// # Build Website, Compile sass, pug, js #
// #         adding prefix to css         #
// #            copying files             #
// #                WATCH                 #

gulp.task("build-watch", function () {

    // Compile PUG + Watch
    gulp.src(pug_files)
        .pipe(watch(pug_files))
        .pipe(pug())
        .pipe(gulp.dest('dist'))
        .pipe(logger({
            before: 'Compiling PUG..',
            after: 'PUG Compiled!',
            extname: '(html)',
            showChange: true
        }));

    // Compile SASS + Watch
    gulp.src(sass_files)
        .pipe(watch(sass_files))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
        .pipe(logger({
            before: 'Compiling SASS..',
            after: 'SASS Compiled!',
            extname: '(css)',
            showChange: true
        }));

    // Compile JS + Watch
    gulp.src(js_files)
        .pipe(watch(js_files))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'))
        .pipe(logger({
            before: 'Compiling JS..',
            after: 'JS Compiled!',
            extname: '(js)',
            showChange: true
        }));

    // Copying files + Watch
    gulp.src(other_files)
        .pipe(watch(other_files))
        .pipe(gulp.dest('dist'))
        .pipe(logger({
            before: 'Copying files..',
            after: 'Files copied!',
            extname: '(file)',
            showChange: true
        }));
});
