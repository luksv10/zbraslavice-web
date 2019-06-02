/* global module */
module.exports = {
    modules: true,
    plugins: {
        stylelint: {},
        'postcss-import': {},
        'postcss-nested': {},
        'postcss-preset-env': {
            stage: 1,
        },
        'postcss-pxtorem': {},
        'postcss-custom-media':{},
        'postcss-bootstrap-4-grid': {},
        'css-mqpacker': {
            sort: true,
        },
        'postcss-reporter': {
            clearReportedMessages: true,
        },
        cssnano: process.env.NODE_ENV !== 'development',
    },
};
