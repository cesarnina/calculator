module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['@babel/polyfill', './client/index.js'],
  module: {
    rules: [
      {
        test: /\js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
};