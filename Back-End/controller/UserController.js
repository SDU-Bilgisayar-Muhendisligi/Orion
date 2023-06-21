const User = require("../models/User");
var mongoose = require("mongoose");
const passport = require("passport");

const cevapOlustur = function (res, status, content) {
  res.status(status).json(content);
};

const kayitOl = async function (req, res) {
  const { email, username, password } = req.body;
  if (!username || !email) {
    return cevapOlustur(req, 400, { hata: "Bütün alanlar gereklidir" });
  }
  try {
    const userDb = await User.findOne({ email: email });
    if (userDb) {
      return cevapOlustur(res, 400, { hata: "Bu email kullanılıyor" });
    }

    const user = await User.create({
      email: email,
      password: password,
      username: username,
    });
    cevapOlustur(res, 201, user);
  } catch (error) {
    cevapOlustur(res, 400, { hata: error.message });
  }
};

const loggedInUser = (req, res) => {
  if (!req.session.user)
    return cevapOlustur(res, 401, { error: "Oturum bulunamadi." });

  return cevapOlustur(res, 200, { user: req.session.user });
};

const girisYap = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ mesaj: "Tüm alanlar gerekli." });
  }
  passport.authenticate("local", (err, user, info) => {
    let token;
    if (err) {
      return res.status(404).json(err.message);
    }
    if (user) {
      req.session.user = user;
      token = user.tokenUret();
      res.status(200).json({ token });
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
};

const getUser = async function (req, res) {
  const userid = req.params.userid;
  try {
    const user = await User.findById(userid);
    if (user) {
      cevapOlustur(res, 200, user);
    } else {
      cevapOlustur(res, 404, { hata: "user bulunamadi" });
    }
  } catch (error) {
    cevapOlustur(res, 404, error);
  }
};

module.exports = {
  kayitOl,
  getUser,
  girisYap,
  loggedInUser,
};
