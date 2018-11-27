'use strict'

const events = require('./events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sgOut').on('click', events.onSignOut)
  $('#insertProduct').on('click', events.onNewProduct)
  $('#searchProducts').on('click', events.onGetOneProduct)
  $('#editProduct').on('click', events.onEditInventory)
  $('#getAllProducts').on('click', events.onAllProducts)
})
