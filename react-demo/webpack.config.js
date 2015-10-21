module.exports = {
  devtool: 'inline-source-map',

  entry: './src/index.jsx',

  output: {
    filename : 'react-demo.js',
    path     : './dist'
  },

  resolve: {
    extensions: [ '', '.js', '.jsx', '.json' ]
  },

  module: {
    loaders: [{
      test     : /\.jsx*$/,
      exclude  : /node_modules/,
      loader   : 'babel'
    }]
  }
}
