// mocking a database

// sample data
var data = [
  {
    owner: {
      key: '959344',
      firstName: 'Jane',
      lastName: 'Smith',
      address: {
        houseNumber: '123',
        streetName: 'Fake',
        streetNumber: 'Street',
        suburb: 'Capital City',
        postcode: '5000'
      }
    },
    pets: [
      {
        type: 'Cat',
        name: 'Mittens',
        age: '8',
        breed: 'Domestic Short Hair',
        microchip: '100020003456',
        desexed: true
      }, {
        type: 'Dog',
        name: 'Scruffy',
        age: '1',
        breed: 'Labrador',
        microchip: '100020027777',
        desexed: true
      }
    ]
  }
]

exports.lookup = lookup

// mock db lookup
function lookup (key, cb) {
  var obj = null

  // check if input key matches records
  data.forEach(function (record) {
    if (record.owner.key === key) obj = record
  })

  return cb(obj)
}
