const gulp = require('gulp')
const concat = require('gulp-concat')

const polyfills = [
  'node_modules/promise-polyfill/promise.min.js',
  'node_modules/whatwg-fetch/fetch.js',
  'node_modules/jquery/dist/jquery.min.js'
]

gulp.task('js-polyfills', function() {
  gulp.src(polyfills)
    .pipe(concat('libs.min.js'))
    .pipe(gulp.dest('prod/js'))
});

gulp.task('js-app', function() {
  gulp.src([ 'js/*api.js', 'js/app.js'])
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('prod/js'))
});

gulp.task('default', [ 'js-polyfills', 'js-app' ]);
