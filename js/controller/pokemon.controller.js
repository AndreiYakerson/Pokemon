'use strict'

function onInit() {
    getPokemons(pokemons => {
        renderPokemons(pokemons)
        pokemons.forEach(pokemon => {
            getPokemon(pokemon.url,renderPokemon)
        })
        
    })
}

function renderPokemons(pokemons) {
    let elContainer = document.querySelector('.cards-container')
    elContainer.innerHTML = ''

    pokemons.forEach(pokemon => {
        elContainer.innerHTML += `
            <article class="card">
            <h2>${pokemon.name}</h2>
            <div class="info-${pokemon.name}"></div>
            </article>
        `
    });
}

function renderPokemon(pokemon) {
    const strHTML = `
        <p>Weight: ${pokemon.weight}</p>
        <img src="${pokemon.imgs[0]}">
    `

    const infoContainer = document.querySelector(`.info-${pokemon.name}`)
    infoContainer.innerHTML = strHTML

    let currImgIdx = 0
    const elPokemonImg = document.querySelector(`.info-${pokemon.name} img`)
    const randTime = Math.random() + 0.5

    setInterval(() => {
        let currImg = pokemon.imgs[currImgIdx++]
        elPokemonImg.src = currImg
        if (currImgIdx === pokemon.imgs.length) currImgIdx = 0
    }, 1000 * randTime);
}