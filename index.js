const express = require("express");
const paht = require("path");

const app = express();
app.use((req, res, next) => {
  res.sendFile(paht.join(__dirname, "view", "404.html"));
});

app.listen(3001);
