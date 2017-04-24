import swapi from './swapi.js'
import pokeapi from './pokeapi.js'

swapi(1).then(result => {
  //document.body.insertAdjacentHTML('beforeend', `<div class="sw">${result.name}</div>`)
  $('body').append(`<div class="sw">${result.name}</div>`)
})

pokeapi(25).then(result => {
  $('body').append(`<div class="sw">${result.name}</div>`)
})
