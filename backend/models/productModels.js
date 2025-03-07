const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter the product neame"],
  },

  description: {
    type: String,
    required: [true, "please enter the product description"],
  },

  price: {
    type: Number,
    required: [true, "please enter the pruduct price"],
    maxLength: [8, "price cannot exceed 8 character"],
  },

  rating: {
    type: Number,
    default: 0,
  },

  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  category: {
    type: String,
    required: [true, "please enter the product category"],
  },

  stock: {
    type: Number,
    required: [true, "please enter the product stock"],
    maxLength: [8, "price cannot exceed 8 character"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },

  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: String,
        required: true,
      },

      comment: {
        type: String,
        required: true,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("product", productSchema);
