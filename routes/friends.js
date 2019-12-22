const express = require("express");
const router = express.Router();
const users = require("../util/database");
const year = new Date().getFullYear();

router.get("/friends/:id", (req, res) => {
  const id = req.params.id;
  let user = {};
  const myfriendsid = [];
  const myfriends = [];
  const fofid = [];
  const friendoffr = [];
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
  // console.log(myfriends);
  gimifofid(myfriends);
  function gimifofid(myfriends) {
    for (let i = 0; i < myfriends.length; i++) {
      for (let y = 0; y < myfriends[i].friends.length; y++) {
        fofid.push(myfriends[i].friends[y]);
      }
    }
  }
  //console.log(fofid);
  const filterid = Array.from(new Set(fofid));
  console.log(filterid);
  gimifrendoffrend(filterid);
  function gimifrendoffrend(id) {
    for (let i = 0; i < users.db.length; i++) {
      //console.log(users.db);
      for (let y = 0; y < id.length; y++) {
        if (users.db[i].id == id[y]) {
          friendoffr.push(users.db[i]);
        }
      }
    }
  }
  console.log("fri" + friendoffr);

  res.render("friends.ejs", {
    users: users.db,
    user,
    myfriends,
    friendoffr,
    userId: req.params.id,
    pagetitle: "friends page",
    year
  });
});

exports.router = router;
