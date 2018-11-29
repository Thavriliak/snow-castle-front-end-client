const store = require('./store.js')

const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is :', data)
  $('#signUppp').hide()
  $('#signUpModal').modal('toggle')
}

const signUpFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess ran. Data is :', data)
  $('.buttModals').hide()
  $('#signInModal').modal('toggle')
  $('#cgPss').show()
  $('#sgOut').show()
  $('.dadBod').show()
  $('.titleClass').hide()
}

const signInFailure = error => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changePasswordSuccess ran. Data is :', data)
  $('#changePasswordModal').modal('toggle')
}

const changePasswordFailure = error => {
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  $('#message').text('Signed out successfully')
  store.user = null
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess ran. Data is :', data)
  $('.buttModals').show()
  $('#sgOut').hide()
  $('#cgPss').hide()
  $('.dadBod').hide()
  $('.titleClass').show()
}

const signOutFailure = error => {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

const onNewProductSuccess = data => {
  console.log(data)
}

const onNewProductFailure = error => {
  // console.log('You had an error when creating a new game')
  console.log(error)
}

const onUpdateProductSuccess = data => {
  console.log(data)
}

const onUpdateProductFailure = error => {
  console.log(error)
}

const onAllProductSuccess = response => {
  console.log(response)
  $('.content').html('')
  response.inventories.forEach(inventories => {
    const productHTML = (`
      <h4>Product: ${inventories.product}</h4>
      <p>Product Id: ${inventories.id}</p>
      <p>Amount: ${inventories.amount}</p>
      <p>Price: ${inventories.price}</p>
      <p>Size: ${inventories.size}</p>
      <p>Color: ${inventories.color}</p>
      <p>Brand Id: ${inventories.brand.id}</p>
      <br>
      `)
    $('.content').append(productHTML)
  })
}

const onAllProductFailure = error => {
  console.log(error)
}

const onDeleteProductSuccess = data => {
  console.log(data)
}

const onDeleteProductFailure = error => {
  console.log(error)
}

const onNewBrandSuccess = data => {
  console.log(data)
}

const onNewBrandFailure = error => {
  // console.log('You had an error when creating a new game')
  console.log(error)
}

const onAllBrandsSuccess = data => {
  console.log(data)
  $('.content').html('')
  data.brands.forEach(brands => {
    const brandHTML = (`
      <h4>Brand Name: ${brands.name}</h4>
      <p>Brand Id: ${brands.id}</p>
      <p>Year Established: ${brands.year_created}</p>
      <br>
      `)
    $('.brandContent').append(brandHTML)
  })
}

const onAllBrandsFailure = error => {
  console.log(error)
}

const onDeleteBrandSuccess = data => {
  console.log(data)
}

const onDeleteBrandFailure = error => {
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  onNewProductSuccess,
  onNewProductFailure,
  onUpdateProductSuccess,
  onUpdateProductFailure,
  onAllProductSuccess,
  onAllProductFailure,
  onDeleteProductSuccess,
  onDeleteProductFailure,
  onNewBrandSuccess,
  onNewBrandFailure,
  onAllBrandsSuccess,
  onAllBrandsFailure,
  onDeleteBrandSuccess,
  onDeleteBrandFailure
}
