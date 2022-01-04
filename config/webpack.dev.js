const common = require('./webpack.common.js');
const WebpackMerge = require('webpack-merge');

module.exports = WebpackMerge.merge(common, {
    mode: "development"
})