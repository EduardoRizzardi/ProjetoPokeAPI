import { pokemonList } from "../constants/constants.js";

export function createCard(pokemon, id, type, type2, imageUrl) {
    const typeimg1 = `src/assets/types/${type}.svg`;
    const typeimg2 = type2 ? `src/assets/types/${type2}.svg` : '';  

    const card = `
        <div class="card ${type}" style="width: 18rem;">
            <div class="card-body">
                ${typeimg1 ? `<img src="${typeimg1}" alt="${type} type image" class="type-img">` : ''}
                ${typeimg2 ? `<img src="${typeimg2}" alt="${type2} type image" class="type-img">` : ''}
                <img src="${imageUrl}" class="card-img-top" alt="${pokemon.name}"> <!-- Usando imageUrl -->
                <h5 class="card-title">${pokemon.name}</h5>
                <p class="text-id">N° ${id}</p>
                <p class="text-type">Type: ${type} ${type2 ? ` / ${type2}` : ''}</p>
                <a href="#" class="pokebutton" data-id="${id}">Ver mais</a>
            </div>
        </div>
    `;

    // Adiciona o card ao container da lista de Pokémon
    pokemonList.innerHTML += card;


    const button = pokemonList.querySelector(`.pokebutton[data-id="${id}"]`);
    button.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(`ID do Pokémon selecionado: ${id}`);

    });
}