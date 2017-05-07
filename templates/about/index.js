// import dependencies
var html = require('choo/html')

// import templates
var base = require('../base')

// about template
module.exports = function (state, emit) {
  return base(about)

  function about () {
    return html`
      <div>
        <h1>About Capital City AMS</h1>
        <p>Lorem ipsum dolor sit amet, nibh aliquam dolorem sit te, ei iuvaret maiestatis usu, ex pri summo facilis. Sea decore omnium et, his ex suas reque aliquid, mei viris persius splendide te.</p>
        <p>Mea ex tation accusam constituto, error commune aliquando cu quo. In cum illum ponderum. Cu conceptam sententiae sea. Sit solum tation imperdiet in. Ex erant quodsi eligendi pri, ut viris scribentur has:</p>

        <ul>
          <li>An duo iusto repudiare.</li>
          <li>vim id sonet quaeque dolorum.</li>
          <li>Ad error doming contentiones vim, quo et alia populo.</li>
        </ul>

        <p><img src="/assets/dog1.jpg"></p>
      </div>
    `
  }
}
