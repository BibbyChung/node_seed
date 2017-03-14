const fsbx = require('fuse-box');

// const fuseBox = fsbx.FuseBox.init({
//     homeDir: './src/code',
//     sourcemaps: true,
//     outFile: './dist/code/server.js',
//     plugins: [
//         [
//             fsbx.SassPlugin({outputStyle: 'compressed'}),
//             fsbx.CSSPlugin({})
//         ],
//         fsbx.TypeScriptHelpers(),
//         fsbx.JSONPlugin(),
//         fsbx.HTMLPlugin({useDefault: false})
//     ]
// });

 const fuseBox = fsbx.FuseBox.init({
    tsConfig: "./tsconfig.json",
    // sourcemaps: true,
    outFile: './dist/code/server.js',
    plugins: [
        [
            fsbx.SassPlugin({outputStyle: 'compressed'}),
            fsbx.CSSPlugin({})
        ],
        fsbx.TypeScriptHelpers(),
        fsbx.JSONPlugin(),
        fsbx.HTMLPlugin({useDefault: false})
    ]
})

fuseBox
    .bundle(">main.ts")