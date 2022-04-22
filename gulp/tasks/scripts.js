const gulp = require("gulp"),
  minify = require("gulp-minify"),
  concat = require("gulp-concat"),
  changed = require("gulp-changed"),
  browserSync = require("browser-sync").create(),
  jsPaths = [
    global.themePath + "assets/scripts/plugins/*.js",
    global.themePath + "assets/scripts/vendors/*.js",
    global.themePath + "assets/scripts/custom/*.js",
    global.themePath + "assets/scripts/index.js"
  ],
  dest = global.themePath + "dist";

gulp.task("buildScripts", () => {
  return gulp.src(jsPaths).pipe(concat("scripts.js")).pipe(gulp.dest(dest));
});