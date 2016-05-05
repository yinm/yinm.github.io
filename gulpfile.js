var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var frontnote = require("gulp-frontnote");
var uglify = require('gulp-uglify');
var browser = require("browser-sync");
var plumber = require("gulp-plumber");

// BrowserSync
gulp.task("server", function() {
  browser({
    server: {
      baseDir: "./"
    }
  });
});

// LiveReload
gulp.task("bsReload", function() {
  browser.reload();
});

// Sassのコンパイル
gulp.task("sass", function() {
  gulp.src("./assets/scss/*scss")
    .pipe(plumber())
    .pipe(frontnote({
      css: './styleguide/styleguide.css'
    }))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./assets/css"))
    .pipe(browser.reload({stream:true}))
});

// JSの圧縮
gulp.task("js", function() {
  gulp.src(["./assets/js/*.js"])
      .pipe(plumber())
      .pipe(uglify())
      .pipe(gulp.dest("./assets/js/min"))
      .pipe(browser.reload({stream:true}))
});

// watch
gulp.task("default", ['server'], function() {
  gulp.watch(["./assets/js/*.js"], ["js"]);
  gulp.watch("./assets/scss/*.scss", ["sass"]);
  gulp.watch("./index.html", ["bsReload"]);
});
