import { listAllPokemons } from "../fetchApi/fetchfunctions.js";

window.onload = async() =>{
    const urlParam = new URLSearchParams(window.location.search);
    const PokeUrl = urlParam.get('url')

    const detailspoke = await listAllPokemons(PokeUrl);

    console.log(detailspoke)

    return await detailspoke;
}