const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: {type: String, unique: true},
    name: String,
    age: Number,
    favoriteMovies: [{ type: String }],
}, { timestamps: true });

//error code 11000
module.exports = mongoose.model("user", userSchema);