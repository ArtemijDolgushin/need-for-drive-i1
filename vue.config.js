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
