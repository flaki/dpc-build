window.$flakiapp = window.$flakiapp || {};

window.$flakiapp.pokeapiPokemonApi = function pokemonApi(pokemon) {
  if (isNaN(parseInt(pokemon, 10)) || pokemon < 1) {
    console.error('Invalid poke id!', pokemon)
    return Promise.reject(new Error(`Invalid poke id: ${pokemon}`))
  }

  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then(r => r.json())
}
