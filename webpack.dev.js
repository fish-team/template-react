const webpack = require('webpack');
const path = require('path');
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        publicPath: '/',
        hot: true,
        open: true,
        port: 3333,
        inline: true,
        quiet: false,
        proxy: {
            '/uncontrol/*': {
                target: 'http://zj.pc.gs.youyuwo.com',
                secure: false
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

    ]
}