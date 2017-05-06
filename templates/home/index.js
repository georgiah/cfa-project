// import dependencies
var html = require('choo/html')

// import templates
var base = require('../base')

// home template
module.exports = function (state, emit) {
  return base(home)

  function home () {
    return html`
      <div>
        This is home
      </div>
    `
  }
}
