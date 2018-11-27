const store = require('./store.js')
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')
const config = require('./config.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const updateProductFromApi = data => {
  return $.ajax({
    url: config.apiUrl + `/inventory`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const newProductToApi = () => {
  return $.ajax({
    url: config.apiUrl + `/inventory`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const getInventoryFromApi = function () {
  // use AJAX to send request
  return $.ajax({
    url: config.apiUrl + '/inventory',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getProductFromApi = function () {

}

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onChangePassword,
  updateProductFromApi,
  newProductToApi,
  getInventoryFromApi,
  getProductFromApi
}
