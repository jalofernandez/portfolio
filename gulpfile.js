/*
 * Dependencies
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    less = require('gulp-less'),
    gulpIgnore  = require('gulp-ignore'),
    path = require('path'),
    pug = require('gulp-pug'),
    data = require('gulp-data'),
    fs = require('fs'),
    sitemap = require('gulp-sitemap'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    autoprefixer = require('gulp-autoprefixer'),
    LessAutoprefix = require('less-plugin-autoprefix'),
    imageminPngquant = require('imagemin-pngquant'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    del = require('del');

// we need to init "autoprefix" less plugin
var lessAutoprefix = new LessAutoprefix({
    browsers: ['last 2 versions']
});

/* todo: add the following dependencies:
var minifycss = require('gulp-minify-css'),
    fs = require('fs');
*/

/*
 * Config 'default' (gulp) last step to publish
 */
gulp.task('default', ['clean', 'img', 'pug', 'less', 'js', 'css', 'sitemap'], function(){
  console.log('Gulpjs task by default is running...');
});
// Gulpjs Task to compile all code in modal dialogs development
gulp.task('modal', ['less', 'pug', 'modaljs'], function(){
  console.log('Gulpjs Task to compile all code in modal dialogs development is running...');
});

/*
 * Config 'js' --> gulp-concat + gulp-uglify (gulp js)
 */
 /* TODO: old task to remove it!
gulp.task('js', function () {
    gulp.src('js/sources/*.js')
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'))
});
*/
gulp.task('js', function () {
    console.log('JS task is running...');
    gulp.src('./js/main.js')
        //.pipe(sourcemaps.init()) // sourcemaps here not usefull (more heavy files)
        .pipe(babel({
          presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        //.pipe(sourcemaps.write()) // sourcemaps here not usefull (more heavy files)
        .pipe(gulp.dest('./public/js'))
});
// Gulpjs Task to compile (JS) modal dialogs dependencies
gulp.task('modaljs', function () {
    console.log('JS modal dialogs task is running...');
    gulp.src(['./js/modals/classie.js', './js/modals/modalEffects.js'])
        //.pipe(sourcemaps.init()) // sourcemaps here not usefull (more heavy files)
        .pipe(babel({
          presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(concat('modals.min.js'))
        //.pipe(sourcemaps.write()) // sourcemaps here not usefull (more heavy files)
        .pipe(gulp.dest('./public/js'))
});

/*
 * Config 'less' --> gulp-less (gulp less)
 */
gulp.task('less', function () {
    return gulp.src('./less/**/[^_]*.less')
        /*
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        */
        .pipe(less())
        .pipe(gulp.dest('./css'));
});

/*
 * Config 'css' --> gulp-clean-css (gulp css)
 */
gulp.task('css', function() {
    return gulp.src('css/*.css')
        //.pipe(sourcemaps.init()) // sourcemaps here not usefull (more heavy files)
        .pipe(autoprefixer())
        .pipe(cleanCSS({debug: true}, (details) => {
          console.log(`${details.name}: ${details.stats.originalSize}`);
          console.log(`${details.name}: ${details.stats.minifiedSize}`);
        }))
        //.pipe(sourcemaps.write()) // sourcemaps here not usefull (more heavy files)
        .pipe(gulp.dest('./public/css'));
});

/*
 * Config 'img' --> gulp-imagemin (gulp img)
 */
gulp.task('img', function () {
    console.log('Images task is running...');
    return gulp.src('img/**/*.{jpeg,jpg,png,svg,gif}')
        //.pipe(imagemin()) // without plugins
        .pipe(imagemin(
          [
            imagemin.gifsicle(),
            imagemin.jpegtran(),
            imagemin.optipng(),
            imagemin.svgo(),
            imageminPngquant(),
            imageminJpegRecompress()
          ]
        ))
        .pipe(gulp.dest('./public/img'));
});

/*
 * Configuración de la tarea 'pug' --> gulp-pug (gulp pug)
 */
gulp.task('pug', function() {
    return gulp.src('./templates/*.pug')
        .pipe(data(function(file) {
            return JSON.parse(fs.readFileSync('./locales/lang_es.json'))
        }))
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./public'));
});

/*
 * Config 'sitemap' --> gulp-sitemap (gulp sitemap)
 */
gulp.task('sitemap', function () {
    gulp.src('public/**/*.html', {
        read: false
    })
        .pipe(sitemap({
            siteUrl: 'http://www.jalofernandez.com',
            changefreq: 'weekly',
            priority: '1.0'
        }))
        .pipe(gulp.dest('./public'));
});

/*
 * REMOVE files & folders gulp task
*/
gulp.task('clean', function(){
  return del.sync([
    './public/img/',
    './public/js/main.min.js',
    './public/css/*.css'
  ]);
});
