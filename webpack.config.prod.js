var webpack = require('webpack');

var config = {
  
    entry: './main.js', // entry point
    output: {
        filename: 'index.js', // place where bundled app will be served
    },
    devServer: {
        inline: true, // autorefresh
        port: 8080 // development port server
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        new webpack
            .optimize
            .UglifyJsPlugin(),
        new webpack
            .optimize
            .AggressiveMergingPlugin()

    ],
    module: {
        rules: [
            {
                test: /\.js?$/, // search for js files
                exclude: /node_modules(?!\/webpack-dev-server)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2017', 'react'] // use es2017 and react
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]

            }
        ]
    }
};

module.exports = config;