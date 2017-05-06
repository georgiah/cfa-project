// require dependencies
var choo = require('choo')
var css = require('sheetify')
var reload = require('choo-reload')

// import state middleware
var state = require('./lib/state')

// import templates
var home = require('./templates/home')
var registration = require('./templates/registration')

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
