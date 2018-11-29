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
  $('#afterSignIn').show()
  $('.newGame').show()
  $('.pastGames').show()
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
  $('#afterSignIn').hide()
  $('.container').hide()
  $('.newGame').hide()
  $('.playAgain').hide()
  $('.pastGames').hide()
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

const onAllProductSuccess = data => {
  console.log(data)
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
