const gulp = require("gulp"),
  changed = require("gulp-changed"),
  imagesPatdh = [global.themePath + "assets/images/**/*.*"],
  dest = global.themePath + "dist/images/";


gulp.task("buildImages", () => {
  return gulp.src(imagesPatdh).pipe(changed(dest)).pipe(gulp.dest(dest));
});
