'use strict'

const path = require('path')

const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')

module.exports = {
  plugins: ['typescript'],
  modify(config, {target, dev}) {
    const typingsCssLoader = {
      loader: require.resolve('dts-css-modules-loader'),
      options: {
        modules: true,
        sass: true,
        namedExport: true,
      },
    }

    const cssLoader = {
      loader: require.resolve('css-loader'),
      options: {
        modules: true,
        sourceMap: dev,
        localIdentName: dev
          ? '[name]__[local]-[hash:base64:5]'
          : '[hash:base64:6]',
        exportOnlyLocals: true,
      },
    }

    const sassLoader = {
      loader: require.resolve('sass-loader'),
      options: {
        sourceMap: dev,
      },
    }

    const postCssLoader = {
      loader: require.resolve('postcss-loader'),
      options: {
        ident: 'postcss-scss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          autoprefixer({
            browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
            flexbox: 'no-2009',
          }),
        ],
      },
    }

    const sassRule = {
      test: /\.scss$/,
      use: [
        target === 'web' && dev
          ? require.resolve('style-loader')
          : ExtractCssChunks.loader,
        typingsCssLoader,
        cssLoader,
        postCssLoader,
        sassLoader,
      ],
    }

    return {
      ...config,

      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,

          components: path.resolve(__dirname, 'src/client/components/'),
        },
      },

      plugins: [
        ...config.plugins,
        new ExtractCssChunks({
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
      ],

      module: {
        ...config.module,
        rules: [...config.module.rules, sassRule],
      },
    }
  },
}
