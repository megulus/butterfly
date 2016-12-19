var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./project/js/client.js",
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components|temp|flux|old_backbone)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    combineLoaders([{
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local}___[hash:base64:5]'
                        }
                    }])
                )
            },
            {
                test: /\.png/,
                loader: 'url-loader?limit=100000',
            }
        ]
    },
    output: {
        path: __dirname + "/build",
        filename: "scripts.min.js"
    },
    plugins: debug ? [
        new ExtractTextPlugin('styles.css'),
    ] : [
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
    ],
};