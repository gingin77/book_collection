const express = require('express')
const mustacheExpress = require('mustache-express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const Book = require("./models/books")
const duplicateError = 11000;

const mongoURL = 'mongodb://localhost:27017/books'
mongoose.connect(mongoURL, {useMongoClient: true})
mongoose.Promise = require('bluebird')

const app = express()
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', './views')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/new/', function (req, res) {
  res.render('new_book_form')
})

app.post('/new/', function(req, res){
  Book.create(req.body)
  .then(function (book) {
    res.redirect('/');
  })
  .catch(function (error) {
    let errorMsg;
    if (error.code === duplicateError) {
      errorMsg = `"${req.body.title}" has already been entered.`
    } else {
      errorMsg = "You have encountered an unknown error."
    }
    res.render('new_recipe', {errorMsg: errorMsg});
  })
})

// app.get('/:id/', function (req, res) {
//   Recipe.findOne({_id: req.params.id}).then(function (recipe) {
//     res.render("recipe", {recipe: recipe});
//   })
// })

app.get('/:title', function (req, res) {
  Book.findOne({_title: req.params.title}).then(function (book) {
      res.render("individual", {book: book})
  })
})

// what I want to do is have a delete button at the bottom of a record that allows user to delete AND/OR have a checkbox on the index page, which allows user to select records to delete.
// app.get('/:title', function(req, res){
//   // Book.findOne().then(function(recipe) {
//   //     req.recipe = recipe;
//
//   Book.deleteOne({_title: req.params.title}, function (book) {
//       req.book = book;
//   })
// })


app.get('/', function(req,res){
  Book.find().then(function(book){
    res.render('index', {book: book})
  })
})

app.listen(3000, function () {
    console.log('Success!!! Your app initiated!!!')
});



// the code below did add a book to the collection
// Book.create({  title: 'The History of Love' }, function (err, awesome_instance) {
//   if (err) return handleError(err);
//   console.log("the book create function ran");
//   // saved!
// });
