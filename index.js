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
var renew = require('./templates/renew')
var confirm = require('./templates/renew/confirm')
var payment = require('./templates/payment')
var success = require('./templates/payment/success.js')

// initialise choo
var app = choo()

// setup app state
app.use(state)

// setup reloading
app.use(reload())

// import stylesheets
css('./assets/normalize.css')
css('./assets/style.css')

// declare routes
app.route('/', home)

app.route('/registration', registration)
app.route('/registration/new/owner', owner)
app.route('/registration/new/pets', pets)

app.route('/registration/renew', renew)
app.route('/registration/renew/confirm', confirm)

app.route('/payment', payment)
app.route('/payment/success', success)

// start application
document.body.appendChild(app.start())
