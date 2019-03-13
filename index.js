const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.listen(9090, () => {
  console.log("Server listen on port 9090");
});
