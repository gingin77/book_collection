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

// UPDATE PET PROFILE
app.get('/:id/update/', function (req, res) {
  Pet.findOne({_id: req.params.id}).then(function (pet) {
    res.render("update_pet_profile", {pet: pet});
  })
});

app.post('/:id/update/', function (req, res) {
  console.log(req.body);
  Pet.findOneAndUpdate({_id: req.params.id}, req.body).then(function (pet) {
    console.log(req.body);
    // pet.body.push(req.body);
    // pet.save().then(function () {
        res.redirect("/");
  })
})

app.get('/:id/edit', function (req, res) {
  Book.findOne({_id: req.params.id}).then(function (book) {
    // addIndexToIngredients(recipe);
    res.render('edit_book', {book: book})
  })
    // const book = req.book
    // console.log(JSON.stringify(book.getFormData()));

    // , {
    //     book: book,
    //     // fields: book.getFormData(),
    //     // nextIngIndex: recipe.ingredients.length
    // });
})

app.post("/:id/edit", function(req, res) {
    const book = req.book;
    book.name = req.body.title;
    book.authorLast = req.body.author.last;
    book.authorFirst = req.body.author.first;
    book.category = req.body.category;
    book.whyIKeepIt = req.body.whyIKeepIt;
    book.readStatus = req.body.readStatus;

    book.save();
        res.redirect(`/${_id}/`);

    // const ingredients = (req.body.ingredients || []).filter(function(ingredient) {
    //     return (ingredient.amount || ingredient.measure || ingredient.ingredient)
    // });

    // book.author = ingredients;
    //
    // const error = recipe.validateSync();
    //
    // if (error) {
    //     addIndexToIngredients(book);
    //     console.log(error.errors);
    //     res.render("edit_book", {
    //         book: book,
    //         fields: book.getFormData(),
    //         nextIngIndex: book.ingredients.length,
    //         errors: error.errors
    //     });
    // } else {
    //     book.save();
    //     res.redirect(`/${book._id}/`);
    // }
})



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
