var gulp = require("gulp");

var sass = require("gulp-sass");

gulp.task("default", ["copy-static", "copy-routes", "copy-views"]);

gulp.task("copy-static", ["copy-img", "copy-js", "copy-styles"]);

gulp.task("copy-img", function() {
  gulp.src("img/**/*")
    .pipe(gulp.dest("app/img"));
});

gulp.task("copy-js", function() {
  gulp.src("js/**/*")
    .pipe(gulp.dest("app/js"));
});

gulp.task("copy-styles", function() {
  gulp.src("styles/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/styles"))
});

gulp.task("copy-routes", function() {
  gulp.src("routes/**/*")
    .pipe(gulp.dest("app/routes"));
});

gulp.task("copy-views", function() {
  gulp.src("views/**/*")
    .pipe(gulp.dest("app/views"));
});
