const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const gulpAutoprefixer = require("gulp-autoprefixer");

function autoprefixer() {
  var cssPath = [global.themePath + "dist/assets/main.scss"];
  var dest = global.themePath + "dist/assets/";

  gulp
    .src(cssPath)
    .pipe(sourcemaps.init())
    .pipe(
      gulpAutoprefixer({
        browsers: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(gulp.dest(dest));
}

exports.autoprefixer = autoprefixer;
