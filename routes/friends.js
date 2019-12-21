const express = require("express");
const router = express.Router();
const users = require("../util/database");
const year = new Date().getFullYear();

router.get("/friends", (req, res) => {
  console.log("fri");

  //const parusers = JSON.parse(db);

  res.render("friends.ejs", {
    users: users.db,
    pagetitle: "friends page",
    year
  });
});

module.exports = router;
