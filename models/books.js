const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    last: {
      type: String
    },
    first: {
      type: String
    }
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"]
  },
  genre: {
    type: String,
    enum: ["Novel", "Romance", "Comedy", "Suspense/Thriller", "Horror", "Mystery", "Sci-Fi", "Western", "Classic", "Mythology", "Children's Book", "Illustrations or Comic Book"]
  },
  deweyDecimalClassification: {
    type: String,
    enum: ["Essays", "Philosophy", "Religion", "Social sciences", "Language", "Science", "Technology", "Arts/Recreation", "Biography", "History/Geography"]
  },
  whyIKeepIt: {
    type: String,
    required: true
  },

  readStatus: {
    type: String,
    enum: ["have-read-cover-to-cover", "have-skimmed", "have-read-specific-parts-that-can-stand-alone", "in-the-stack-on-my-bedside-table", "plan-to-read-someday"]
  },
  physicalProps: [{
    pages: {
      type: Number
    },
    cover_type: {
      type: String,
      enum: ["hardcover", "paperback", "other"]
    },
    coverAppearance: [{
      color: {
        type: String
      },
      image: {
        type: String
      }
    }]
  }]
})

// Book.methods.getFormData = function() {
//   const fields = [
//     {
//       name: 'title',
//       label: 'Title'
//     },
//       // name: 'author',
//       // label: 'Author'
//       // nested: []
//       //
//     {
//       name: 'author.first',
//       label: 'author.first'
//     },
//     {
//       name: 'author.last',
//       label: 'author.last'
//     }]
// }

const Book = mongoose.model('Book', bookSchema)
// const Book = mongoose.model('books', bookSchema)
// the capitalized word after model, gets pluralized and becomes the collection name

module.exports = Book;



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
