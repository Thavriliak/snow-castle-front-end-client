const store = require('./store.js')

const signUpSuccess = data => {
  $('.alert').html('')
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is :', data)
  $('#signUpModal').modal('toggle')
  $('.authRequests').html('You\'ve successfully signed up!')
}

const signUpFailure = error => {
  $('.alert').html('')
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  $('.alert').html('')
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
  $('#signUppp').hide()
  $('.authRequests').html('You\'ve successfully signed in!')
}

const signInFailure = error => {
  $('.alert').html('')
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('.alert').html('')
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changePasswordSuccess ran. Data is :', data)
  $('#changePasswordModal').modal('toggle')
  $('.authRequests').html('You\'ve successfully changed your password!')
}

const changePasswordFailure = error => {
  $('.alert').html('')
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  $('.alert').html('')
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
  $('#signUppp').show()
  $('')
}

const signOutFailure = error => {
  $('.alert').html('')
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

const onNewProductSuccess = data => {
  $('.alert').html('')
  $('.addOneP').html('')
  console.log(data)
  $('.addOneP').html('You\'ve successfully added a new product!')
}

const onNewProductFailure = error => {
  $('.alert').html('')
  $('.addOneP').html('')
  $('.addOneP').html('You had an error when creating a new product!')
  console.log(error)
}

const onGetProductSuccess = data => {
  $('.alert').html('')
  console.log('this is my data! ' + data)
  const oneProduct = (`
      <h4>Product: ${data.inventory.product}</h4>
      <p>Product Id: ${data.inventory.id}</p>
      <p>Amount: ${data.inventory.amount}</p>
      <p>Price: ${data.inventory.price}</p>
      <p>Size: ${data.inventory.size}</p>
      <p>Color: ${data.inventory.color}</p>
      <p>Brand Id: ${data.inventory.brand.id}</p>
      <br>
      `)
  $('.getContent').html(oneProduct)
  $('#product-search')[0].reset()
}

const onGetProductFailure = error => {
  $('.alert').html('')
  console.log('this is my error! ' + error)
  $('.getOneP').html('')
  $('.getOneP').html('You\'ve run into an error in getting product!')
}

const onUpdateProductSuccess = data => {
  $('.alert').html('')
  console.log('this is my data! ' + data)
  $('.editOneP').html('')
  $('.editOneP').html('You\'ve successfully updated a product!')
}

const onUpdateProductFailure = error => {
  $('.alert').html('')
  console.log('this is my data! ' + error)
  $('.editOneP').html('')
  $('.editOneP').html('You\'ve run into an error updating inventory!')
}

const onAllProductSuccess = response => {
  $('.alert').html('')
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
    $('.getAllP').html('')
  })
}

const onAllProductFailure = error => {
  $('.alert').html('')
  console.log(error)
  $('.getAllP').html('')
  $('.getAllP').html('You\'ve run into an error viewing inventory!')
}

const onDeleteProductSuccess = data => {
  $('.alert').html('')
  console.log('this is my data! ' + data)
  // makes form field disappear and go back to regular view.
  $('#product-delete')[0].reset()
  $('.deleteOneP').html('')
  $('.deleteOneP').html('You\'ve successfully deleted a product!')
}

const onDeleteProductFailure = error => {
  $('.alert').html('')
  console.log('this is my error! ' + error)
  $('#product-delete')[0].reset()
  $('.deleteOneP').html('')
  $('.deleteOneP').html('You\'ve run into an error deleting a product!')
}

const onNewBrandSuccess = data => {
  $('.alert').html('')
  console.log('this is my data! ' + data)
  $('.newBrand').html('')
  $('.newBrand').html('You\'ve successfully created a new brand!')
}

const onNewBrandFailure = error => {
  $('.alert').html('')
  // console.log('You had an error when creating a new game')
  console.log('this is my error! ' + error)
  $('.newBrand').html('')
  $('.newBrand').html('You\'ve run into an error creating a brand!')
}

const onAllBrandsSuccess = data => {
  $('.alert').html('')
  console.log(data)
  $('.brandContent').html('')
  data.brands.forEach(brands => {
    const brandHTML = (`
      <h4>Brand Name: ${brands.name}</h4>
      <p>Brand Id: ${brands.id}</p>
      <p>Year Established: ${brands.year_created}</p>
      <br>
      `)
    $('.brandContent').append(brandHTML)
    $('.allBrands').html('')
  })
}

const onAllBrandsFailure = error => {
  $('.alert').html('')
  console.log('this is my error! ' + error)
  $('.allBrands').html('')
  $('.allBrands').html('You\'ve successfully deleted a brand!')
}

const onDeleteBrandSuccess = data => {
  $('.alert').html('')
  console.log(data)
  $('.deleteBrand').html('')
  $('.deleteBrand').html('You\'ve successfully deleted a brand!')
}

const onDeleteBrandFailure = error => {
  $('.alert').html('')
  console.log(error)
  $('.deleteBrand').html('')
  $('.deleteBrand').html('You\'ve run into an error deleting a brand!')
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
  onDeleteBrandFailure,
  onGetProductSuccess,
  onGetProductFailure
}
