const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    
    if (isProd) {
        config.minimizer = [
            new TerserWebpackPlugin() 
        ] 
    }

    return config;
}

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: ['@babel/polyfill', './app/main.ts'],
    output: {
        pathinfo: true,
        filename: filename('js'),
        path: path.resolve('./dist')
    },

    resolve: {
        extensions: ['.js', '.ts'],
    },

    optimization: optimization(),
    devtool: isDev ? 'source-map' : '',

    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/assets'),
                to: path.resolve(__dirname, 'dist/assets')
            },
            {
                from: path.resolve(__dirname, 'src/css'),
                to: path.resolve(__dirname, 'dist/css')
            }
        ]),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body',
            minify: {
                collapseWhitespace: isProd,
            }
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            PIXI: 'pixi.js'
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],

    module: {
        rules: [
            { 
                 test: /\.ts?$/, 
                 exclude: /node_modules/,
                 loader: {
                     loader: 'babel-loader',
                     options: {
                         presets: [
                             '@babel/preset-env',
                             '@babel/preset-typescript',
                         ],
                         plugins: [
                             '@babel/plugin-proposal-class-properties'
                         ]
                     }
                 } 
            },
            { 
                 test: /\.js?$/, 
                 exclude: /node_modules/,
                 loader: "babel-loader" 
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },

          ]
    },

    devServer: {
        port: 9000,
    }
}