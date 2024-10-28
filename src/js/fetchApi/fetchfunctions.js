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
        imgType(type);
        return type;
       
   
    } catch (error) {
        showError("Ops! Um erro inesperado ocorreu ao carregar o tipo de pokémons!");
        console.error(error.message);
    }   
};

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
};

export async function imgType(type, type2) {    
}

export async function getPokemon(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const data = await fetch(url);
    const response = await data.json();   

    return response;
}

export async function pokestatus(pokemon){
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const data = await fetch(url);
    const response = await data.json();   

    const hp = response.stats[0].base_stat;

    return hp
}

const search = document.querySelector('#search-input');
const filter = document.querySelector('#type-filter');



search.addEventListener('change', async (event) => {
const poke = await getPokemon(event.target.value);
console.log(poke)
})



filter.addEventListener('click', async (event) =>{
    var select = document.getElementById('type-filter').value;
    console.log(select);
});
