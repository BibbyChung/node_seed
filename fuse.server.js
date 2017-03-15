const fsbx = require('fuse-box');

const fuseBox = fsbx.FuseBox.init({
    homeDir: './src/code',
    sourcemaps: true,
    outFile: './dist/code/main.js',
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

fuseBox
    .bundle(">main.ts")
// .devServer('>app.ts', {
//     port: 4446,
//     httpServer: false
// });
;