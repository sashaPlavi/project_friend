const express = require("express");
const router = express.Router();
const users = require("../util/database");
const year = new Date().getFullYear();

router.get("/friends/:id", (req, res) => {
  const id = req.params.id;
  let user = {};
  const myfriendsid = [];
  const myfriends = [];
  function gimiuser(id) {
    // console.log(users.db);

    for (let i = 0; i < users.db.length; i++) {
      // console.log(users.db[i].id);
      // console.log(id);

      if (users.db[i].id == id) {
        console.log("bla");
        user = users.db[i];
        gimiFriendsid(user);
        return user;
      }
    }
  }
  gimiuser(id);

  //console.log(user);
  function gimiFriendsid(user) {
    for (let i = 0; i < user.friends.length; i++) {
      myfriendsid.push(user.friends[i]);
    }
  }

  //console.log(myfriendsid);

  function gimifrend(fid) {
    for (let i = 0; i < users.db.length; i++) {
      for (let y = 0; y < fid.length; y++) {
        if (users.db[i].id == fid[y]) {
          myfriends.push(users.db[i]);
        }
      }
    }
  }
  gimifrend(myfriendsid);
  console.log(myfriends);

  res.render("friends.ejs", {
    users: users.db,
    user,
    myfriends,
    userId: req.params.id,
    pagetitle: "friends page",
    year
  });
});

module.exports = router;
