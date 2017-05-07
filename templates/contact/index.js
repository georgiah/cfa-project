// import dependencies
var html = require('choo/html')

// import templates
var base = require('../base')

// contact template
module.exports = function (state, emit) {
  return base(contact)

  function contact () {
    return html`
      <div>
        <h1>Contact our branches</h1>
        <p>Lorem ipsum dolor sit amet, nibh aliquam dolorem sit te, ei iuvaret maiestatis usu, ex pri summo facilis. Sea decore omnium et, his ex suas reque aliquid, mei viris persius splendide te.</p>

        <ul>
          <li>Omnes scaevola: 100 Dolorem Dr, Capital City, AG, 3000.</li>
          <li>Splendide: +00 9000 0000</li>
          <li>Petentium: postea@mel.ne</li>
        </ul>

        <p>
          <div class="center">
            <img src="/assets/dog2.jpg">
          </div>
        </p>
      </div>
    `
  }
}
