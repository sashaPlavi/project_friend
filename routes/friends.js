const express = require("express");
const router = express.Router();
const users = require("../util/database");
const year = new Date().getFullYear();

router.get("/friends", (req, res) => {
  console.log("fri");

  res.render("friends.ejs", { users, pagetitle: "friends page", year });
});

module.exports = router;
