const express = require("express");
const router = express.Router();
const users = require("../util/database");
const year = new Date().getFullYear();

router.get("/home", (req, res) => {
  console.log("home" + users.db[0].firstName);

  res.render("home.ejs", { users, pagetitle: "home page", year });
});

module.exports = router;
