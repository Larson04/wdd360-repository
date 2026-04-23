// Not finished, look at solution later

const baseURL = "https://pokeapi.co/api/v2/pokemon/";
const pokemonList = ["pikachu", "charmander", "squirtle", "bulbasaur"];
const listEl = document.querySelector(".pokeList");

async function getPokemon(pokemon) {
    const response = await fetch(baseURL + pokemon);
    const data = await response.json();
    return data;
}

async function getPokemonList() {
    pokemonList.forEach(async (pokemon) => {
        const newData = await getPokemon(pokemon);
        console.log("pokemon:", pokemon, newData);
    })
}

function jsonToHtml(data) {

}

function innit() {
    getPokemonList();

}

innit();