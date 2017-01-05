var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./project/js/client.js",
    module: debug ? {
        loaders: [ // development loaders:
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components|temp|flux|old_backbone)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            }, {
                test: /\.css$/,
                loader: 'style-loader',
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        },
            },
            {
                test: /\.png/,
                loader: 'url-loader?limit=100000',
            }
        ]
    }
        : { // production loaders:
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
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
                query: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        },
            },
            {
                test: /\.png/,
                loader: 'url-loader?limit=100000',
            }
        ]
    },
    output: {
        path: __dirname + "/build",
        filename: "client.min.js"
    },
    plugins: debug ? [
        new HTMLWebpackPlugin({
            template: __dirname + '/project/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ] : [
        new HTMLWebpackPlugin({
            template: __dirname + '/project/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin('styles.css', {
            allChunks: false,
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
    ],
};