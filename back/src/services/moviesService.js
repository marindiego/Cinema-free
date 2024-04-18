class Movie {
    constructor({title,year,director,duration,genre,rate,poster}) {
        if (!title || !director || !poster) {
            throw new Error('Invalid movie data')
        }
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }
}

const movies = [
    {
        "title": "Avatar",
        "year": 2009,
        "director": "James Cameron",
        "duration": "2h 42min",
        "genre": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
        ],
        "rate": 7.8,
        "poster": "https://i.postimg.cc/vTgM6SgK/avatar.webp"
    },
    {
        "title": "Inception",
        "year": 2010,
        "director": "Christopher Nolan",
        "duration": "2h 28min",
        "genre": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
        ],
        "rate": 8.8,
        "poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
    },
    {
        "title": "The Avengers",
        "year": 2012,
        "director": "Joss Whedon",
        "duration": "2h 23min",
        "genre": [
            "Action",
            "Adventure",
            "Sci-Fi"
        ],
        "rate": 8,
        "poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
        "title": "The Lord of the Rings",
        "year": 2001,
        "director": "Peter Jackson",
        "duration": "2h 58min",
        "genre": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy"
        ],
        "rate": 8.8,
        "poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
    },
    {
        "title": "Guardians of the Galaxy",
        "year": 2017,
        "director": "James Gunn",
        "duration": "2h 16min",
        "genre": [
            "Action",
            "Adventure",
            "Comedy"
        ],
        "rate": 7.7,
        "poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
    },
    {
        "title": "Interstellar",
        "year": 2014,
        "director": "Christopher Nolan",
        "duration": "2h 49min",
        "genre": [
            "Adventure",
            "Drama",
            "Sci-Fi"
        ],
        "rate": 8.6,
        "poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    }
]

module.exports = {
    //Async Fucntion that return an array movie
    getMovies: async () => {
        try {
            const moviesArray = movies.map(movie => {
                return new Movie(movie);
            });
            return moviesArray;
        } catch (error) {
            throw new Error('Error al obtener las películas');
        }
    }
}