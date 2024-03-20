const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config();

const userJson = [
  {
    name: "jagdish",
    age: 29,
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/jagdish", (req, res) => {
  res.send("hello jagdish");
});

app.get("/user", (req, res) => {
  res.json(userJson);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
