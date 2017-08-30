const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: [{
      last: { type: String },
      first: { type: String }
    }],
    category: {
      type: String ,
      enum: ["fiction", "non-fiction"]
    },
    mostAwesomeThing: {type: String },
    deweyDecimalClass: { type: String },
    deweyDecimalNumber: { type: Number },
    genre: { type: String},
    physicalProps: [{
      pages: { type: Number },
      cover: {
        type: String,
        enum: ["hardcover", "paperback", "other"]
      },
      spineWidth: { type: Number },
      height: { type: Number },
      coverAppearance: [{
        color: { type: String },
        image: { type: String }
      }]
    }]
})

const Books = mongoose.model('Books', bookSchema);

module.exports = Books;
