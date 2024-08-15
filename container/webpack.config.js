const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin')


module.exports = {
	mode: 'development',
	devServer: {
		port: 8080,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new ModuleFederation({
			name: 'container',
			remotes: {
				products: 'products@http://localhost:8081/remoteEntry.js'
			}
		})
	],
};
