let mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  imageURL: {
    type:String,
    required: true
  },
  title: {
    type: String,
    required: false
  },
  author: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Post', PostSchema)