var gulp = require("gulp");

var pug = require("gulp-pug");
var sass = require("gulp-sass");

gulp.task("default", ["copy-static", "copy-routes", "copy-views", "pug"]);

gulp.task("copy-static", ["copy-img", "copy-styles"]);

gulp.task("copy-img", function() {
  gulp.src("img/**/*")
    .pipe(gulp.dest("app/img"));
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
  gulp.src("views/**/!(about|caldendar|contact|index2).pug")
    .pipe(gulp.dest("app/views"));
});

gulp.task("pug", function() {
  gulp.src("views/+(about|calendar|contact|index2).pug")
    .pipe(pug())
    .pipe(gulp.dest("./html"));
});
