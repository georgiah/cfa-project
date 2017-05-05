// require dependencies
var choo = require('choo')
var html = require('choo/html')
var css = require('sheetify')
var reload = require('choo-reload')

// initialise choo
var app = choo()

// setup reloading
app.use(reload())

// import stylesheet
css('./style.css')

// declare routes
app.route('/', home)

// start application
document.body.appendChild(app.start())

// home template
function home () {
	return html`
		<h1>Hello world</h1>
	`
}
