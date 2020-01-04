const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // Entry point
    entry: './src/js/main.js',

    // Output path
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    // Mode
    mode: 'development',
    
    // Modules
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'public'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'public'
                        }
                    }
                ]
            }
        ]
    },
    
    // Plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: 'src/html/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "main.css"
        })
    ]
};