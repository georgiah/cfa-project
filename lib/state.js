module.exports = function (state, emitter) {
  // initialise state
  initialiseState()

  function initialiseState () {
    state.owner = {
      key: '',
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

    state.newPet = {
      type: '',
      name: '',
      age: '',
      breed: '',
      microchip: '',
      desexed: true
    }

    state.payment = {
      card: {
        name: '',
        number: '',
        ccv: '',
        exp: ''
      }
    }

    state.error = {
      bool: false,
      text: ''
    }

    state.loading = false
  }

  // declare bus handlers
  emitter.on('updateName', function (data) {
    var prop = data.id
    var value = data.text

    state.owner[prop] = value
  })

  emitter.on('updateAddress', function (data) {
    var prop = data.id
    var value = data.text

    state.owner.address[prop] = value
  })

  emitter.on('updateNewPet', function (data) {
    var prop = data.id
    var value = data.text

    state.newPet[prop] = value
  })

  emitter.on('updateKey', function (data) {
    var value = data

    state.owner.key = data
  })

  emitter.on('loadRecord', function (data) {
    state.owner = data.owner
    state.pets = data.pets
  })

  emitter.on('updatePayment', function (data) {
    var prop = data.id
    var value = data.text

    state.payment.card[prop] = value
  })

  emitter.on('error', function (data) {
    state.error = {bool: true, text: data}
    emitter.emit('render')
  })

  emitter.on('errorClear', function () {
    state.error = {bool: false, text: ''}
    emitter.emit('render')
  })

  emitter.on('clearState', function () {
    initialiseState()
  })

  emitter.on('toggleLoading', function () {
    state.loading = !state.loading
    emitter.emit('render')
  })
}
