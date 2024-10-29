import { createCard } from "./card/card.js";
import { listAllPokemons, listTypePoke, listTypePoke2 } from "./fetchApi/fetchfunctions.js";

let allPokemons = [];

async function loadPokemons() {
    const data = await listAllPokemons();
    allPokemons = data.results;
    displayPokemons(); 
}

async function displayPokemons() {
    const pokemonList = document.getElementById('pokemon-list');
    pokemonList.innerHTML = '';

    const promises = allPokemons.map(async (pokemon, index) => {
        const type = await listTypePoke(pokemon.name);
        const type2 = await listTypePoke2(pokemon.name);

        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`;

        const id = index + 1;

        return { pokemon, id, type, type2, imageUrl };
    });

    const pokemonsData = await Promise.all(promises);


    pokemonsData.forEach(({ pokemon, id, type, type2, imageUrl }) => {
        createCard(pokemon, id, type, type2, imageUrl);
    });
}

function searchPokemons(query) {
    const filteredPokemons = allPokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
    );

    const pokemonList = document.getElementById('pokemon-list');
    pokemonList.innerHTML = '';

    filteredPokemons.forEach(async (pokemon, index) => {
        const type = await listTypePoke(pokemon.name);
        const type2 = await listTypePoke2(pokemon.name);

        const id = allPokemons.findIndex(p => p.name === pokemon.name) + 1; 

        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

        createCard(pokemon, id, type, type2, imageUrl);
    });
};

const searchinput = document.getElementById('search-input');
searchinput.addEventListener('input', (event) => {
    const query = event.target.value;
    searchPokemons(query); 
});


async function filterByType(selectedType) {
    const pokemonList = document.getElementById('pokemon-list');
    pokemonList.innerHTML = '';

    const promises = allPokemons.map(async (pokemon) => {
        const type = await listTypePoke(pokemon.name);
        const type2 = await listTypePoke2(pokemon.name);

        if (selectedType === '' || type === selectedType || type2 === selectedType) {
            const id = allPokemons.findIndex(p => p.name === pokemon.name) + 1;
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            return { pokemon, id, type, type2, imageUrl };
        }
        return null;
    });

    const filteredPokemonsData = await Promise.all(promises);

    const filteredPokemons = filteredPokemonsData.filter(pokemonData => pokemonData !== null);

    filteredPokemons.forEach(({ pokemon, id, type, type2, imageUrl }) => {
        createCard(pokemon, id, type, type2, imageUrl);
    });
}

const typeFilter = document.getElementById('type-filter');
typeFilter.addEventListener('change', (event) => {
    const selectedType = event.target.value; 
    filterByType(selectedType); 
});

loadPokemons();