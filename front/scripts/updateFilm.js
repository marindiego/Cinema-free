const axios = require("axios");

// Función para enviar una solicitud PUT para actualizar una película
const updateMovie = (filmTitle, movieData) => {
    return axios.put(`http://localhost:3000/movies/update-film/${filmTitle}`, movieData);
}

// Función para mostrar un mensaje de alerta
const showAlert = (message) => {
    alert(message);
}

// Función para mostrar u ocultar el formulario de actualización
const toggleUpdateForm = (isVisible) => {
    const formUpdate = document.getElementById("form-update");
    formUpdate.classList.toggle("d-block", isVisible);
    formUpdate.classList.toggle("d-none", !isVisible);
}

// Función para manejar el botón de búsqueda
const handleSearchButton = () => {
    const filmTitle = document.getElementById("film-title").value;
    if (!filmTitle) {
        showAlert("Please enter a film title");
        return;
    }

    axios.get(`http://localhost:3000/movies/get-film-byTitle/${filmTitle}`)
    .then(response => {
        const film = response.data;
        displayFilmData(film);
        setupUpdateButton(film);
    })
    .catch(err => {
        showAlert(err.response.data.message);
    });
}

// Función para mostrar los datos de la película en el formulario de actualización
const displayFilmData = (film) => {
    document.getElementById("film-title-ToUpdate").value = film.title;
    document.getElementById("film-year").value = film.year;
    document.getElementById("film-rate").value = film.rate;
    document.getElementById("film-director").value = film.director;
    document.getElementById("film-duration").value = film.duration;
    document.getElementById("film-poster").value = film.poster;

    toggleUpdateForm(true);
}

// Función para configurar el botón de actualización
const setupUpdateButton = (film) => {
    document.getElementById("button-update").addEventListener("click", () => {
        const updatedMovieData = {
            title: document.getElementById("film-title-ToUpdate").value,
            year: document.getElementById("film-year").value,
            rate: document.getElementById("film-rate").value,
            genre: film.genre,
            director: document.getElementById("film-director").value,
            duration: document.getElementById("film-duration").value,
            poster: document.getElementById("film-poster").value
        };
        updateButtonHandle(film.title, updatedMovieData);
    });
}

// Función para manejar el botón de actualización
const updateButtonHandle = (filmTitle, updatedMovieData) => {
    updateMovie(filmTitle, updatedMovieData)
    .then(response => {
        showAlert(response.data.message);
        toggleUpdateForm(false);
    })
    .catch(() => {
        showAlert("An error occurred, please try again");
    });
}

// Configurar el evento de clic para el botón de búsqueda
document.getElementById("button-search").addEventListener("click", handleSearchButton);
