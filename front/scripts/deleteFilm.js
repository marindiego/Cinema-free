const axios = require("axios")

document.getElementById("button-delete").addEventListener("click", () => {
    const filmTitle = document.getElementById("film-title")
    axios.delete(`http://localhost:3000/movies/delete-film-byTitle/${filmTitle.value}`)
    .then(res => {
        alert(res.data.message);
        filmTitle.value = "";
    }).catch(err => {
        alert(err.response.data.message);
    });
})