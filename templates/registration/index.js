// import dependencies
var html = require('choo/html')

// import templates
var base = require('../base')

// registration template
module.exports = function (state, emit) {
  return base(registration)

  function registration () {
    return html`
      <div>
        <div>
          Are you renewing your registration or registering a new animal?
        </div>
        <a href="/registration/renew">Renewing</a>
        <a href="/registration/new/owner">Registering</a>
      </div>
    `
  }
}
