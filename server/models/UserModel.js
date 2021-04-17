const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;

const User = mongoose.model("User", {
  id: { type: ObjectId, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created: { type: Date, required: true },
  verified: { type: Boolean, required: true }
});

const lizzie = new User({
  firstName: "Lizzie",
  lastName: "Bennett",
  email: "lb@email.com",
  password: "qwerty",
  created: Date.now(),
  verified: True
});

lizzie.save().then(console.log("lizzie has been saved"));

module.export = mongoose.model("User", User);

// ^^The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name.
