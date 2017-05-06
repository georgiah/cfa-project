// import dependencies
var html = require('choo/html')

// import templates
var base = require('../base')

// payment success template
module.exports = function (state, emit) {
  return base(success)

  function success () {
    return html`
      <div>
        Payment successful!
      </div>
    `
  }
}
