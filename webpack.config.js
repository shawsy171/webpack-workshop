const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const modeConfig = (env) => require(`./build-utils/webpack.${env.mode}`)(env);
const presetConfig = require('./build-utils/load-presets');

module.exports = ({ mode, presets }  = { mode: 'development', presets: []}) => {
    // mode comes for a destructed env object
    return merge({
            mode,
            output: {
                filename: 'bundle.js'
            },
            module: {
                rules: [
                    {
                        test: /jpe?g$/,
                        // use: ['url-loader'] // this is short hand for the below syntax
                        use: [{ loader: 'url-loader', options: { limit: 5000 }}]
                    }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin(),
                new webpack.ProgressPlugin()
            ]
        },
        modeConfig({ mode, presets }),
        presetConfig({ mode, presets })
    )
};