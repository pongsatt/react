module.exports = {
  type: 'react-app',
  cssPreprocessors: {
    sass: {
      test: /\.scss$/,
      loader: require.resolve('sass-loader'),
      defaultConfig: 'sassLoader'
    }
  }
}
