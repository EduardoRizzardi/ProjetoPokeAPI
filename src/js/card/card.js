import {pokemonList} from "../constants/constants.js"

//Ta carregando somente 20 pokemon pq se for carragar todos ira demorar(Fazer função que carrega aos poucos)


export function createCard(pokemon, index, type, type2) {
    console.log(pokemon);
    
    const typeimg1 = `src/assets/types/${type}.svg`;
    const typeimg2 = type2 ? `src/assets/types/${type2}.svg` : '';  

    const card = `<div class="card" style="width: 18rem;">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <img src="${typeimg1}" alt="${type} type image" class="typeimage"> <img src="${typeimg2}" class="typeimage"> 
                        <h5 class="card-title">${pokemon.name}</h5>
                        <p class="text-id">N° ${index}</p>
                        <div id="type-image-container"></div>
                        <p class="text-type">Type: ${type} ${type2}</p>
                        <a href="${pokemon.url}" class="btn btn-primary">Ver mais</a>
                    </div>
                </div>`

    pokemonList.innerHTML += card;
}
