window.$flakiapp = window.$flakiapp || {};

window.$flakiapp.swapiWhoApi = function whoApi(who) {
  if (isNaN(parseInt(who, 10)) || who < 1) {
    console.error('Invalid people id!', who)
    return Promise.reject(new Error(`Invalid people id: ${who}`))
  }

  return fetch(`https://swapi.co/api/people/${who}/`)
    .then(r => r.json())
}
