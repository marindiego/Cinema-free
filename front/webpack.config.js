module.exports = {
    mode: 'development',
    entry: {
        index: './scripts/index.js',
        films: './scripts/createFilm.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    }
}