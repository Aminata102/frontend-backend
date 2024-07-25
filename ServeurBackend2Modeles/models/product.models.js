const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"],
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: false
        },
    },
    {
        Timestamp: true,
    }
);

const userSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Please enter product name"],
    },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
      },

    },
    {
      timestamps: true,
    }
  );

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;

const UserModel = mongoose.model("customer", userSchema);
module.exports = UserModel;