var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');

var config = {
    entry: {
        app: ['webpack/hot/dev-server', './app/App.jsx'],  
        vendors: ['react', 'lodash', 'flux']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            images : path.resolve(__dirname, 'app/images'),
            style : path.resolve(__dirname, 'app/style/index.js'),
            constants : path.resolve(__dirname, 'app/constants/Constants.js'),
            stores : path.resolve(__dirname, 'app/stores'),
            actions : path.resolve(__dirname, 'app/actions'),
            utils : path.resolve(__dirname, 'app/utils'),
            components : path.resolve(__dirname, 'app/components'),
        }
    },
    module: {
        noParse: [],
        loaders: [{
            test: /\.jsx?$/,
            exclude: [node_modules],
            loader: 'babel-loader',
            query: {
                optional: ['es7.objectRestSpread'],
            }
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=25000'
        }, {
            test: /\.(woff|otf)$/,
            loader: 'url-loader?limit=100000'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;