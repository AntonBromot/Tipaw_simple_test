const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: [
        './index.js',
        './styles/main.scss'
    ],

    context: resolve(__dirname, 'src'),

    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'build'),
        publicPath: '/',
    },

    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            template: `${__dirname}/src/index.html`,
            filename: 'index.html',
            inject: 'body',
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false
        }),
        new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
        new ExtractTextPlugin({ filename: './style.css', disable: false, allChunks: true }),
        new CopyWebpackPlugin([{ from: './images', to: 'img' }]),
    ],

    module: {
        loaders: [
        {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                'css-loader',
                { loader: 'sass-loader', query: { sourceMap: false } },
            ],
                publicPath: '../'
            }),
        },
        {
            test: /.(svg|woff|woff2|eot|ttf|otf)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 15000,
                        name: 'fonts/[name].[ext]'
                    }
                }
            ]
        },
        { test: /\.(jpe?g|png|gif|svg)$/i, loaders: 'file-loader' },
    ]
  },
};

module.exports = config;