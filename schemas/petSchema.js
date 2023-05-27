const { Schema, SchemaTypes } = require("mongoose");

const petSchema = new Schema(
  {
    name: {
      type: String,
      minLength: 2,
      maxLength: 16,
      default: null,
    },
    birthdate: {
      type: Date,
      default: null,
    },
    breed: {
      type: String,
      minLength: 2,
      maxLength: 16,
      default: null,
    },
    avatar: {
      public_id: { type: String, default: null },
      url: { type: String, default: null },
    },
    comments: {
      type: String,
      minLength: 8,
      maxLength: 120,
      default: null,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
  },

  { versionKey: false }
);


module.exports = petSchema;
