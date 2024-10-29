const limit = 20
let offset = 0

export const urlPokeApi = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

export const pokemonList = document.getElementById("pokemon-list");