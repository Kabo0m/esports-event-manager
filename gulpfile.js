var gulp = require('gulp'),
    //concat = require('gulp-concat'),
    utils = require('./app/server/utils.js'), 
    config = require('./app/server/config/main.js'),
    server = require('./app/server/main.js');

// tasks
gulp.task('css', utils.task(function () {
    return [
        gulp.src(config.assets.client.css)
            .pipe(gulp.dest(config.dist.root))
    ]; 
}));

gulp.task('js', utils.task(function () {
    return [
        gulp.src(config.assets.client.js)
            .pipe(gulp.dest(config.dist.root)),

        gulp.src(config.assets.client.lib.js)
            .pipe(gulp.dest(config.dist.js))
    ]; 
}));

gulp.task('html', utils.task(function () {
    return [
        gulp.src(config.assets.client.html)
            .pipe(gulp.dest(config.dist.root))
    ]; 
}));

gulp.task('build', gulp.parallel(config.build));
gulp.task('serve', function (done) {
    server.start(config, function (data) {
        done();

        console.log('server is working on port ' + data.port);
    });
});

gulp.task('default', gulp.series(['build', 'serve']));

/*function css() {
    gulp.src(config.assets.client.sass)

    gulp.src(config.assets.client.min.css)
        .pipe(concat('min.css'))
        .pipe(gulp.dest(config.dist + '/css'))
        .pipe(browserSync.reload({
            stream: true
        }));

    if (config.devMode) {
        gulp.src(config.assets.client.css)
            .pipe(gulp.dest(config.dist + '/css'))
            .pipe(browserSync.reload({
                stream: true
            }));    
    }
}

function js() {
    gulp.src(config.assets.client.min.js)
        .pipe(concat('min.js'))
        .pipe(gulp.dest(config.dist + '/js'))
        .pipe(browserSync.reload({
            stream: true
        }));

    if (config.devMode) {
        gulp.src(config.assets.client.js)
            .pipe(gulp.dest(config.dist + '/js'))
            .pipe(browserSync.reload({
                stream: true
            }));
    }
}

function html() {
    gulp.src(config.assets.client.html)
        .pipe(gulp.dest(config.dist))
        .pipe(browserSync.reload({
            stream: true
        }))
}

gulp.task(css);
gulp.task(js);
gulp.task(html);

gulp.task('build', ['css', 'js', 'html']);
*/
