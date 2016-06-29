module.exports = {
  entry: './index.js',
  output: {
    path: './static',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  },
  devServer: {
    inline: true,
    port: 4000
  }
}
