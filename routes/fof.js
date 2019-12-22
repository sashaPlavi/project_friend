const express = require("express");
const router = express.Router();
const users = require("../util/database");
const fofid = require("./friends");
const year = new Date().getFullYear();

router.get("/friendoffriends", (req, res) => {
  const fofforfilter = fofid;

  console.log(fofforfilter);

  res.render("froffr.ejs", {
    users: users.db,
    pagetitle: "friend of friends page",
    year
  });
});

module.exports = router;
