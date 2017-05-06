// import dependencies
var html = require('choo/html')

// import templates
var base = require('../base')

// payment template
module.exports = function (state, emit) {
  return base(payment)

  function payment () {
    var name = state.payment.card.name
    var number = state.payment.card.number
    var ccv = state.payment.card.ccv
    var exp = state.payment.card.exp

    return html`
      <section class="payment">
        <h1>Pet Registration</h1>
        <h3>Make your payment</h3>
        <div class="form-container">
          <div class="form-field">
            Card Name
            <input type="text" id="name" value=${name} oninput=${update} />
          </div>
          <div class="form-field">
            Card Number
            <input type="text" id="number" value=${number} oninput=${update} />
          </div>
          <div class="form-field">
            CCV
            <input type="text" id="ccv" value=${ccv} oninput=${update} />
          </div>
          <div class="form-field">
            Expiry Date
            <input type="text" id="exp" value=${exp} oninput=${update} />
          </div>
        </div>
        <button type="submit" onclick=${submit}>
          Submit
        </button>
      </section>
    `
  }

  // update payment details state
  function update (e) {
    var id = e.target.id
    var text = e.target.value

    emit('updatePayment', {id: id, text: text})
  }

  // submit payment
  function submit () {
    // redirect user to payment success screen
    emit('pushState', '/payment/success')
  }
}
