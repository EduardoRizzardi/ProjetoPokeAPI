import { createCard } from "./card/card.js";
import {listAllPokemons, listTypePoke} from "./fetchApi/fetchfunctions.js";

const data = await listAllPokemons();
const results = data.results;


results.forEach((pokemon, index) => {
    //console.log("teste: ", pokemon);
    createCard(pokemon, index + 1);
    //ta levando o nome do pokemon para o lista de tipo(listTypePoke) para poder pesquisar na API 
    listTypePoke(pokemon.name);
});
