import {urlPokeApi} from "../constants/constants.js"
import showError from "../errors/errors.js";

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '##A9A9A9',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
    ice: '#98d8d8'
}

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
        imgType(type);
        return type;
       
   
    } catch (error) {
        showError("Ops! Um erro inesperado ocorreu ao carregar o tipo de pokémons!");
        console.error(error.message);
    }   
}

export async function listTypePoke2(pokemon) {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const data = await fetch(url);
        const response = await data.json();
        
        const type2 = response.types[1] ? response.types[1].type.name: '';
        imgType(type2);
        return type2;

    } catch (error) {
        showError("Ops! Um erro inesperado ocorreu ao carregar o tipo de pokémons!");
        console.error(error.message);
    }   
}

export async function imgType(type, type2) {    
    const color = colors[type];

    console.log(colortype);
}
