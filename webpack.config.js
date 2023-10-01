const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './index.js',
    plugins: [
        new MonacoWebpackPlugin({
            languages: ['typescript', 'javascript', 'css']
        })
    ]
};
