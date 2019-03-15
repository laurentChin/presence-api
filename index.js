require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const { Strip } = require("./app/models");

const app = express();
app.use(bodyParser.json());

app.post("/data", async (request, response) => {
  const { strips } = request.body;
  try {
    await Strip.insertMany(strips);
    response.status(204).end();
  } catch (e) {
    response.status(500).send(e);
  }
});

app.listen(9090, () => {
  console.log("Server listen on port 9090");
});
