const mongoose = require("mongoose");

const lyricsSchema = new mongoose.Schema({
  lyrics: { type: String, required: true },
});

const Lyrics = mongoose.model("Lyrics", lyricsSchema);

module.exports = Lyrics;