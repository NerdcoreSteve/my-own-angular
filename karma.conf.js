module.exports = config =>
    config.set({
        frameworks: ['browserify', 'jasmine'],
        files: [
            'src/**/*.js',
            'test/**/*_spec.js'
        ],
        preprocessors: {
            'test/**/*.js': ['jshint', 'babel'],
            'src/**/*.js': ['jshint', 'babel']
        },
        browsers: ['PhantomJS'],
        jshintPreprocessor: {
          jshintrc: './.jshintrc'
        },
        browserify: {
            debug: true
        },
        babelPreprocessor: {
            options: {
                presets: ['es2015'],
                sourceMap: 'inline'
            },
            filename: function (file) {
                return file.originalPath.replace(/\.js$/, '.es5.js');
            },
            sourceFileName: function (file) {
                return file.originalPath;
            }
        }
    })
