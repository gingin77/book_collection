const express = require('express')
const mustacheExpress = require('mustache-express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const Book = require("./models/books")

const mongoURL = 'mongodb://localhost:27017/books'
mongoose.connect(mongoURL, {useMongoClient: true})
mongoose.Promise = require('bluebird')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.engine('mustache', mustacheExpress())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')

app.use('/static', express.static('static'))

// app.post('/', function(req, res){
//
// })

// Create an instance of model SomeModel

// var new_instance = new Book({ title: 'The History of Love' });
//
// // Save the new model instance, passing a callback
// awesome_instance.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// })


Book.create({  title: 'The History of Love' }, function (err, awesome_instance) {
  if (err) return handleError(err);
  console.log("the book create function ran");
  // saved!
});

app.get('/:id/', function (req, res) {
  Recipe.findOne({_id: req.params.id}).then(function (book) {
    res.send({Book});
  })
})

app.get('/', function(req,res){
  Book.find().then(function(book){
    res.render('index', {book: book})
  })
})

app.listen(3000, function () {
    console.log('Success!!! Your app initiated!!!')
});
