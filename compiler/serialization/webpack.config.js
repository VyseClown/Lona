const { resolve, join } = require('path')
const webpack = require('webpack')

const paths = {
  dist: resolve(__dirname, 'dist'),
  src: resolve(__dirname, 'lib'),
}

module.exports = [
  {
    mode: 'production',
    entry: join(paths.src, 'index.js'),
    target: 'web',
    output: {
      path: paths.dist,
      filename: 'lona-serialization.umd.js',
      library: {
        root: 'lonaSerialization',
        amd: 'lona-serialization',
        commonjs: 'lona-serialization',
      },
      libraryTarget: 'umd',
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    ],
    node: {
      fs: 'empty',
    },
    resolve: {
      alias: {
        './pegjs/logicSwiftParser': resolve(
          __dirname,
          'lib/pegjs/logic.swift.pegjs'
        ),
      },
    },
    module: {
      rules: [
        {
          test: /\.pegjs$/,
          use: {
            loader: 'pegjs-loader',
          },
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-proposal-object-rest-spread'],
            },
          },
        },
      ],
    },
  },
]
