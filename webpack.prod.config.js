const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: `${ common.name }.style.min.css`
});

module.exports = merge(common, {
    output: {
        filename: `${ common.name }.component.min.js`
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'clean-css-loader'
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            },
            {
                test: /\.js$/,
                exclude: [
                    /(node_modules|bower_components|coverage)/
                ],
                use: [
                    'template-string-optimize-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['babel-preset-env'],
                            plugins: ['angularjs-annotate']
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin({
            exclude: /(node_modules|bower_components)/,
        }),
        extractSass
    ]
});
