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
        <h3>Tell us about your animal</h3>

        <div class="form-container">
          <div class="form-field">
            Animal Type
            <input type="text" id="type" value=${type} oninput=${update} />
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
            <input type="text" id="desexed" value=${desexed} oninput=${update} />
          </div>
        </div>
        <button type="submit" onclick=${submit}>
          Submit
        </button>
      </section>
    `
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
