const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    last: {type: String },
    first: { type: String }
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"]
  },
  whyIKeepIt: { type: String, required: true },
  readStatus: {
    type: String,
    enum: ["have read cover-to-cover", "have skimmed", "have started", "plan to read someday", "in the bedside table stack"]
  },
  genre: {type: String },
  physicalProps: [{
    pages: { type: Number },
    cover_type: {
      type: String,
      enum: ["hardcover", "paperback", "other"]
    },
    coverAppearance: [{
        color: { type: String },
        image: { type: String }
      }]
  }],
  // categories for non-fiction
  deweyDecimalSystemInfo: [{
    "subjectClassification": {type: String},
    "number": {type: Number}
  }]
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book



// newBook = db.books.insertOne({
//       "title": "The History of Love",
//       "author": {
//         "last": "Krauss",
//         "first": "Nicole"
//       },
//       "category": "fiction",
//       "whyIKeepIt": "Beautiful story that spans geographies, time, and wars.",
//       "readStatus": "have read cover-to-cover",
//       "physicalProps": [{
//         "pages": 272,
//         "cover_type": "paperback",
//         "coverAppearance": {
//           "color": "blueish-grey",
//           "image": "clouds"
//         }
//       }]
//     })



    // spineWidth: {
    //   type: Number
    // },
    // height: {
    //   type: Number
    // },
