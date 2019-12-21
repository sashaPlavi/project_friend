const express = require("express");
const router = express.Router();
const users = require("../util/database");
const year = new Date().getFullYear();

router.get("/home", (req, res) => {
  res.render("home.ejs", {
    users: users.db,
    pagetitle: "friends page",
    year
  });
});

module.exports = router;
