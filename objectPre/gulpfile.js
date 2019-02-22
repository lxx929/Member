var gulp = require('gulp');
var webserver = require('gulp-webserver'); //启动服务

gulp.task('server', function() {
    return gulp.src('./src')
        .pipe(webserver({
            port: 7878,
            livereload: true,
            open: true,
            proxies: [{
                source: '/api/list',
                target: 'http://192.168.0.64:3000/api/list'
            }, {
                source: '/api/add',
                target: 'http://192.168.0.64:3000/api/add'
            }, {
                source: '/api/del',
                target: 'http://192.168.0.64:3000/api/del'
            }, {
                source: '/api/updata',
                target: 'http://192.168.0.64:3000/api/updata'
            }]
        }));
});

gulp.task('default', gulp.series('server'));