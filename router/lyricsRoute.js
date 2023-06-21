var express = require("express");
var router = express.Router();
const auth = require("../config/Auth");
var lyricsController = require("../controller/LyricsController");

router
  .post("/musics/:songId", lyricsController.createLyrics)
  .get("//musics/:songId", lyricsController.getLyrics)

module.exports = router;