const gulp = require("gulp");

gulp.task("watch", () => {
  gulp.watch(
    [
      global.themePath + "assets/styles/bootstrap/bootstrap.scss",
      global.themePath + "assets/styles/global/*.scss",
      global.themePath + "assets/styles/glide/*.scss",
      global.themePath + "assets/styles/constants/*.scss",
      global.themePath + "assets/styles/pages/*.scss",
      global.themePath + "assets/styles/main.scss",
      global.themePath + "components/*/*.scss",
      global.themePath + "components/*/styles.scss",
    ],
    gulp.series("buildStyles")
  );

  gulp.watch(
    [ 
      global.themePath + "assets/styles/bootstrap/bootstrap.scss",
      global.themePath + "assets/styles/global/*.scss",
      global.themePath + "assets/styles/glide/*.scss",
      global.themePath + "assets/styles/constants/*.scss",
      global.themePath + "assets/styles/pages/*.scss",
      global.themePath + "assets/styles/main.scss",
      global.themePath + "components/*/*.scss",
      global.themePath + "components/*/styles.scss",
    ],
    {events: ['add']},
    gulp.series("buildStyles")
  );

  gulp.watch(
    [
      global.themePath + "assets/scripts/plugins/*.js",
      global.themePath + "assets/scripts/vendors/*.js",
      global.themePath + "assets/scripts/custom/*.js",
      global.themePath + "assets/scripts/pages/*.js",
      global.themePath + "assets/scripts/index.js"
    ],
    gulp.series("buildScripts")
  );
  
  gulp.watch(
    [
      global.themePath + "assets/scripts/plugins/*.js",
      global.themePath + "assets/scripts/vendors/*.js", 
      global.themePath + "assets/scripts/custom/*.js",
      global.themePath + "assets/scripts/pages/*.js",
    ],
    {events: ['add']},
    gulp.series("buildScripts")
  );

  gulp.watch(
    [global.themePath + "assets/images/**/*"],
    {events: ['add']},
    gulp.series("buildImages")
  );
});
