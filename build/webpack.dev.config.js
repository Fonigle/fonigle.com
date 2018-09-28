const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
    mode: 'development',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    devtool: "#cheap-module-source-map",
    watchOptions: {
        ignored: /node_modules/,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
});