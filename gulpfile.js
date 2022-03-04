//plugins
var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    gulpIgnore = require('gulp-ignore'),
    htmlmin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch');
    autoprefixer = require('gulp-autoprefixer');

    const sassSrc = 'assets/sass/**/*.scss';
    const soruceMapPath = '';
    const sassDest = 'assets/style/';
//scss
gulp.task('sass', function () {
    return gulp
        .src(sassSrc)
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write(soruceMapPath))
        .pipe(gulp.dest(sassDest))
});
//minify
gulp.task('minify-css', function () {
    return gulp
        .src('assets/style/style.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulpIgnore.exclude(false))
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(minifyCSS({ keepBreaks: false }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('assets/style/'))
});
//js
gulp.task('compress-js', function () {
    return gulp.src(['assets/script/*.js', '!assets/script/*.min.js'])
        .pipe(gulpIgnore.exclude(false))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/script/'))
});
//operations
gulp.task('watcher', function () {
    //sass
    gulp.watch('assets/sass/**/*.scss', gulp.series(['sass']));
    gulp.watch('assets/style/style.css', gulp.series(['minify-css']));
    gulp.watch('assets/script/main.js', gulp.series('compress-js'));
});