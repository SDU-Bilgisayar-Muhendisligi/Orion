const User = require("../models/User");
const Music = require("../models/Music");
const Lyrics = require("../models/Lyrics");
var mongoose = require("mongoose");
const Album = require("../models/Album");
const Category = require("../models/Category");

const cevapOlustur = function (res, status, content) {
    res.status(status).json(content);
  };

  const createLyrics = async (req, res, next) => {
    const { songId } = req.params;
    if (!songId)
      return cevapOlustur(res, 400, { hata: "tum alanlar gerekli" });
    try {
      const { lyrics } = req.body;
  
      const music = await Music.findById(songId);
  
      if (!song) {
        return res.status(404).json({ error: "Şarkı sözleri bulunamadı." });
      }
      const newSong = await Music.create({ lyrics });
  
      category.musics.push(newSong);
      await music.save();
  
      res.json({ message: "Şarkı sözleri başarıyla oluşturuldu" });
    } catch (error) {
      console.error("Hata:", error);
      res.status(500).json({ error: error.message });
    }
  };

  const getLyrics = async (req, res) => {
    const { songId } = req.params;
    if (!songId) return cevapOlustur(res, 400, { hata: "tum alanlar gerekli" });
    try {
      const music = await Music.findById(songId).populate("lyrics");
  
      if (!song) {
        return res.status(404).json({ error: "Şarkı sözleri gözlenemiyor" });
      }
      cevapOlustur(res, 200, musics.lyrics);
    } catch (error) {
      console.error("Hata:", error);
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = {
    getLyrics,
    createLyrics,
  };