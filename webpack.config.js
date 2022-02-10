const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // Path to entry point. From this file Webpack will begin its work
    entry: {
        main: './src/scripts/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },

    resolve: {
        extensions: ['*', '.js']
    },

    // Path and filename of result bundle
    // Webpack will bundle all Javascript into this file
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: '[name].bundle.js'
    },

    // Plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Web Starter Project',
            template: path.resolve(__dirname, './src/index.html'),
            filename: "index.html"
        }),
    ],

    // Default mode for Webpack is production
    // Depending on mode Webpack will apply different things
    // on the final bundle.
    mode: 'development'
};
