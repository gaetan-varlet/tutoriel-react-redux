const config = {
  entry: './main.js',
  mode: 'development',
  output: {
    path: __dirname + '/',
    publicPath: '/',
    filename: 'index.js'
  },
  devServer:{
    historyApiFallback: true,
    inline: true,
    port: 8082
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['es2015', 'react']}
      },
      {
        test: /\.css/,
        use: 'css-loader'
      }
    ]
  }
}

module.exports = config;
