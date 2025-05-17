'use strict'

const POKE_API = 'https://pokeapi.co/api/v2/pokemon?limit=50'

function getPokemons(onSuccess) {


    $.get(POKE_API, ({results}) => {
        const pokemons = results.sort((p1, p2) => p1.name.localeCompare(p2.name))
        onSuccess(pokemons)
    })
}

function getPokemon(pokemonURL, onSuccess) {
    $.get(pokemonURL, res => {
        const { name, weight, sprites } = res
        const imgs = Object.values(sprites).filter(sprite => typeof sprite === 'string')
        const pokemon = { name, weight, imgs }
        onSuccess(pokemon)
    })
}