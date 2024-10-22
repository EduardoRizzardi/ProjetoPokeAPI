import {urlPokeApi} from "../constants/constants.js"
import showError from "../errors/errors.js";

export async function listAllPokemons(urlApi = urlPokeApi){
    try{
        const data = await fetch(urlApi);
        const response = await data.json();

        return response;

    }catch(error){
        showError("Ops! Um erro inexperado ocorreu ao carregar a lista de pokémons!");
        console.error(error.message);
    }
}

//Essa função ta separando o Tipo do pokemon
export async function listTypePoke(pokemon) {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const data = await fetch(url);
        const response = await data.json();
        
        // Armazena e retorna apenas o primeiro tipo do Pokémon
        const type = response.types[0].type.name;
        return type// Retorne apenas o tipo, não o objeto completo
       
    } catch (error) {
        showError("Ops! Um erro inesperado ocorreu ao carregar o tipo de pokémons!");
        console.error(error.message);
    }   
}

export async function listTypePokesla(pokemon) {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const data = await fetch(url);
        const response = await data.json();
        
        // Armazena e retorna apenas o primeiro tipo do Pokémon
        const type2 = response.types[1].type.name;
        return type2// Retorne apenas o tipo, não o objeto completo
       
    } catch (error) {
        showError("Ops! Um erro inesperado ocorreu ao carregar o tipo de pokémons!");
        console.error(error.message);
    }   
}
