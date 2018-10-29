const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  first: String,
  last: String,
  googleId: String,
  age: String,
  email: String,
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "users"
    }
  ]
});

const User = mongoose.model("users", userSchema);

module.exports = User;
