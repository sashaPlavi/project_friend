const express = require("express");
const router = express.Router();
const users = require("../util/database");
const year = new Date().getFullYear();

/*router.get("/friends:id", (req, res) => {
  res.render("friends.ejs", {
    users: users.db,
    pagetitle: "friends page",
    year
  });
});
*/
module.exports = router;
