const express = require("express");
const data = require("./Data/MOCK_DATA.json");
// import usersData from "./Data/MOCK_DATA.json";
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("welcome rest api ");
});
app.get("/api/users", (req, res) => {
  res.json(data);
});
app.get("/api/users/:id?", (req, res) => {
  const user = data.find((el) => el.id == req.params.id);
  if (!user) res.send("user Not found");

  res.json(user);
});

app.listen(port, () => {
  console.log("server started");
});
