// require dependencies
var html = require('choo/html')

// import template
var nav = require('../nav')

module.exports = function (child) {
  return html`
    <div class="container">
      ${nav()}
      <section class="content">
        ${child()}
      </section>
    </div>
  `
}
