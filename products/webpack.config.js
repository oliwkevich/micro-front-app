const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
	mode: 'development',
	devServer: {
		port: 8081,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new ModuleFederation({
			name: 'products',
			filename: 'remoteEntry.js',
			exposes: {
				'./ProductsIndex': './src/index'
			}
		})
	],
};
