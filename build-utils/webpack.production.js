module.exports = () => ({
    output: {
        filename: '[chunkhash].js' // [chunkhash] is a webpack placeholder, the actual hash will be generated at runtime
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] // add css-minify
            }
        ]
    }
})