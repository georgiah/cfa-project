// import dependencies
var html = require('choo/html')

// import templates
var base = require('../base')

// pet registration template
module.exports = function (state, emit) {
  var pet = state.newPet

  var type = pet.type
  var name = pet.name
  var age = pet.age
  var breed = pet.breed
  var microchip = pet.microchip
  var desexed = pet.desexed

  return base(pets)

  function pets () {
    return html`
      <section class="pets">
        <h1>Pet Registration</h1>

        <p>Providing details about your new pet, such as its microchip number, will assist us in finding it if it becomes lost. If your pet is desexed, your final registration fee will be discounted.</p>

        <h2>Your pet's details</h2>

        <div class="form-container">
          <div class="form-field">
            Animal Type
            <select id="type" onchange=${updateSelect}>
              <option disabled selected></option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
            </select>
          </div>
          <div class="form-field">
            Name
            <input type="text" id="name" value=${name} oninput=${update} />
          </div>
          <div class="form-field">
            Age
            <input type="text" id="age" value=${age} oninput=${update} />
          </div>
          <div class="form-field">
            Breed
            <input type="text" id="breed" value=${breed} oninput=${update} />
          </div>
          <div class="form-field">
            Microchip #
            <input type="text" id="microchip" value=${microchip} oninput=${update} />
          </div>
          <div class="form-field">
            Desexed
            <select id="desexed" onchange=${updateSelect}>
              <option disabled selected></option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        <button class="submit" onclick=${submit}>Next</button>
      </section>
    `
  }

  // update new pet state with <select>
  function updateSelect (e) {
    var type = (e.target.id === 'type')
    var id = type ? 'type' : 'desexed'
    var value = (type ? e.target.value : (e.target.value === 'true'))
    
    emit('updateNewPet', {id: id, text: value})
  }

  // update new pet state
  function update (e) {
    var id = e.target.id
    var text = e.target.value

    emit('updateNewPet', {id: id, text: text})
  }

  // submit new pet registration
  function submit () {
    // redirect user to payment screen
    emit('pushState', '/payment')
  }
}
