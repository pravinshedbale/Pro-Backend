const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

app.get("/api/v1/instagram", (req, res) => {
  const data = {
    username: "pravinshedbale",
    following: 300,
    followers: 500,
    date: new Date().toLocaleString(),
  };
  res.status(200).json(data);
});

app.get("/api/v1/linkedin", (req, res) => {
  const data = {
    username: "pravinshedbale",
    following: 300,
    followers: 4000,
    date: new Date().toLocaleString(),
  };
  res.status(200).json(data);
});

app.get("/api/v1/facebook", (req, res) => {
  const data = {
    username: "pravinshedbale",
    following: 300,
    followers: 1089,
    date: new Date().toLocaleString(),
  };
  res.status(200).json(data);
});

app.get("/api/v1/:param", (req, res) => {
  res.status(200).json({ param: req.params.param });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
