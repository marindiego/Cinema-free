const filmContainer = document.getElementById("films-Section");
const svgStarIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
<path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
</svg>`;

const createFilmCard = (film) => {
  const cardFilm = document.createElement("article");
  const cardFilmLink = document.createElement("a");
  const filmImageContainer = document.createElement("div");
  const filmInformation = document.createElement("div");
  const filmRate = document.createElement("div");
  const filmGenderContainer = document.createElement("div");

  cardFilm.classList.add("film-card");
  cardFilmLink.href = "#";
  filmImageContainer.classList.add("film-image-container");
  filmInformation.classList.add("film-information");
  filmRate.classList.add("film-rate");
  filmGenderContainer.classList.add("film-gender");

  filmImageContainer.innerHTML = `<img src="${film.poster}" alt="${film.title}">`;
  filmInformation.innerHTML = `
    <h3 class="film-title">${film.title}</h3>
    <span class="film-property">Director: </span>
    <span class="film-director">${film.director}</span>
    <span class="film-property">Year: </span>
    <span class="film-year">${film.year}</span>
    <span class="film-property">Duration: </span>
    <span class="film-duration">${film.duration}</span>
  `;
  filmRate.innerHTML = `
    <div class="icon-start-container">
      ${svgStarIcon}
    </div>
    ${film.rate}
  `;
  filmGenderContainer.innerHTML = film.genre.map((genre) => `<span>${genre}</span>`).join("");

  cardFilmLink.appendChild(filmImageContainer);
  cardFilmLink.appendChild(filmInformation);
  filmInformation.appendChild(filmRate);
  filmInformation.appendChild(filmGenderContainer);
  cardFilm.appendChild(cardFilmLink);

  return cardFilm;
};

const renderFilmsCards = () => {
  filmContainer.innerHTML = "";
  tempData.forEach(film => filmContainer.appendChild(createFilmCard(film)));
};

renderFilmsCards();
