// lets create a User Model using mongoose

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  number: Number,
  city: String,
  url: String,
});

const userModel = mongoose.model("user", UserSchema);

module.exports = {
  userModel,
};
