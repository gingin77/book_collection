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

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', './views')

// app.use('/public', express.static('public'))
app.use(express.static(__dirname + '/public'))



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
    res.render('index', {errorMsg: errorMsg});
  })
})


app.get('/:id', function (req, res) {
  Book.findOne({_id: req.params.id}).then(function (book) {
    res.render('individual', {book: book})
  })
})


app.post('/:id/delete', function(req,res){
  Book.findOneAndRemove({_id:req.params.id}).then(function(book){
    res.redirect('/');
  })
});
// app.post('/:id/delete', function (req, res) {
//   console.log(req.params.id)
//   Book.findByIdAndRemove(req.params.id, (err, book) => {
//       // We'll create a simple object to send back with a message and the id of the document that was removed
//       // You can really do this however you want, though.
//       let response = {
//           message: "Book successfully deleted",
//           id: book._id
//       }
//       res.status(200).send(response)
//   });
//   // Book.findOneAndRemove({_id: req.params.id}).then(function (book) {
//   //   res.redirect('/')
//   // })
// })




app.get('/', function(req,res){
  Book.find().then(function(book){
    console.log(book);
    res.render('index', {book: book})
  })
})

// what I want to do is have a delete button at the bottom of a record that allows user to delete AND/OR have a checkbox on the index page, which allows user to select records to delete.





app.listen(3000, function () {
    console.log('Success!!! Your app initiated!!!')
});



// the code below did add a book to the collection
// Book.create({  title: 'The History of Love' }, function (err, awesome_instance) {
//   if (err) return handleError(err);
//   console.log("the book create function ran");
//   // saved!
// });
