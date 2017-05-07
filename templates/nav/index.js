// import dependencies
var html = require('choo/html')

// import templates
var button = require('./button.js')

// navigation template
module.exports = function () {
  return html`
    <nav>
      ${button('Registration', '/registration')}
      ${button('Microchipping', '/microchipping')}
      <a href="/">
        <img class="logo" src="/assets/logo.png" />
      </a>
      ${button('Contact', '/contact')}
      ${button('About', '/about')}
    </nav>
  `
}
