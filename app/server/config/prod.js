var dist = './public';

module.exports.build = ['css', 'js', 'html'];
module.exports.dist = {
    root: dist,
    js: dist,
    css: dist
};

module.exports.assets = {
    client: {
        lib: {
            js: [
                './node_modules/angular/angular.js',
                './node_modules/@uirouter/release/angular-ui-router.js',
                './bower_components/jquery/dist/jquery.js'
            ],
            css: []
        },
        js: [
            './app/client/**/*.js'
        ],
        css: [
            './app/client/**/*.css'
        ],
        scss: [
            './app/client/**/*.scss'
        ],
        html: [
            './app/client/**/*.html'
        ]
    },
    server: {
        gulpfile: '../gulpfile.js'
    } 
};
