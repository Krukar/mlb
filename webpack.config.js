module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname,
    filename: 'app.js'
  },
  resolve:{
    modules: ['node_modules', './src']
  },
  module: {
    rules:[
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use:[
          { loader: 'babel-loader' },
        ]
      },
      {
        test: /\.(scss|css)$/,
        use:[
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
}
