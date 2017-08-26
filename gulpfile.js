var gulp = require("gulp");

gulp.task("default", ["copy-public", "copy-routes", "copy-views"]);

gulp.task("copy-public", ["copy-img", "copy-js", "copy-styles"]);

gulp.task("copy-img", function() {
  gulp.src("public/images/**/*")
    .pipe(gulp.dest("app/public/images"));
});

gulp.task("copy-js", function() {
  gulp.src("public/javascripts/**/*")
    .pipe(gulp.dest("app/public/javascripts"));
});

gulp.task("copy-styles", function() {
  gulp.src("public/stylesheets/**/*")
    .pipe(gulp.dest("app/public/stylesheets"));
})

gulp.task("copy-routes", function() {
  gulp.src("routes/**/*")
    .pipe(gulp.dest("app/routes"));
});

gulp.task("copy-views", function() {
  gulp.src("views/**/*")
    .pipe(gulp.dest("app/views"));
});
