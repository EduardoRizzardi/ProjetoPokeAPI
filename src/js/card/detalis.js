import { listAllPokemons} from "../fetchApi/fetchfunctions.js";

let pokemon = [];
let  id = 0;

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

        document.title = `${pokemon.name}`

        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
        const ShinyUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemon.id}.png`;

        const weight = pokemon.weight / 10;
        const height = pokemon.height / 10;

        id = pokemon.id;

        const type = pokemon.types[0].type.name
        const type2 = pokemon.types[1]?.type.name || '';

        const hp = pokemon.stats[0].base_stat
        const attack = pokemon.stats[1].base_stat
        const defense = pokemon.stats[2].base_stat
        const specialatt = pokemon.stats[3].base_stat
        const specialdef = pokemon.stats[4].base_stat
        const speed = pokemon.stats[5].base_stat

        const abilities = pokemon.abilities[0].ability.name;
        const abilities2 = pokemon.abilities[1]?.ability.name;

        createCard(pokemon, imageUrl, type, type2, ShinyUrl, weight, height, abilities, abilities2, hp, attack, defense, specialatt, specialdef, speed)
    });
}


const pagedetalis = document.getElementById("detalispoke");

export function createCard(pokemon, imageUrl, type, type2, ShinyUrl, weight, height, abilities, abilities2, hp, attack, defense, specialatt, specialdef, speed){
    const typeimg1 = `src/assets/types/${type}.svg`;
    const typeimg2 = type2 ? `src/assets/types/${type2}.svg` : '';  

    const card = `
       
        <section id="imagem-pokemon">
            <img src="${imageUrl}" class="card-img-top" alt="${pokemon.name}">
        </section>
        <section id="imagem-typepokemon">
            ${typeimg1 ? `<img src="${typeimg1}" alt="${type} type image" class="type-img">` : ''}
            ${typeimg2 ? `<img src="${typeimg2}" alt="${type2} type image" class="type-img">` : ''}
        </section>
        <h2> ${id}.${pokemon.name}</h2>  
        <div id="container-status">
            <p>hp: ${hp}</p>
            <progress id='progress' max='255' value='${hp}'"></progress>
            <p>attack: ${attack}</p> 
            <progress id='progress' max='255' value='${attack}'></progress>
            <p>defense: ${defense}</p>
            <progress id='progress' max='255' value='${defense}'></progress>
            <p>special-attack: ${specialatt}</p>
            <progress id='progress' max='255' value='${specialatt}'></progress>
            <p>special-defense: ${specialdef}</p>
            <progress id='progress' max='255' value='${specialdef}'></progress>
            <p>speed: ${speed}</p>
            <progress id='progress' max='255' value='${speed}'></progress>
        </div>

        <div id="container-shiny">
        <h2>Shiny</h2>
            <section>
                <img src="${ShinyUrl}" class="imgshiny">
            </section>
        </div>

        <p>weight: ${weight}Kg</p>
        <p>height: ${height}m</p>

        <p>Habilidades: ${abilities} / ${abilities2}</p>
    `
    pagedetalis.innerHTML += card;
}

const proxi = document.getElementById('btProximo');
const anter = document.getElementById('btAnterior');

proxi.addEventListener('click', async () => {
    proximopoke()
})

anter.addEventListener('click', async () => {
    pokeanterior()
})


function proximopoke(){
    id += 1; 
    const urlParam = new URLSearchParams(window.location.search);
    urlParam.set('url', `https://pokeapi.co/api/v2/pokemon/${id}/`);
    window.location.search = urlParam;
}


function pokeanterior(){
    id -= 1;
    console.log(id)
    if(id === 0){
        document.getElementById("btAnterior").disabled = true;
        id += 1;
    }else{
        const urlParam = new URLSearchParams(window.location.search);
        urlParam.set('url', `https://pokeapi.co/api/v2/pokemon/${id}/`);
        window.location.search = urlParam;
    }
}