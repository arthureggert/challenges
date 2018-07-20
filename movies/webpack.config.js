const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

const ExtractTextPluginConfig = new ExtractTextPlugin("style.css")

module.exports = {
    entry: [
        './src/index.js',
        './src/index.scss'
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'index.js'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: ['exports-loader', 'babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: ['exports-loader', 'babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader'
                })
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.svg/,
                loader: 'svg-url-loader',
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=25000'
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        ExtractTextPluginConfig
    ]
};