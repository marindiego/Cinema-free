const createFilmCard = require("./createFilmCard");
const filmContainer = document.getElementById("films-Section");

const renderFilmsCards = (listFilms) => {
    filmContainer.innerHTML = "";
    listFilms.forEach(film => filmContainer.appendChild(createFilmCard(film)));
};
module.exports = renderFilmsCards;