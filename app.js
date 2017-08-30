Using your schema, build an Express app that lets you view your collection, add to your collection, edit items in your collection, and delete items from your collection.

When dealing with arrays, think about how you might make this user interface work. If it makes sense, write some client-side JavaScript to help add new items to your array on your create and update item pages. You can make your JavaScript available with express.static.

To deal with nested data in forms, consult the docs for the extended option in body-parser and the qs library that body-parser uses.

const express = require('express');
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Books = require("./models/books");

const mongoURL = 'mongodb://localhost:27017/books';
mongoose.connect(mongoURL, {useMongoClient: true});
mongoose.Promise = require('bluebird');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache')

app.use('/static', express.static('static'));




app.listen(3000, function () {
    console.log('Express running on http://localhost:3000/.')
});
