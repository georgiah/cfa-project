// import dependencies
var html = require('choo/html')

// import utilities
var api = require('../../lib/api')

// import templates
var base = require('../base')
var error = require('../error')
var spinner = require('../spinner')

// payment template
module.exports = function (state, emit) {
  return base(payment)

  function payment () {
    var name = state.payment.card.name
    var number = state.payment.card.number
    var ccv = state.payment.card.ccv
    var exp = state.payment.card.exp

    var loading = state.loading

    return html`
      <section class="payment">
        <h1>Make a payment</h1>
        <h2>Payment details</h2>
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
        <h2>Cost breakdown</h2>
        ${breakdown()}
        ${totalCost()}
        ${loading ? spinner() : html`<button class="submit" onclick=${submit}>Pay & Submit</button>`}
        ${error(state, emit)}
      </section>
    `
  }

  // display payment breakdown
  function breakdown () {
    var pets

    if (state.newPet.type !== '') state.pets = [state.newPet]

    pets = state.pets

    return pets.map(function (pet) {
      var cost = petCost(pet)

      return html`
        <div class="breakdown">
          <p>${pet.type} registration: $${cost.baseCost}</p>
          ${cost.discountType ? html`<p>${cost.discountType} discount: -$${cost.discount}</p>` : null}
        </div>
      `
    })
  }

  // display total cost
  function totalCost () {
    var pets = state.pets
    var total = 0

    return pets.map(function (pet, i, arr) {
      var cost = petCost(pet)

      total += cost.total

      if (i === (arr.length - 1)) {
        return html`
          <h4>Total: $${total}</h4>
      `
      }
    })
  }

  // calculate cost per pet
  function petCost (pet) {
    var cost = {
      baseCost: 0,
      discount: 0,
      discountType: '',
      total: 0
    }

    if (pet.type === 'Cat') cost.baseCost = 96
    if (pet.type === 'Dog') cost.baseCost = 150

    if (pet.desexed) cost.discountType = 'Desexed'
    if (pet.age > 10) cost.discountType = 'Senior'

    if (cost.discountType !== '') cost.discount = (2 * cost.baseCost / 3)

    cost.total = cost.baseCost - cost.discount

    return cost
  }

  // update payment details state
  function update (e) {
    var id = e.target.id
    var text = e.target.value

    emit('updatePayment', {id: id, text: text})
  }

  // submit payment
  function submit () {
    emit('toggleLoading')

    api(function () {
      emit('toggleLoading')
      
      var number = state.payment.card.number
      var ccv = state.payment.card.ccv

      // simple validation
      if ((number.length !== 16) || (ccv.length !== 3)) {
        // update error state
        emit('error', 'There has been a problem processing your payment.')
      } else {
        // redirect user to payment success screen
        emit('clearState')
        emit('pushState', '/payment/success')
      }
    })
  }
}
