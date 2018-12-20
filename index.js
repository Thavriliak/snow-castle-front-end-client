'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'

// allows usage of new JS features
require('babel-polyfill')

// load manifests
// scripts
require('./assets/scripts/app.js')

// styles
require('./assets/styles/index.scss')


$('.adpr').click(function () {
  $('.bullet').hide()
  $('.create').show()
})

$('.open').click(function () {
  $('.bullet').hide()
  $('.opening').show()
})

$('.lkpr').click(function () {
  $('.bullet').hide()
  $('.get').show()
})

$('.dlpr').click(function () {
  $('.bullet').hide()
  $('.delete').show()
})

$('.edpr').click(function () {
  $('.bullet').hide()
  $('.patch').show()
})

$('.alpr').click(function () {
  $('.bullet').hide()
  $('.getAll').show()
})

$('.adbr').click(function () {
  $('.bullet').hide()
  $('.createBrand').show()
})

$('.dlbr').click(function () {
  $('.bullet').hide()
  $('.deleteBrand').show()
})

$('.albr').click(function () {
  $('.bullet').hide()
  $('.getBrands').show()
})
