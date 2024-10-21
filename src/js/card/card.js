import {pokemonList} from "../constants/constants.js"

//Ta carregando somente 20 pokemon pq se for carragar todos ira demorar(Fazer função que carrega aos poucos)

export function createCard(pokemon, index) {

    console.log(pokemon);
    
    const card = `<div class="card" style="width: 18rem;">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${pokemon.name}</h5>
                        <p class="text-id">${index}</p>
                        <!--adicionar o tipo aqui-->
                        <p class="text-type">Type:</p>
                        <a href="${pokemon.url}" class="btn btn-primary">Ver mais</a>
                    </div>
                </div>`

    pokemonList.innerHTML += card;
}
