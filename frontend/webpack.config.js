var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + "/src/index.js",
	output: {
		path: '/',
		publicPath: '/'
	},
	module: {
		loaders: [
			{ test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' }, {
				test: /\.scss$/,
				use: [{	loader: "style-loader" }, {	loader: "css-loader" }, { loader: "sass-loader" }]
			},
			{ test: /\.(jpe?g|png|gif|svg)$/i, loaders: 'file-loader' },
			{ test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader' },
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			chunksSortMode: 'dependency',
			template: __dirname + "/src/index.html"
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: path.join(__dirname, "src"),
		inline: true,
		hot: true,
		compress: true,
		port: 9000,
		historyApiFallback: true,
		publicPath: '/',
	}
}
