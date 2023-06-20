const User = require("../models/User");
var mongoose = require("mongoose");
const passport = require("passport");
const cevapOlustur = function (res, status, content) {
  res.status(status).json(content);
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

const updateUser = async function (req, res) {
  const { userid } = req.params;
  if (!userid) {
    return cevapOlustur(res, 404, { hata: "hata" });
  }
  const { email, password, image, username } = req.body;
  if (!userid || !email || !image || !username) {
    cevapOlustur(res, 400, { durum: "butun alanlari doldur" });
  } else {
    try {
      const user = await User.findById(userid);
      user.username = username;
      user.email = email;
      user.password = password;
      user.image = image;
      try {
        const save = await user.save();
        cevapOlustur(res, 200, save);
      } catch (error) {
        cevapOlustur(res, 400, error.message);
      }
    } catch (error) {
      cevapOlustur(res, 500, error.message);
    }
  }
};

const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => {
      return cevapOlustur(res, 200, users);
    })
    .catch((error) => {
      return cevapOlustur(res, 400, error);
    });
};

passport.serializeUser(function (user, done) {
  console.log("Serialize user called.");
  done(null, user._id);
});

passport.deserializeUser(function (user, done) {
  User.findById(id.toString(), (err, user) => {
    done(err, user);
  });
});

module.exports = {
  getUser,
  updateUser,
  getUsers,
  changePassword,
  loggedInUser,
};
