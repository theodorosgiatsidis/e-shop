const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const saltRounds = 10;
    const myPlaintextPassword = "s0//P4$$w0rD";

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(myPlaintextPassword, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const myPlaintextPassword = "s0//P4$$w0rD";
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.send(400).json("Wrong Password or Email");
    }

    const validated = await bcrypt.compare(myPlaintextPassword, user.password);
    if (!validated) {
      return res.send(400).json("Wrong Password or Email");
    }

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
