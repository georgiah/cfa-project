// import dependencies
var html = require('choo/html')

// import templates
var base = require('../base')
var error = require('../error')

// owner registration template
module.exports = function (state, emit) {
  var firstName = state.owner.firstName
  var lastName = state.owner.lastName

  var unitNumber = state.owner.address.unitNumber
  var houseNumber = state.owner.address.houseNumber
  var streetName = state.owner.address.streetName
  var streetType = state.owner.address.streetType
  var suburb = state.owner.address.suburb
  var postcode = state.owner.address.postcode

  return base(owner)

  function owner () {
    return html`
      <section class="owner">
        <h1>Pet Registration</h1>
        <h3>Tell us who you are</h3>

        <div class="form-container">
          <div class="form-field">
            First Name
            <input type="text" id="firstName" value=${firstName} oninput=${updateName} />
          </div>
          <div class="form-field">
            Last Name
            <input type="text" id="lastName" value=${lastName} oninput=${updateName} />
          </div>
          <div class="form-field">
            Unit Number
            <input type="text" id="unitNumber" value=${unitNumber} oninput=${updateAddress} />
          </div>
          <div class="form-field">
            House Number
            <input type="text" id="houseNumber" value=${houseNumber} oninput=${updateAddress} />
          </div>
          <div class="form-field">
            Street Name
            <input type="text" id="streetName" value=${streetName} oninput=${updateAddress} />
          </div>
          <div class="form-field">
            Street Type
            <input type="text" id="streetType" value=${streetType} oninput=${updateAddress} />
          </div>
          <div class="form-field">
            Suburb
            <input type="text" id="suburb" value=${suburb} oninput=${updateAddress} />
          </div>
          <div class="form-field">
            Postcode
            <input type="text" id="postcode" value=${postcode} oninput=${updateAddress} />
          </div>
        </div>
        <button type="submit" onclick=${submit}>
          Submit
        </button>
        ${error(state, emit)}
      </section>
    `
  }

  // update owner name state
  function updateName (e) {
    var id = e.target.id
    var text = e.target.value

    emit('updateName', {id: id, text: text})
  }

  // update owner address state
  function updateAddress (e) {
    var id = e.target.id
    var text = e.target.value

    emit('updateAddress', {id: id, text: text})
  }

  // submit owner registration
  function submit (e) {
    var streetName = state.owner.address.streetName

    // street name validation
    if (streetName !== 'Abbotsford') {
      // update error state
      emit('error', 'Address is invalid')
    } else {
      // redirect user to new pet registration
      emit('pushState', '/registration/new/pets')
    }
  }
}
