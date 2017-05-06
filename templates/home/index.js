// require dependencies
var html = require('choo/html')

// import template
var base = require('../base')

function home () {
  return html`
    <div>
      This is home
    </div>
  `
}

module.exports = function () {
  return base(home)
}
