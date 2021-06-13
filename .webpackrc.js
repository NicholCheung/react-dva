const path = require('path');

export default {
    "extraBabelPlugins": [
        ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
    ],
    alias: {
        '@': path.resolve(__dirname),
        '@src': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@models': path.resolve(__dirname, 'src/models')
    }
}
