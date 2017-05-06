// import dependencies
var html = require('choo/html')

// import templates
var nav = require('../nav')

// base wrapper template
module.exports = function (child) {
  return html`
    <div class="container">
      ${nav()}
      <section class="content">
        ${child()}
      </section>
      <footer>Copyright © 2017 Capital City Council</footer>
    </div>
  `
}
