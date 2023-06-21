const Album = require("../models/Album");
const User = require("../models/User");
var mongoose = require("mongoose");

const cevapOlustur = function (res, status, content) {
  res.status(status).json(content);
};

const getUserAlbums = async (req, res) => {
  const { userId } = req.params;
  if (!userId)
    return cevapOlustur(res, 400, { hata: "Kullanici ID gereklidir." });

  try {
    const user = await User.findById(userId).populate("albums");

    if (!user)
      return cevapOlustur(res, 401, { error: "Kullanici bulunamadi." });

    return cevapOlustur(res, 200, user.albums);
  } catch (error) {
    console.error("Hata:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUserAlbums,
};
