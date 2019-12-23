const express = require("express");
const router = express.Router();
const users = require("../util/database");

const year = new Date().getFullYear();

router.get("/sugested/:id", (req, res) => {
  const id = req.params.id;

  res.render("sugested.ejs", {
    users: users.db,
    id,
    pagetitle: "sugested page",
    year
  });
});

module.exports = router;
