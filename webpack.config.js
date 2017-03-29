/**
 * Created by kingdee on 2017/3/27.
 */
var path = require('path');
module.exports = {
    entry: path.resolve(__dirname,'src/entry.js'),
    output: {
        path: path.resolve(__dirname,'out'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react',
                include: /src/
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192'
            }
        ]
    }
}