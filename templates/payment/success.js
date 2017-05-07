// import dependencies
var html = require('choo/html')

// import templates
var base = require('../base')

// payment success template
module.exports = function (state, emit) {
  return base(success)

  function success () {
    return html`
      <div class="success">
        <h1>Payment successful!</h1>

        <p>Lorem ipsum dolor sit amet, vel dolor quaestio te, mei malis interpretaris ne, ullum inani vix et. Mei ut definiebas accommodare.</p>
      </div>
    `
  }
}
