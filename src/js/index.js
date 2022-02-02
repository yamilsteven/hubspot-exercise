import '../styles/index.css';
import '../scss/main.scss';
import Selectors from './common/selectors';
import Classes from './common/classes';


// Wrapping the logic inside an anonymous function to protect the scope in that way like a Module Pattern.
const secondExcersice = () => {
    const url = "https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json";
    const results = document.getElementById(Selectors.RESULTS);
    const genreFilter = document.getElementById(Selectors.GENRE_FILTER);
    const yearFilter = document.getElementById(Selectors.YEAR_FILTER);
    const rad = document.typeForm.type;
    let prev = null;
    const clearButton = document.getElementById(Selectors.CLEAR_FILTERS);
    const dropDownFilters = document.querySelectorAll(Selectors.DROP_DOWN_FILTERS);

    async function start() {
        const response = await fetch(url);
        const data = await response.json();
    
        createItems(data);
        radioFilters();
        clearFilters();
        drowDownFilters();
    }

    const createItems = (data) => {
        data.media.forEach((item) => {
            let genres = JSON.stringify(item.genre);
            genres = genres.replaceAll(',', ', ').replaceAll('"', '').replaceAll('[', '').replaceAll(']', '');
            
            const newItem = `<li data-type="${item.type}" data-genre="${item.genre}" class="${Classes.ITEMS_LIST}">
                <img loading=lazy alt="${item.title}" class="${Classes.ITEMS_LIST_POSTER}" src="${item.poster}" onerror="if (this.src != 'error.jpg') this.src = 'https://i.ibb.co/0Yfz3hx/default-poster.jpg';">
                <h2 class="${Classes.ITEMS_LIST_TITLE}">${item.title} <span>(${item.year})</span></h2>
                <h3 class="${Classes.ITEMS_LIST_GENRES}">Genres: ${genres}</h3>
                </li>`
    
            results.insertAdjacentHTML('beforeEnd', newItem);
    
            const newGenre = `
                <div value="${item.genre}">${item.genre}</div>
            `
    
            const newYear = `
                <div value="${item.year}">${item.year}</div>
            `
    
            genreFilter.insertAdjacentHTML('beforeEnd', newGenre);
            yearFilter.insertAdjacentHTML('beforeEnd', newYear);
    
        })
    }

    const radioFilters = () => {
        for (let i = 0; i < rad.length; i++) {
            rad[i].addEventListener('change', function() {
                (prev) ? console.log(''): null;
                if (this !== prev) {
                    prev = this;
                }
    
                if(this.value == 'books') {
                    results.classList.add(Classes.SHOW_BOOKS);
                    results.classList.remove(Classes.SHOW_MOVIES);
                } else if(this.value == 'movies') {
                    results.classList.add(Classes.SHOW_MOVIES);
                    results.classList.remove(Classes.SHOW_BOOKS);
                }
            });
        }
    }

    const clearFilters = () => {
        clearButton.addEventListener('click', function () {
            results.classList.remove(Classes.SHOW_MOVIES);
            results.classList.remove(Classes.SHOW_BOOKS);
            for (let i = 0; i < rad.length; i++) {
                rad[i].checked = false;
            }
        })
    };

    const drowDownFilters = () => {
        dropDownFilters.forEach(item =>{
            item.addEventListener('mouseenter', event => {
                let child = item.querySelector('.inner__content');
                child.classList.add('show');
            })

            item.addEventListener('mouseleave', event => {
                let child = item.querySelector('.inner__content');
                child.classList.remove('show');
            })
        })
    }

    start();
};

secondExcersice();