"use strict";

let gulp = require("gulp");
let shell = require("gulp-shell");
let merge = require("merge-stream");
var merge2 = require('merge2');

let rimraf = require("rimraf");
let runSequence = require("run-sequence");
let through = require('through2');

let ts = require("gulp-typescript");
let sourcemaps = require("gulp-sourcemaps");
let path = require('path');

const fsbx = require('fuse-box');

//=================================== Method ===================================

let tsCompiler = function (
    pathArr,
    tsconfigPath,
    sourceRoot,
    targetPath,
    isUglify) {

    let tsResult = gulp.src(pathArr)
        .pipe(sourcemaps.init())
        .pipe(ts(ts.createProject(tsconfigPath, { "isolatedModules": false })));

    return merge2([
        tsResult
            .js
            //.pipe(uglify())
            .pipe(sourcemaps.write("./", {
                includeContent: false,
                sourceRoot: sourceRoot,
            }))
            .pipe(gulp.dest(targetPath)),
        tsResult
            .dts
            .pipe(gulp.dest(targetPath))
    ]);

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
        "./tsconfig.test.json",
        "../../src/code",
        "./test/code",
        false
    );
    m.add(code);

    let test = tsCompiler(
        [
            "./src/code.test/**/*.ts",
        ],
        "./tsconfig.test.json",
        "../../src/code.test",
        "./test/code.test",
        false
    );
    m.add(test);

    return m;

});

gulp.task("ts_compile_dist",()=>{

    const fuseBox = fsbx.FuseBox.init({
        homeDir: './src/code',
        sourcemaps: true,
        outFile: './dist/code/main.js',
        tsConfig: './tsconfig.node.json',
        //debug: true,
        plugins: [
            [
                fsbx.SassPlugin({outputStyle: 'compressed'}),
                fsbx.CSSPlugin({})
            ],
            fsbx.TypeScriptHelpers(),
            fsbx.JSONPlugin(),
            fsbx.HTMLPlugin({useDefault: false})
        ]
    });

    return fuseBox
        .bundle(">main.ts")
    // .devServer('>app.ts', {
    //     port: 4446,
    //     httpServer: false
    // });
    ;

});

gulp.task("run_cucumber", shell.task([
    'cucumber.js test/**/*.feature --format progress'
    //'cucumber.js --format pretty'
]));

//----------------------------------------------------------------------

gulp.task('build', (cb) => {
    runSequence(
        "clean",
        [
            "ts_compile_test",
            "copy_feature_to_test",
        ],
        [
            "run_cucumber"
        ],
        [
            "ts_compile_dist"
        ],
        cb
    );
});