window.$flakiapp.swapiWhoApi(1).then(result => {
  //document.body.insertAdjacentHTML('beforeend', `<div class="sw">${result.name}</div>`)
  $('body').append(`<div class="sw">${result.name}</div>`)
})

window.$flakiapp.pokeapiPokemonApi(25).then(result => {
  $('body').append(`<div class="sw">${result.name}</div>`)
})
