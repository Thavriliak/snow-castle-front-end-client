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

const onNewProduct = event => {
  api.newProductToApi()
    .then(ui.onNewProductSuccess)
    .catch(ui.onNewProductFailure)
}

const onEditInventory = event => {
  // const index = $(event.target).attr('class').replace('cell id', '')
  // const value = player
  // const over = didIWin()
  // const data = {
  //   game: {
  //     cell: {
  //       index,
  //       value
  //     },
  //     over
  //   }
  //   // data.game.cell.push(player)
  // }
  api.updateProductFromApi(data)
    .then(ui.onUpdateProductSuccess)
    .catch(ui.onUpdateProductFailure)
}

const onGetOneProduct = event => {
  api.getProductFromApi()
    .then(ui.onGetProductSuccess)
    .after(ui.onGetProductFailure)
}

const onAllProducts = event => {
  event.preventDefault()
  api.getAllProductsFromApi()
    .then(ui.onAllProductSuccess)
    .catch(ui.onAllProductFailure)
}

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onChangePassword,
  onAllProducts,
  onEditInventory,
  onNewProduct,
  onGetOneProduct
}
