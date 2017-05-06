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
        <h1>Pet Registration</h1>
        <h3>What would you like to do?</h3>

        <button class="renew">
          <a href="/registration/renew">Renew an existing animal</a>
        </button>

        <button class="new">
          <a href="/registration/new/owner">Register a new animal</a>
        </button>
      </section>
    `
  }
}
