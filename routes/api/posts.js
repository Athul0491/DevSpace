const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    const newPost = new Post({
      name: req.body.name,
      text: req.body.text,
      avatar: req.body.avatar,
      user: req.body.id,
    });
    newPost.save().then((post) => res.json(post));
  }
);
module.exports = router;
