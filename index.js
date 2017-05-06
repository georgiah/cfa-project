// import dependencies
var choo = require('choo')
var css = require('sheetify')
var reload = require('choo-reload')

// import state middleware
var state = require('./lib/state')

// import templates
var home = require('./templates/home')
var registration = require('./templates/registration')
var owner = require('./templates/registration/owner.js')
var pets = require('./templates/registration/pets.js')
var payment = require('./templates/payment')
var success = require('./templates/payment/success.js')
var failure = require('./templates/payment/failure.js')

// initialise choo
var app = choo()

// setup app state
app.use(state)

// setup reloading
app.use(reload())

// import stylesheets
css('./normalize.css')
css('./style.css')

// declare routes
app.route('/', home)

app.route('/registration', registration)
app.route('/registration/new/owner', owner)
app.route('/registration/new/pets', pets)

app.route('/registration/renew', null)
app.route('/registration/renew/confirm', null)
app.route('/registration/renew/address', null)
app.route('/registration/renew/pets', null)

app.route('/registration/error', null)

app.route('/payment', payment)
app.route('/payment/success', success)
app.route('/payment/fail', failure)

// start application
document.body.appendChild(app.start())
