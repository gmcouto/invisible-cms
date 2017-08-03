module.exports = function(grunt) {
 
    grunt.config.set('webpack', {
        dev: {
            entry: "./vue/main.js", //Entry point of our vue application
            output: {
                path: __dirname+"/../../assets/js/vue",
                filename: "build.js"
            },
            stats: {
                // Configure the console output
                colors: true,
                modules: true,
                reasons: true
            },
            progress: false,
            failOnError: true,
            devtool: "#source-map",
            module: {
                loaders: [
                    { test: /\.vue$/, loader: "vue-loader" },
                ]
            }
        }
    });
 
    grunt.registerTask('webpack', [
        'webpack:dev'
    ]);
 
    grunt.loadNpmTasks('grunt-webpack');
};