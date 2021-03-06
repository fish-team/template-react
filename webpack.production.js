const webpack = require('webpack');

module.exports = {
    entry: {},
    devtool: '#source-map',
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimaze: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: '[name].js'
        })

    ]
}