// require dependencies
var choo = require('choo')
var html = require('choo/html')
var css = require('sheetify')
var reload = require('choo-reload')

// import template
var nav = require('./templates/nav')
// import state middleware
var state = require('./lib/state')

// initialise choo
var app = choo()

// setup app state
app.use(state)

// setup reloading
app.use(reload())

// import stylesheet
css('./normalize.css')
css('./style.css')

// declare routes
app.route('/', home)

// start application
document.body.appendChild(app.start())

// home template
function home () {
  return html`
    <div class="container">
      ${nav()}
      <section class="content">
        Hello World
      </section>
    </div>
  `
}
