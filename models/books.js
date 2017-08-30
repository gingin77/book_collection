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
    readStatus: {
      type: String ,
      enum: ["have read cover-to-cover", "have skimmed", "have started", "plan to read someday", "in the bedside table stack"]
    },
    genre: { type: String},
    subject: {type: String},
    physicalProps: [{
      // pages: { type: Number },
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

const Book = mongoose.model('Book', bookSchema);

module.exports = Book
