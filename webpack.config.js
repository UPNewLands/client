const fs = require('fs')
const path = require('path')

const BannerPlugin = require('./webpack_plugins/BannerPlugin')
const DefinePlugin = require('webpack').DefinePlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const WebpackObfuscator = require('webpack-obfuscator')

const timestamp = + Date.now()


let config = {
    mode: 'development',
    entry: {
        yukon: './src/Game.js'
    },
    output: {
        filename: 'yukon.js',
        path: path.resolve(__dirname, 'assets/scripts/client')
    },
    optimization : {
        minimize: false
    },
    devServer: {
        static: {
            directory: path.join(__dirname),
            publicPath: '/'
        },
        devMiddleware: {
            writeToDisk: true
        },
        proxy: {
            '/world/login': {
                target: 'http://localhost:6111',
                pathRewrite: { '^/world/login': '' },
                ws: true
            },

            '/world/blizzard': {
                target: 'http://localhost:6112',
                pathRewrite: { '^/world/blizzard': '' },
                ws: true
            },

            '/create/scripts/php': 'http://localhost:80'
        },
        host: 'localhost',
        port: 8080,
        hot: false
    },
    resolve: {
        alias: {
            '@engine': path.resolve(__dirname, 'src/engine'),
            '@scenes': path.resolve(__dirname, 'src/scenes'),
            '@components': path.resolve(__dirname, 'src/scenes/components'),
            '@rooms': path.resolve(__dirname, 'src/scenes/rooms'),
            '@games': path.resolve(__dirname, 'src/scenes/games'),
            '@igloos': path.resolve(__dirname, 'src/scenes/igloos'),
            '@parties': path.resolve(__dirname, 'src/scenes/parties')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new DefinePlugin({
            VERSION: JSON.stringify(require('./package.json').version),
            TIMESTAMP: timestamp
        })
    ]
}

module.exports = (env, argv) => {
    if (argv.mode === 'production') {
        config.output.filename = 'upnewlands.min.js'
        config.optimization.minimize = true

        config.plugins.push(
                new WebpackObfuscator({
                    rotateStringArray: true,
                    reservedStrings: ['\s*']
                }, [])
            )
    }

    return config
}

