var gulp = require("gulp");

var changedInPlace = require("gulp-changed-in-place");
var pug = require("gulp-pug");

gulp.task("default", ["copy-img", "copy-routes", "copy-views", "pug"]);

gulp.task("copy-img", function() {
  gulp.src("img/**/*")
//    .pipe(changedInPlace())
    .pipe(gulp.dest("app/img"));
});

gulp.task("copy-routes", function() {
  gulp.src("routes/**/*")
//    .pipe(changedInPlace())
    .pipe(gulp.dest("app/routes"));
});

gulp.task("copy-views", function() {
  gulp.src("views/**/!(about|caldendar|contact|standings|tournaments).pug")
//    .pipe(changedInPlace())
    .pipe(gulp.dest("app/views"));
});

gulp.task("pug", function() {
  gulp.src("views/+(about|calendar|contact|news|standings|tournaments).pug")
//    .pipe(changedInPlace())
    .pipe(pug())
    .pipe(gulp.dest("./html"));
});
