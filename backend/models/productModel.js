const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    productTitle: {
      type: String,
      unique: true,
      require: true,
    },
    productPrice: {
      type: Number,
      require: true,
    },
    productCategory: {
      type: String,
      require: true,
    },
    productDesc: {
      type: String,
      require: true,
    },
    productImage: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
