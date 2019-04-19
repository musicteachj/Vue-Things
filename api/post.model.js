const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Post = new Schema({
  barcodeValue: {
    type: String
  }
},{
    collection: 'posts'
});

module.exports = mongoose.model('Post', Post);