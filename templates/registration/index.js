// import dependencies
var html = require('choo/html')

// import templates
var base = require('../base')

// registration template
module.exports = function (state, emit) {
  return base(registration)

  function registration () {
    return html`
      <section class="registration">
        ${clearState()}
        <h1>Pet Registration</h1>

        <p>In Capital City, all pet owners are required by law to register their pets with the council. If your pet becomes lost, having it registered in advance will help improve the chances that you will both be reunited.</p>

        <p>Your registration fee helps the council improve facilities for animal management staff, and also funds research into domestic pet welfare.</p>

        <h2>What would you like to do?</h2>

        <button class="new">
          <a href="/registration/new/owner">Register a new animal</a>
        </button>

        <button class="renew">
          <a href="/registration/renew">Renew your animal's registration</a>
        </button>
      </section>
    `
  }

  function clearState () {
    emit('clearState')
  }
}
