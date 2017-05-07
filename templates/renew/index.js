// import dependencies
var html = require('choo/html')

// import utilities
var api = require('../../lib/api')
var db = require('../../lib/db')

// import templates
var base = require('../base')
var error = require('../error')
var spinner = require('../spinner')

// pet renewal template
module.exports = function (state, emit) {
  var key = state.owner.key
  var loading = state.loading

  return base(renew)

  function renew () {
    return html`
      <section class="ownerKey">
        <h1>Registration Renewal</h1>

        <p>To begin renewal, you must provide us with the "owner key" that was given to you when your pet was first registered. This information should be located in a recent e-mail we sent to you.</p>

        <h2>Your details</h2>

        <div class="form-container">
          <div class="form-field">
            Owner Key
            <input type="text" id="key" value=${key} oninput=${updateKey} />
          </div>
        </div>
        ${loading ? spinner() : html`<button class="submit" onclick=${submit}>Next</button>`}
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
    emit('toggleLoading')

    api(function () {
      var key = state.owner.key
      emit('toggleLoading')

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
    })
  }
}
