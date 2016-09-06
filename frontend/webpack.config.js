module.exports = {
	entry: './js/app/index.js',
	output: {
		path: __dirname + '/js',
		filename: 'index.js',
		publicPath: '/js/'
	},
	devServer: {
		inline: true,
		port: 8001
	},
	module: {
		loaders: [
		    {
		      test: /\.js$/,
		      exclude: /(node_modules|bower_components)/,
		      loader: 'babel',
		      query: {
		        presets: ['es2015', 'react']
		      }
		    }
		]
	}
}
