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
      <div>
        <div>
          Payment Details
        </div>
        <div>
          <div>
            Card Name
            <input type="text" id="name" value=${name} oninput=${update} />
          </div>
          <div>
            Card Number
            <input type="text" id="number" value=${number} oninput=${update} />
          </div>
          <div>
            CCV
            <input type="text" id="ccv" value=${ccv} oninput=${update} />
          </div>
          <div>
            Expiry Date
            <input type="text" id="exp" value=${exp} oninput=${update} />
          </div>
        </div>
        <button type="submit" onclick=${submit}>
          Submit
        </button>
      </div>
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
