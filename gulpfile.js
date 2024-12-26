const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const log = require('fancy-log');

function compilaSass() {
    log('iniciando a compilacao do sass...')
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
        .on('end', () => log('Sass compilado com sucesso!'))
}

exports.sass = compilaSass;