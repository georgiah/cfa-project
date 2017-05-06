module.exports = function (state, emit) {
  // initialise state
  state.owner = {
    firstName: '',
    lastName: '',
    address: {
      unitNumber: '',
      houseNumber: '',
      streetName: '',
      streetType: '',
      suburb: '',
      postcode: '',
      poBox: null
    }
  }
  state.pets = []
  state.payment = {
    card: {
      name: '',
      number: '',
      ccv: '',
      exp: new Date()
    }
  }
}
