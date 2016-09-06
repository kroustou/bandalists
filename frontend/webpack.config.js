var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'index.js',
        publicPath: '/public/'
    },
    devServer: {
        inline: true,
        port: 8001
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"
            },
            {
                test: /\.css$/, loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ]
}
