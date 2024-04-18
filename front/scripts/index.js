
const APIFilms = "https://students-api.up.railway.app/movies";
const renderFilmsCards = require("./renderFilmsCards");
const axios = require("axios");

const fetchFilms = async () => {
    try {
        const response = await axios.get(APIFilms);
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
