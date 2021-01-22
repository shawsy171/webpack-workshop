// import webpackMerge from 'webpack-merge';
const { merge } = require('webpack-merge');

const applyPresets = (env) => {
    const { presets } = env;
    console.log('\x1b[36m%s\x1b[0m', {env});
    const mergePresets = [].concat(...[presets]).filter(Boolean); // flatten presets array
    const mergeConfigs = mergePresets.reduce((mergeObj, presetName) => {
        return {...mergeObj, ...require(`./presets/webpack.${presetName}`)(env)}
    }, {})

    // merge must receive objects as arguments
    return merge({}, mergeConfigs);
}

module.exports = applyPresets;
