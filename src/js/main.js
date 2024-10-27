import { createCard } from "./card/card.js";
import { listAllPokemons, listTypePoke, listTypePoke2} from "./fetchApi/fetchfunctions.js";

const data = await listAllPokemons();
const results = data.results;

for (const [index, pokemon] of results.entries()) {
    const type = await listTypePoke(pokemon.name); // Aguarde o tipo
    const type2 = await listTypePoke2(pokemon.name);
    createCard(pokemon, index + 1, type, type2); // Passe o tipo para a função createCard
};
