// Not finished, look at solution later

const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=40";
const pokemonList = document.querySelector(".pokemon-list");
const pokemonDetails = document.querySelector(".pokemon-details");

function pokemonListTemplate(item) {
    return `<li><button data-url="${item.url}">${item.name}</button></li>`;
}

function pokemonDetailsTemplate(item) {
    return `
    <h2>${item.name}</h2>
    <p>Height: ${item.height}</p>
    <p>Weight: ${item.weight}</p>
    <img src="${item.sprites.front_default}" alt="${item.name}">
    `;
}

function renderPokemonList(pokemon) {
    const pokemonListHtml = pokemon.map(pokemonListTemplate).join("");
    pokemonList.insertAdjacentHTML('afterbegin', pokemonListHtml);
}

async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
async function pokeListHandler(event) {
    const pokemonUrl = event.target.dataset.url;
    const list = await getData(pokemonUrl);
    const detailsHtml = pokemonDetailsTemplate(list);
    pokemonDetails.innerHTML = '';
    pokemonDetails.insertAdjacentHTML('afterbegin', detailsHtml);
}
async function innit() {
    const data = await getData(baseURL);
    const pokemon = data.results;
    renderPokemonList(pokemon);
}

pokemonList.addEventListener('click', pokeListHandler)
innit();