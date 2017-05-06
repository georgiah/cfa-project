// import dependencies
var html = require('choo/html')

// error template
module.exports = function (obj) {
  var error = obj.bool
  var warning = obj.text

  if (error) {
    return html`<div class="error">${warning}</div>`
  }
}
