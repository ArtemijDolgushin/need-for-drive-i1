process.env.VUE_APP_API_TOKEN = '5e25c641099b810b946c5d5b';
process.env.VUE_APP_API_URL = 'https://api-factory.simbirsoft1.com/api/db';
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/need-for-drive-i1/'
        : '/',
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "/src/scss/common";`
            },
        },
    },
}
