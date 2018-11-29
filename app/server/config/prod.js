var dist = './public';

module.exports.build = ['css', 'js', 'html'];
module.exports.dist = {
    root: dist,
    js: dist,
    css: dist
};

module.exports.assets = {
    client: {
        js: './app/client/**/*.js',
        css: './app/client/**/*.css',
        scss: './app/client/**/*.scss',
        html: './app/client/**/*.html',
        lib: {
            js: [
                './node_modules/angular/angular.js',
                './node_modules/@uirouter/angularjs/release/angular-ui-router.js',
                './bower_components/jquery/dist/jquery.js'
            ],
            css: []
        }
    },
    server: {
        gulpfile: '../gulpfile.js',
        models: './app/server/models/**/*.js',
        controllers: [
            './app/server/controllers/api/v1/**/*.js'
        ]
    } 
};
