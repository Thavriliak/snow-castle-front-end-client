const config = require('./config.js')
const store = require('./store.js')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
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
  // return $.ajax({
  //   url: config.apiUrl + '/inventory/' + ${inventory.id}
}

module.exports = {
  updateProductFromApi,
  newProductToApi,
  getInventoryFromApi,
  getProductFromApi,
  signUp,
  signIn,
  changePassword,
  signOut
}
