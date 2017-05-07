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

  // render payment breakdown
  function breakdown () {
    // if registering new animal, add "new pet" to pet state
    var pets
    if (state.newPet.type !== '') state.pets = [state.newPet]
    pets = state.pets

    // render each pet
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

    // sum cost of each pet & render total
    return pets.map(function (pet, i, arr) {
      var cost = petCost(pet)
      total += cost.total

      // render "total amount" markup on last iteration
      if (i === (arr.length - 1)) {
        return html`<h4>Total: $${total}</h4> `
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

    // setting a base cost
    if (pet.type.toLowerCase() === 'cat') cost.baseCost = 96
    if (pet.type.toLowerCase() === 'dog') cost.baseCost = 150

    // checking if any discounts should be applied
    if (pet.desexed) cost.discountType = 'Desexed'
    if (pet.age > 10) cost.discountType = 'Senior'

    // applying discounts if applicable
    var discount = (cost.discountType !== '')
    if (discount) cost.discount = (2 * cost.baseCost / 3)

    // updating total cost
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
    // start loading spinner
    emit('toggleLoading')

    api(function () {
      emit('toggleLoading')

      var number = state.payment.card.number
      var ccv = state.payment.card.ccv

      // if mock validation fails
      if ((number.length !== 16) || (ccv.length !== 3)) {
        // update error state
        emit('error', 'There has been a problem processing your payment.')
      } else {
        // otherwise, redirect user to payment success screen
        emit('clearState')
        emit('pushState', '/payment/success')
      }
    })
  }
}
