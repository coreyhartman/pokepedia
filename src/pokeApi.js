import axios from 'axios';

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
});

/** Initiates a get request to the PokeAPI to get all pokemon */
export function getAllPokemon() {
    return pokeApi.get('pokemon?limit=10000')
        .then(response => {
            return response.data.results;
        })
        .catch(e => {
            console.error(e);
        });
}