import { listAllPokemons } from "../fetchApi/fetchfunctions.js";

let limit = 85
let offset = 0
export let urlPokeApi = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

export const pokemonList = document.getElementById("pokemon-list");

const botao = document.querySelector('#Botão-Final-VerMais');


botao.addEventListener('click', async function () {
    
        offset = limit
        limit+= 100;
        let data
          if(limit<=1285){
            
            urlPokeApi = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
             data = await listAllPokemons();

            console.log(urlPokeApi);
          }  
        
          console.log('offset: ',offset);
          console.log('limit: ',limit);
          console.log('data: ', data);
        
    });

   

