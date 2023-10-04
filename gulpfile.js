const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const cleanCSS = require('gulp-clean-css'); // Import the cleanCSS plugin
const babel = require('gulp-babel');

// Tâche pour compiler Sass en CSS and minify it
gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS()) // Minify the CSS
    .pipe(gulp.dest('css'));
});

// Tâche pour surveiller les modifications dans les fichiers Sass
gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', gulp.series('sass'));
  gulp.watch('src/**/*.js', gulp.series('babel'));
});

// Tâche pour compiler ES6 en JavaScript
gulp.task('babel', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(gulp.dest('dist'));
});

// Tâche par défaut
gulp.task('default', gulp.parallel('sass', 'babel', 'watch'));
