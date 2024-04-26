module.exports = {
    mode: 'development',
    entry: {
        index: './scripts/index.js',
        films: './scripts/createFilm.js',
        delete: './scripts/deleteFilm.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    }
}