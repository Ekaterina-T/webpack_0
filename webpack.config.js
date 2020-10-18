const webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {

    mode: 'development',

    entry: {
        main: './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true,
            },
          },
        },
    },

    plugins: [new MiniCssExtractPlugin()],

    module: {
        rules: [
            { 
                test: /\.css$/i, 
                use: [ 
                    { loader: MiniCssExtractPlugin.loader},
                    //{ loader: 'style-loader'/*, options: { injectType: 'linkTag' } */},
                    { loader: 'css-loader'}
                ] 
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    }
};

module.exports = config;