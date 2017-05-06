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

app.route('/registration', registration)
app.route('/registration/new/owner', null)
app.route('/registration/new/pets', null)

app.route('/registration/renew', null)
app.route('/registration/renew/confirm', null)
app.route('/registration/renew/address', null)
app.route('/registration/renew/pets', null)

app.route('/registration/error', null)

app.route('/payment', null)
app.route('/payment/success', null)
app.route('/payment/fail', null)

// start application
document.body.appendChild(app.start())
