import { pokemonList } from "../constants/constants.js";

export function createCard(pokemon, index, type, type2) {
    console.log(pokemon);

    const typeimg1 = `src/assets/types/${type}.svg`;
    const typeimg2 = type2 ? `src/assets/types/${type2}.svg` : '';  

    // Adicionando classes de tipo ao card
    const card = `<div class="card ${type} " style="width: 18rem;">
                    <div class="card-body">
                        <img src="${typeimg1}" alt="${type} type image class="type-img""> 
                        ${type2 ? `<img src="${typeimg2}" alt="${type2} type image">` : ''} 
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png" class="card-img-top" alt="...">
                        <h5 class="card-title">${pokemon.name}</h5>
                        <p class="text-id">N° ${index}</p>
                        <p class="text-type">Type: ${type} ${type2 ? `/ ${type2}` : ''}</p>
                        <a href="" class="btn btn-primary">Ver mais</a>
                    </div>
                </div>`;

    pokemonList.innerHTML += card;
}