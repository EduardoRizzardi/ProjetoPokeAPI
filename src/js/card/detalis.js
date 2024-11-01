import { listAllPokemons } from "../fetchApi/fetchfunctions.js";

let pokemon = [];

window.onload = async () => {
    Pokedetails().then((data) => {
        console.log(data)
    });
}

function Pokedetails() {
    return new Promise(async (resolve) => {
        const urlParam = new URLSearchParams(window.location.search);
        const PokeUrl = urlParam.get('url');

        pokemon = await listAllPokemons(PokeUrl);
        resolve(pokemon);

        console.log("Vida: ",pokemon.stats[0].stat.name)
        const pokename = document.getElementById('Pokename')
        pokename.innerHTML = `${pokemon.name}`;
    });
}