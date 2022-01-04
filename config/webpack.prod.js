const merge = require('webpack-merge');
const WebpackMerge = require('./webpack.common.js');

module.exports = WebpackMerge.merge(common, {
    mode: 'production'
})