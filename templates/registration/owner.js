// import dependencies
var html = require('choo/html')

// import utilities
var api = require('../../lib/api')

// import templates
var base = require('../base')
var error = require('../error')
var spinner = require('../spinner')

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

  var loading = state.loading
  
  return base(owner)

  function owner () {
    return html`
      <section class="owner">
        <h1>Pet Registration</h1>

        <p>In order to register your new pet, we need to obtain several details about yourself. This way, if your pet ever becomes lost, we know who they belong to so they can be returned safe and sound.</p>

        <h2>Your details</h2>

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
        ${loading ? spinner() : html`<button class="submit" onclick=${submit}>Next</button>`}
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
    // start loading spinner
    emit('toggleLoading')

    api(function () {
      // stop loading spinner
      emit('toggleLoading')
      // street name validation
      if (streetName !== 'Smith') {
        // update error state
        emit('error', 'Address is invalid.')
      } else {
        // reset window position
        window.scrollTo(0, 0)
        // redirect user to new pet registration
        emit('pushState', '/registration/new/pets')
      }
    })
  }
}
