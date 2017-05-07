// import dependencies
var choo = require('choo')
var css = require('sheetify')

// import state middleware
var state = require('./lib/state')

// import templates
var home = require('./templates/home')
var microchipping = require('./templates/microchipping')
var contact = require('./templates/contact')
var about = require('./templates/about')
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

// import stylesheets
css('./assets/normalize.css')
css('./assets/style.css')

// declare routes
app.route('/', home)

app.route('/microchipping', microchipping)
app.route('/contact', contact)
app.route('/about', about)

app.route('/registration', registration)
app.route('/registration/new/owner', owner)
app.route('/registration/new/pets', pets)

app.route('/registration/renew', renew)
app.route('/registration/renew/confirm', confirm)

app.route('/payment', payment)
app.route('/payment/success', success)

// set page title
document.title = 'Capital City - Animal Management Services'

// start application
document.body.appendChild(app.start())
