const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClotheSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },

    picture: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Clothe", ClotheSchema);
