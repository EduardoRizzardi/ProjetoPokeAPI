let limit = 25
let offset = 0
export let urlPokeApi = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

export const pokemonList = document.getElementById("pokemon-list");