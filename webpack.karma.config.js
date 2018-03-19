const merge = require('webpack-merge');
const devConfig = require('./webpack.dev.config.js');
module.exports = merge(devConfig, {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /(node_modules|bower_components|coverage)/
                ],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env'],
                        plugins: [
                            [
                                'istanbul',
                                {
                                    'exclude': [
                                        '**/*.spec.js'
                                    ]
                                }
                            ],
                            'angularjs-annotate'
                        ]
                    }
                }]
            }
        ]
    }
});
