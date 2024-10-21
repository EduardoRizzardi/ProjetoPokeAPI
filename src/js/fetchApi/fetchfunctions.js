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
    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const data = await fetch(url);
        const response = await data.json();
        //armazena os tipos do pokemon
        const type = response.types[0].type.name
        //Depois mandar para o Index e colocar na area do Type
        return response;

    }catch(error){
        showError("Ops! Um erro inexperado ocorreu ao carregar o tipo de pokémons!");
        console.error(error.message);
    }   
}
