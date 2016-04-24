module.exports = {
  type: 'react-app',
  babel: {
    stage: 0
  },
  cssPreprocessors: {
    sass: {
      test: /\.scss$/,
      loader: require.resolve('sass-loader'),
      defaultConfig: 'sassLoader'
    }
  }
}
