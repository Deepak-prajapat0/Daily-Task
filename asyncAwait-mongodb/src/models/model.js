const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    age: { type: Number, trim: true },
    graduationIn: { type: String, trim: true },
    skills: [{ type: String, trim: true }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
