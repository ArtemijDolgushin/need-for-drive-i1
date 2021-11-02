process.env.VUE_APP_API_TOKEN = '5e25c641099b810b946c5d5b';
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/need-for-drive-i1/'
        : '/',
    devServer: {
        proxy: "https://api-factory.simbirsoft1.com/api/db",
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "/src/scss/common";`
            },
        },
    },
}
