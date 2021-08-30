import { Router } from "express";
const router = Router();
import { url } from "gravatar";
import { genSalt, hash as _hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { secretOrKey } from "../../config/keys";
import { authenticate } from "passport";

// Load User model
import User, { findOne } from "../../models/User";

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "users works" }));

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post("/register", (req, res) => {
  findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists!" });
    } else {
      const avatar = url(req.body.email, {
        s: "200", // size
        r: "pg", // rating
        d: "mm", // Default
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password,
      });

      genSalt(10, (err, salt) => {
        _hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route   GET api/users/login
// @desc    login User / returning JWT token
// @access  Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  //find user by email
  findOne({ email }).then((user) => {
    // check for user
    if (!user) {
      return res.status(404).json({ email: "User not found" });
    } else {
      // check password
      compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          // user matched
          const payload = { id: user.id, name: user.name, avatar: user.avatar };
          // sign token

          sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          });
        } else {
          return res.status(404).json({ password: "Incorrect password" });
        }
      });
    }
  });
});

// @route   GET api/users/current
// @desc    return current user
// @access  Private
router.get("/current", authenticate("jwt", { session: false }), (req, res) => {
  res.json({ id: req.user.id, name: req.user.name, email: req.user.email });
});

export default router;
