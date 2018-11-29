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
  console.log(data)
  return $.ajax({
    url: config.apiUrl + `/inventories/` + data.inventory.id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newProductToApi = (data) => {
  console.log('data sending to api is', data)
  return $.ajax({
    url: config.apiUrl + `/inventories`,
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getInventoryFromApi = function () {
  // use AJAX to send request
  return $.ajax({
    url: config.apiUrl + '/inventories',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getProductFromApi = function (id) {
  return $.ajax({
    url: config.apiUrl + '/inventories/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteProductFromApi = function (id) {
  return $.ajax({
    url: config.apiUrl + '/inventories/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newBrandToApi = (data) => {
  console.log('data sending to api is', data)
  return $.ajax({
    url: config.apiUrl + `/brands`,
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getBrandsFromApi = function () {
  // use AJAX to send request
  return $.ajax({
    url: config.apiUrl + '/brands',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteBrandFromApi = function (id) {
  return $.ajax({
    url: config.apiUrl + '/inventories/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}


module.exports = {
  updateProductFromApi,
  newProductToApi,
  getInventoryFromApi,
  getProductFromApi,
  signUp,
  signIn,
  changePassword,
  signOut,
  deleteProductFromApi,
  newBrandToApi,
  getBrandsFromApi,
  deleteBrandFromApi
}
