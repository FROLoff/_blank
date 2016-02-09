var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client',
      path.resolve(__dirname, '../client/index.jsx')
    ]
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'scripts/app.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.resolve(__dirname, '../client/'),
      loader: 'babel'
    }, {
      test: /\.p?css$/,
      loader: 'style!css!postcss'
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  postcss: function () {
    return [
      require('postcss-import')({addDependencyTo: webpack}),
      require('postcss-url')(),
      require('postcss-cssnext')()
    ];
  }
};
