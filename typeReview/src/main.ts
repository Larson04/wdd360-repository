import './style.css'
const pokemonList = document.querySelector("#pokemon-list");
const pokemonDetails = document.querySelector("#pokemon-details");
const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=40";

interface Pokemon{
  url: string;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  }
}

function pokemonListTemplate(item: Pokemon) {
    return `<li><button data-url="${item.url}">${item.name}</button></li>`;
}

function pokemonDetailsTemplate(item: Pokemon) {
    return `
    <h2>${item.name}</h2>
    <p>Height: ${item.height}</p>
    <p>Weight: ${item.weight}</p>
    <img src="${item.sprites.front_default}" alt="${item.name}">
    `;
    }

function renderPokemonList(pokemon: Pokemon[]) {
    const pokemonListHtml = pokemon.map(pokemonListTemplate).join("");
    pokemonList?.insertAdjacentHTML('afterbegin', pokemonListHtml);
}

async function getData(url: string) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
async function pokeListHandler(event: Event) {
  const target = event.target as HTMLElement;
  const pokemonUrl = target.dataset.url;
  if(!pokemonUrl) return;
  const list = await getData(pokemonUrl);
  const detailsHtml = pokemonDetailsTemplate(list);
  if(pokemonDetails) {
    pokemonDetails.innerHTML = '';
    pokemonDetails.insertAdjacentHTML('afterbegin', detailsHtml);
  } else {
    throw new Error('Output element not found')
  }
}
async function init() {
    const data = await getData(apiUrl);
    const pokemon = data.results;
    renderPokemonList(pokemon);
}

pokemonList?.addEventListener('click', pokeListHandler)
init();
