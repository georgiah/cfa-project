// mocking an API request
module.exports = function (func) {
  setTimeout(function () {
    func()
  }, 1000)
}
