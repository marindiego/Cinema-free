
const APIFilms = "https://students-api.up.railway.app/movies";
const renderFilmsCards = require("./renderFilmsCards");

const getFilms = () => {
    $.get(APIFilms,(data,status)=> {
        if(status !== "success") return alert("Not films found");
        renderFilmsCards(data);
    })
}

getFilms();
