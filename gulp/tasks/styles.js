const gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass")),
  concat = require("gulp-concat"),
  browserSync = require("browser-sync").create(),
  sourcemaps = require("gulp-sourcemaps"),
  handleErrors = require("../utils/errorsHandler"),
  scssPaths = [
    global.themePath + "assets/styles/main.scss",
  ],
  dest = global.themePath + "dist";

gulp.task("buildStyles", () => {
  return gulp
    .src(scssPaths)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("styles.css"))
    .pipe(sourcemaps.write())
    .on("error", handleErrors)
    .pipe(gulp.dest(dest));
});