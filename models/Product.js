const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  availableSizes: {
    type: Array,
    required: true,
  },
  category: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('Products', ProductSchema);
