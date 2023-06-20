const User = require("../models/User");
const Music = require("../models/Music");
var mongoose = require("mongoose");
const Album = require("../models/Album");
const Category = require("../models/Category");

const cevapOlustur = function (res, status, content) {
  res.status(status).json(content);
};

const getSongsByCreatedAt = async (req, res) => {
  try {
    const songs = await Music.find().sort({ createdAt: -1 });

    return cevapOlustur(res, 200, songs);
  } catch (error) {
    console.error("Hata:", error);
    res.status(500).json({ error: "Bir hata oluştu." });
  }
};
module.exports = {
  createMusic,
  getSongsByCreatedAt,
  LikeSong,
  unLikeSong,
  getLikedSongs,
  searchSongs,
};
