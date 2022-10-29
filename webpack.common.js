const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'messenger.bundle.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.ts', '.js', '.json'],
		alias: {
			'handlebars' : 'handlebars/dist/handlebars.js'
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							configFile: path.resolve(__dirname, 'tsconfig.json'),
						},
					},
				],
				exclude: /(node_modules)/
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {},
					},
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			inject: true,
			template: path.resolve(__dirname, 'src', 'index.html'),
		}),
		new MiniCssExtractPlugin(),
	],
};
