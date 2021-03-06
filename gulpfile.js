var gulp = require("gulp");
var flatten = require("gulp-flatten");
var notify = require("gulp-notify");
var webserver = require("gulp-webserver");
var concat = require("gulp-concat");

gulp.task("move", function(){

	gulp.src(["./src/index.html"])
	.pipe(gulp.dest("./dist"))
	.pipe(notify("Uspešno sem premakni HTML datoteko"));

	gulp.src(["!./src/index.html","./src/**/*.html"])
	.pipe(flatten())
	.pipe(gulp.dest("./dist/templates"))
	.pipe(notify("Uspešno sem premaknil template!"));

	gulp.src(["bower_components/bootstrap/dist/css/bootstrap.min.css",
		"bower_components/bootstrap/dist/css/bootstrap-theme.min.css"])
	.pipe(gulp.dest("dist/css"))
	.pipe(notify("Uspešno sem premaknil CSS"));

	gulp.src(["bower_components/angular/angular.min.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(notify("Uspešno sem premaknil Javascript"));


});

gulp.task("scripts", function(){
	gulp.src(["./src/app.js", "./src/**/*.js"])
	.pipe(concat("all.js"))
	.pipe(gulp.dest("./dist/js"))
	.pipe(notify("Uspešno premaknil Javascript datoteke!"));
});

gulp.task("serve",function(){
	gulp.src("./dist").
	pipe(webserver({
		port:48080,
		livereload:true
	}))
});

//Watcher
gulp.task("watch",["serve"],function(){
	gulp.start(["scripts","move"]);

	gulp.watch(["./src/**/*.js"],["scripts"]);
	gulp.watch(["./src/**/*.html"],["move"])
});