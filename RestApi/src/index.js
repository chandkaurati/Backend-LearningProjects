const express = require("express");
const data = require("./Data/MOCK_DATA.json");
// import usersData from "./Data/MOCK_DATA.json";
const fs = require("fs");
const app = express();
const port = 8000;

//middleWears methods

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("form middleWears");
  next();
});

app.use((req, res, next) => {
  const data = `${req.path} ${req.method}`;
  fs.appendFile("log.txt", `\n ${Date.now()} || ${data}`, (err, data) => {
    next();
  });
});

app.get("/", (req, res) => {
  fs.readFile("Data/MOCK_DATA.json", (err, data) => {});
  res.send(JSON.stringify(data));
});
app.get("/api/users", (req, res) => {
  res.setHeader("x-admin", "Chand Kaurati");
  return res.json(data);
});
app.get("/api/users/:id?", (req, res) => {
  const user = data.find((el) => el.id == req.params.id);
  if (!user) res.send("user Not found");

  res.json(user);
});

app.post("/create-user", (req, res) => {
  const { name, email, gender, job_title } = req.body;
  const isUserexist = data.find(
    (user) => user.email === email || user.first_name === name,
  );
  if (isUserexist) {
    res.send("user Already Exist");
  } else {
    const user = {
      "id ": data.length + 1,
      " first_name": name,
      " email": email,
      gender: gender,
      job_title: job_title,
    };

    data.push(user);
    console.log(JSON.stringify(data));
  }
});

// create create other HTTP Routes

app.listen(port, () => {
  console.log("server started");
});
