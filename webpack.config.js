const path = require('path');
const name = 'ng-carousel';

module.exports = {
    name: name,
    entry: [`./src/${ name }.module.js`],
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: `${ name }`,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        modules: [
            path.resolve(),
            path.resolve('./src'),
            'node_modules'
        ],
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /(node_modules|bower_components|coverage)/,
                loader: 'eslint-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|coverage)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env'],
                        plugins: ['angularjs-annotate']
                    }
                }]
            }
        ]
    },
    plugins: []
};
