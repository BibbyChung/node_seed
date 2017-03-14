"use strict";

let gulp = require("gulp");
let shell = require("gulp-shell");
let merge = require("merge-stream");
let rimraf = require("rimraf");
let runSequence = require("run-sequence");
let through = require('through2');

let ts = require("gulp-typescript");
let sourcemaps = require("gulp-sourcemaps");
let path = require('path');

//=================================== Method ===================================

let tsCompiler = function (
    pathArr,
    tsconfigPath,
    sourceRoot,
    targetPath,
    isUglify) {

    return gulp.src(pathArr)
        .pipe(sourcemaps.init())
        .pipe(ts(ts.createProject(tsconfigPath)))
        .js
        //.pipe(uglify())
        .pipe(sourcemaps.write("./", {
            includeContent: false,
            sourceRoot: sourceRoot,
        }))
        .pipe(gulp.dest(targetPath));
};

let getCopyFilesPipe = (sourcePatten, targetPath) => {

    return gulp.src(sourcePatten)
        .pipe(gulp.dest(targetPath));

};

//=================================== Tasks ===================================

gulp.task("clean", (cb) => {

    rimraf("./test", () => {
        rimraf("./dist", cb);
    });

});

gulp.task("copy_feature_to_test", () => {

    let m = merge();

    let test = gulp.src([
        "./src/**/*.feature",
    ]).pipe(gulp.dest("./test/"));
    m.add(test);

    return m;

});

gulp.task('ts_compile_test', () => {

    let m = merge();

    let code = tsCompiler(
        [
            "./src/code/**/*.ts",
        ],
        "tsconfig_test.json",
        "../../src/code",
        "./test/code",
        false
    );
    m.add(code);

    let test = tsCompiler(
        [
            "./src/code.test/**/*.ts",
        ],
        "tsconfig_test.json",
        "../../src/code",
        "./test/code.test",
        false
    );
    m.add(test);

    return m;

});

// gulp.task('ts_compile_dist', () => {

//     let m = merge();

//     let code = tsCompiler(
//         [
//             "./src/code/**/*.ts",
//         ],
//         "tsconfig.json",
//         "../../src/code",
//         "./dist/code",
//         false
//     );
//     m.add(code);

//     return m;

// });

gulp.task("ts_compile_dist", shell.task([
    'node fuse.server.js'
    //'cucumber.js --format pretty'
]));

gulp.task("run_cucumber", shell.task([
    'cucumber.js test/**/*.feature --format progress'
    //'cucumber.js --format pretty'
]));

gulp.task("create_ts_definitions", shell.task([
    'tsc --declaration ./src/main.ts'
    //'cucumber.js --format pretty'
]));

//----------------------------------------------------------------------

gulp.task('build', (cb) => {
    runSequence(
        "clean",
        [
            //"ts_compile_test",
            "ts_compile_dist",
            //"copy_feature_to_test",
        ],
        // [
        //     "run_cucumber",
        // ],
        cb
    );
});