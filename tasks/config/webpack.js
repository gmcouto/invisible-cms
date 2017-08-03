module.exports = function(grunt) {

    var config = {
        dev: {
            // This is the "main" file which should include all other modules
            entry: './vue/main.js',
            // Where should the compiled file go?
            output: {
                // To the `dist` folder
                path: __dirname+'/../../assets/js/vue',
                // With the filename `build.js` so it's dist/build.js
                filename: 'build.js'
            },
            module: {
                // Special compilation rules
                loaders: [
                    {
                        // Ask webpack to check: If this file ends with .js, then apply some transforms
                        test: /\.vue$/,
                        // Transform it with babel
                        loader: 'vue-loader',
                        // don't transform node_modules folder (which don't need to be compiled)
                        exclude: /node_modules/
                    }
                ]
            }
        }
    };

    if (process.env.NODE_ENV == 'production') {
        var webpack = require("webpack");
        config.dev.plugins = [
                new webpack.DefinePlugin({
                    "process.env": {
                        "NODE_ENV": JSON.stringify("production")
                    }
                }),
                new webpack.optimize.DedupePlugin(),
                new webpack.optimize.UglifyJsPlugin()
            ];
    }


    grunt.config.set('webpack',config);

    grunt.loadNpmTasks("grunt-webpack");
};