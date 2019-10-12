module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    devtool: false,
    optimization: {
      splitChunks: false
    }
  },
  filenameHashing: false,
  pages: {
    myAppName: {
      entry: 'src/index.js',
      filename: 'index.html'
    }
  },
  devServer: {
    compress: true,
    port: 9001,
    host: '127.0.0.1',
  }
}