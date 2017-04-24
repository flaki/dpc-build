const gulp = require('gulp')
const concat = require('gulp-concat')

gulp.task('default', function() {
  gulp.src([ 'js/*api.js', 'js/app.js'])
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('prod/js'))
});
