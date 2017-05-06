// import dependencies
var html = require('choo/html')

// button template
module.exports = function (label) {
  return html`
    <div>
      <a href="#">
        ${label}
      </a>
    </div>
  `
}
