// import dependencies
var html = require('choo/html')

// import templates
var base = require('../base')
var db = require('../../lib/db.js')
var error = require('../error')

// pet renewal template
module.exports = function (state, emit) {
  var key = state.owner.key

  return base(renew)

  function renew () {
    return html`
      <section class="ownerKey">
        <h1>Registration Renewal</h1>
        <h3>Tell us who you are</h3>

        <div class="form-container">
          <div class="form-field">
            Owner Key
            <input type="text" id="key" value=${key} oninput=${updateKey} />
          </div>
        </div>
        <button type="submit" onclick=${submit}>
          Submit
        </button>
        ${error(state, emit)}
      </section>
    `
  }

  // update owner key state
  function updateKey (e) {
    var text = e.target.value

    emit('updateKey', text)
  }

  // submit owner key
  function submit (e) {
    var key = state.owner.key
    
    // validate owner key
    db.lookup(key, function (record) {
      if (record === null) {
        // update error state
        emit('error', 'Owner Key is invalid')
      } else {
        // load owner's record into state and redirect to pet confirmation
        emit('loadRecord', record)
        emit('pushState', '/registration/renew/confirm')
      }
    })
  }
}
