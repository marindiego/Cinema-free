

const renderFilmsCards = require("./renderFilmsCards");
const axios = require("axios");
const API_URL = process.env.API_URL;

const fetchFilms = async () => {
    try {
        const response = await axios.get(`${API_URL}/movies`);
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
