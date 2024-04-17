
const APIFilms = "https://students-api.up.railway.app/movies";
const renderFilmsCards = require("./renderFilmsCards");
const axios = require("axios");

const fetchFilms = async () => {
    try {
        const response = await axios.get(APIFilms);
        const films = response.data;
        renderFilmsCards(films);
    } catch (error) {
        console.log(error);
    }
}

fetchFilms();
