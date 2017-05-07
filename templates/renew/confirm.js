// import dependencies
var html = require('choo/html')

// import templates
var base = require('../base')

// renewal confirmation template
module.exports = function (state, emit) {
  return base(confirm)

  function confirm () {
    return html`
      <section class="confirmation">
        <h1>Registration Renewal</h1>
        <h3>Are these your animals?</h3>

        <div>
          <table>
            <tr>
              <th>Name</th><th>Type</th><th>Breed</th><th>Microchip</th>
            </tr>
            ${state.pets.map(displayPet)}
          </table>
        </div>
        <div class="buttons">
          <button class="yes" onclick=${valid}>Yes</button>
          <button class="no" onclick=${invalid}>No</button>
        </div>
      </section>
    `
  }

  // map function for rendering pet details
  function displayPet (pet) {
    return html`
      <tr>
        <td>${pet.name}</td>
        <td>${pet.type}</td>
        <td>${pet.breed}</td>
        <td>${pet.microchip}</td>
      </tr>
    `
  }

  // redirect user to address confirmation
  function valid () {
    window.scrollTo(0, 0)
    emit('pushState', '/payment')
  }

  // update error status, clear state, and redirect user to key page
  function invalid () {
    emit('clearState')
    emit('error', 'Please enter your correct owner key, or contact us.')
    emit('pushState', '/registration/renew')
  }
}
