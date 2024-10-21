import { createCard } from "./card/card.js";
import { listAllPokemons, listTypePoke } from "./fetchApi/fetchfunctions.js";

const data = await listAllPokemons();
const results = data.results;

for (const [index, pokemon] of results.entries()) {
    const type = await listTypePoke(pokemon.name); // Aguarde o tipo
    createCard(pokemon, index + 1, type); // Passe o tipo para a função createCard
}


