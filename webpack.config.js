module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: ['@babel/polyfill', './src/index.js'],
  module: {
    rules: [
      {
        test: /\js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
};