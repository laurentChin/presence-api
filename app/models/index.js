const mongoose = require("mongoose");
const stripModelFactory = require("./Strip");

mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`);
const db = mongoose.connection;

const Strip = stripModelFactory(mongoose);

module.exports = {
  db,
  Strip
};
