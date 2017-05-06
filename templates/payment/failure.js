// import dependencies
var html = require('choo/html')

// import templates
var base = require('../base')

// payment failure template
module.exports = function (state, emit) {
  return base(failure)

  function failure () {
    return html`
      <div>
        Payment failed!
      </div>
    `
  }
}
