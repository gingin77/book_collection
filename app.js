const fs = require('fs')
const path = require('path')
const express = require('express')
const mustacheExpress = require('mustache-express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const Book = require('./models/books')
const duplicateError = 11000

const mongoURL = 'mongodb://localhost:27017/books'
mongoose.connect(mongoURL, {useMongoClient: true})
mongoose.Promise = require('bluebird')

const app = express()
app.engine('mustache', mustacheExpress())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')

app.use('/public', express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.urlencoded({ extended: false }));

// Beginning of routes
app.get('/new/', function (req, res) {
  res.render('new_book_form')
})

app.post('/new/', function (req, res) {
  Book.create(req.body)
  .then(function (book) {
    res.redirect('/')
  })
  .catch(function (error) {
    let errorMsg
    if (error.code === duplicateError) {
      errorMsg = `"${req.body.title}" has already been entered.`
    } else {
      errorMsg = 'You have encountered an unknown error.'
    }
    res.render('index', {errorMsg: errorMsg})
  })
})

app.get('/:id/', function (req, res) {
  console.log(req.params.id);
  Book.findOne({_id: req.params.id}).then(function (book) {
    res.render('individual', {book: book})
  })
})

app.post('/:id/delete', function (req, res) {
  Book.findOneAndRemove({_id: req.params.id}).then(function (book) {
    res.redirect('/')
  })
})

app.get('/:id/edit', function (req, res) {
  Book.findOne({_id: req.params.id}).then(function (book) {
    res.render('edit_book', {book: book})
  })
})

app.post('/:id/edit', function (req, res) {
  const updatedbook = {
    title: req.body.title,
    author: {first: req.body.first,
      last: req.body.last},
    category: req.body.category,
    whyIKeepIt: req.body.whyIKeepIt,
    readStatus: req.body.readStatus
  }
  console.log (updatedbook)

  Book.updateOne({ _id: req.params.id }, updatedbook)
    .then(function () {
      res.redirect(`/${req.params.id}/`)
    })
})

app.get('/', function (req, res) {
  Book.find().then(function (book) {
    // console.log(book);
    res.render('index', {book: book})
  })
})

app.listen(3000, function () {
  console.log('Success!!! Your app initiated!!!')
})
