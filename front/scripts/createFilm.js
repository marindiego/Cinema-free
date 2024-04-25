const filmTitle = document.getElementById("film-title");
const filmYear = document.getElementById("film-year");
const filmDirector = document.getElementById("film-director");
const filmDuration = document.getElementById("film-duration");
const filmRate = document.getElementById("film-rate");
const filmPoster = document.getElementById("film-poster");
const btnSubmit = document.getElementById('button-submit');
const btnReset = document.getElementById('button-reset');

axios = require('axios');

const resetInputs = () => {
    const inputs = document.querySelectorAll('input');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    inputs.forEach(input => {
        input.value = "";
    })
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    })
}
const isEmptyInputs = () => {
    const inputs = document.querySelectorAll('input:not([type="checkbox"])');
    let isEmpty = false;
    inputs.forEach(input => {
        if (!input.value) isEmpty = true;
    })
    return isEmpty;
}
const isValidInputs = () => {
    if (filmTitle.value.length > 20 || parseFloat(filmYear.value) > 9999 || filmRate.value > 11) {
        return false;
    }
    return true;
}
const resetHandler = () => {
    resetInputs();
}
const postFilm = async (film) => {
    try {
        const response = await axios.post('http://localhost:3000/movies/create-film', film);
    } catch (error) {
        console.error(error);
    }
}
const returnCheckBoxes = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const values = [];
    if (!checkboxes.length) return false;

    checkboxes.forEach(checkbox => {
        values.push(checkbox.value);
    });
    return values;
}


const submitHandler = (e) => {
    e.preventDefault();
    if (isEmptyInputs()) return alert("All fields are required");
    if (!isValidInputs()) return alert("Invalid inputs");
    if (!returnCheckBoxes()) return alert("Select at least one genre");
    const filmGenre = returnCheckBoxes();
    const film = {
        title: filmTitle.value,
        year: filmYear.value,
        director: filmDirector.value,
        duration: filmDuration.value,
        genre: filmGenre,
        rate: filmRate.value,
        poster: filmPoster.value
    }
    postFilm(film).then(alert("Film created")).catch(()=> alert("Occurs an error, try again"));
}


btnReset.addEventListener('click', resetHandler);

btnSubmit.addEventListener('click', submitHandler);