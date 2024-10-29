import { urlPokeApi } from "../constants/constants.js";
import showError from "../errors/errors.js";

export async function getPokemon(pokemon) {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        showError("Ops! Um erro inesperado ocorreu ao carregar os dados do Pokémon!");
        console.error(error.message);
    }   
}

export async function listAllPokemons(urlApi = urlPokeApi) {
    try {
        const response = await fetch(urlApi);
        return await response.json();
    } catch (error) {
        showError("Ops! Um erro inesperado ocorreu ao carregar a lista de pokémons!");
        console.error(error.message);
    }
}

export async function listTypePoke(pokemon) {
    try {
        const response = await getPokemon(pokemon);
        const type = response.types[0]?.type.name || '';
        return type;
    } catch (error) {
        showError("Ops! Um erro inesperado ocorreu ao carregar o tipo do pokémon!");
        console.error(error.message);
    }   
}

export async function listTypePoke2(pokemon) {
    try {
        const response = await getPokemon(pokemon);
        const type2 = response.types[1]?.type.name || '';
        return type2;
    } catch (error) {
        showError("Ops! Um erro inesperado ocorreu ao carregar o segundo tipo do pokémon!");
        console.error(error.message);
    }   
}