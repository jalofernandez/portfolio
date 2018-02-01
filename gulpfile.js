/*
 * Dependencies
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    less = require('gulp-less'),
    gulpIgnore  = require('gulp-ignore'),
    path = require('path'),
    pug = require('gulp-pug'),
    data = require('gulp-data'),
    fs = require('fs'),
    sitemap = require('gulp-sitemap');

/* todo: add the following dependencies:
var minifycss = require('gulp-minify-css'),
    fs = require('fs');
*/


/*
 * Config 'default' (gulp) last step to publish
 */
gulp.task('default', ['sitemap', 'css']);

/*
 * Config 'deploy' (gulp) first step: compile
 */
gulp.task('deploy', ['js', 'pug', 'less', 'img']);

/*
 * Config 'js' --> gulp-concat + gulp-uglify (gulp js)
 */
gulp.task('js', function () {
    gulp.src('js/sources/*.js')
        .pipe(concat('otherscripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/dist/'))
});

/*
 * Config 'less' --> gulp-less (gulp less)
 */
gulp.task('less', function () {
    return gulp.src('./less/**/[^_]*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./css/sources'));
});

/*
 * Config 'css' --> gulp-clean-css (gulp css)
 */
gulp.task('css', function() {
    return gulp.src('css/sources/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('css/dist'));
});

/*
 * Config 'img' --> gulp-imagemin (gulp img)
 */
gulp.task('img', function () {
    return gulp.src(['img/sources/**/*.*'])
        .pipe(imagemin())
        .pipe(gulp.dest('img/dist'));
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
        .pipe(gulp.dest('./'));
});

/*
 * Config 'sitemap' --> gulp-sitemap (gulp sitemap)
 */
gulp.task('sitemap', function () {
    gulp.src('*.html', {
        read: false
    })
        .pipe(sitemap({
            siteUrl: 'http://www.jalofernandez.com',
            changefreq: 'weekly',
            priority: '1.0'
        }))
        .pipe(gulp.dest('./'));
});