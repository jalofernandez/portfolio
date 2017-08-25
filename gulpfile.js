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
    jade = require('gulp-jade'),
    sitemap = require('gulp-sitemap');

/*
 * Config 'default' (gulp) last step to publish
 */
gulp.task('default', ['sitemap', 'css']);

/*
 * Config 'deploy' (gulp) first step: compile
 */
gulp.task('deploy', ['js', 'jade', 'less', 'img']);

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
    return gulp.src('css/sources/main.css')
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
 * Config 'jade' --> gulp-jade (gulp jade)
 */
gulp.task('jade', function () {
    var YOUR_LOCALS = {};
    gulp.src('./templates/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
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