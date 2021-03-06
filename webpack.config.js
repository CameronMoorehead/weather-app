var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body',
})
var WebpackDefinePlugin = new webpack.DefinePlugin({
    'process.env':{
        'NODE_ENV': JSON.stringify('production')
    }
})

module.exports = {
    entry: [
        'whatwg-fetch',
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.(eot|woff|ttf|svg)$/, loader: "file-loader"}

        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        WebpackDefinePlugin
    ]
}
