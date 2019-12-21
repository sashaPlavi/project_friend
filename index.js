const express = require("express");
const path = require("path");
const rootdir = require("./util/path");
const year = new Date().getFullYear();

const app = express();
const home = require("./routes/home");
const friends = require("./routes/friends");
app.set("view engine", "ejs");
app.use(express.static(path.join(rootdir, "public")));
app.use(home);
app.use(friends);
app.use((req, res, next) => {
  res.status(404).render("404.ejs", { pagetitle: "page not found", year });
});

app.listen(3001);
