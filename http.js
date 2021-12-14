const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Hello");
});

app.get("/help", (req, res) => {
  res.send("help page");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(3000, () => {
  console.log("Sever is listening on port 3000");
});
