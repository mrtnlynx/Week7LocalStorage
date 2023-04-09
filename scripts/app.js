const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const movieYear = document.querySelector('.userInputYear');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieYearToDisplay = document.querySelector('.favoriteMovieYear');

let titleInStorage = localStorage.getItem('title');
let yearInStorage = localStorage.getItem('year');
let imageUrlInStorage = localStorage.getItem('imageUrl');

if(titleInStorage && imageUrlInStorage && yearInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    movieYearToDisplay.textContent = yearInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(33, 36, 82, 0.849), rgba(83, 84, 122, 0.753)), url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let movieYearInput = movieYear.value;
    let posterUrlInput = moviePosterUrl.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('year', movieYearInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    movieYearToDisplay.textContent = movieYearInput;
    container.style.backgroundImage = `linear-gradient(rgba(33, 36, 82, 0.849), rgba(83, 84, 122, 0.753)), url('${posterUrlInput}')`;
    movieTitle.value = '';
    movieYear.value = '';
    moviePosterUrl.value = '';
});

