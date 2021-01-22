const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = (env) => {
    console.log(env)
    
    return ({
        plugins: [
            new WebpackBundleAnalyzer()
        ]
    })
}