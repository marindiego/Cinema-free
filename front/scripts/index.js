
const renderFilmsCards = require("./renderFilmsCards");
const axios = require("axios");

const fetchFilms = async () => {
    try {
        const response = await axios.get("http://localhost:3000/movies");
        const films = response.data;
        return films;
    } catch (error) {
        console.log(error);
    }
}

const main = () => {
    fetchFilms().then(films => renderFilmsCards(films));
}

main();
