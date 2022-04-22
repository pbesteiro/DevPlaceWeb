"use strict";

var gulp = require("gulp");
var changed = require("gulp-changed");

function buildFonts() {
  var scssPaths = [global.themePath + "assets/fonts/**"];
  var dest = global.themePath + "dist/assets/fonts/";
  return gulp.src(scssPaths).pipe(changed(dest)).pipe(gulp.dest(dest));
}

exports.buildFonts = buildFonts;
