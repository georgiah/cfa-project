// import dependencies
var html = require('choo/html')

// button template
module.exports = function (label, link) {
  if (!link) link = '#'

  return html`
    <div class="nav-button">
      <a href=${link}>
        ${label}
      </a>
    </div>
  `
}
