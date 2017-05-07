module.exports = function (func) {
  setTimeout(function () {
    func()
  }, 1000)
}
