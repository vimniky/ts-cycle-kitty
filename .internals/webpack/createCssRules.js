const { join } = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = function createCssRules({ mode }) {
  const isDev = mode === 'development'
  const isProd = !isDev

  const devLoaders = [
    { loader: 'style-loader' },
    {
      loader: 'css-loader',
      query: {
        sourceMap: true,
        modules: true,
        localIdentName: '[path][name]-[local]',
        minimize: false,
        import: false,
      },
    },
  ]

  const prodLoaders = ExtractTextPlugin.extract({
    fallbackLoader: 'style-loader',
    loader: [
      {
        loader: 'css-loader',
        query: {
          modules: true,
          sourceMap: true,
          localIdentName: '[local]-[hash:base62:8]',
        },
      },
      { loader: 'postcss-loader' },
      { loader: 'sass-loader' },
    ],
  })

  return {
    test: /\.scss$|\.css$/,
    include: [join(process.cwd(), 'src')],
    loaders: isDev ? devLoaders : prodLoaders,
  }
}
