// require dependencies
var html = require('choo/html')

// import button template
var button = require('./button.js')

// navigation template
module.exports = function () {
  return html`
    <nav>
      ${button('Registration')}
      ${button('Microchips')}
      <a href="/">
        <img class="logo" src="assets/logo.png" />
      </a>
      ${button('Contact')}
      ${button('About')}
    </nav>
  `
}
