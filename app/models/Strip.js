const modelFactory = mongoose => {
  return mongoose.model(
    "Strip",
    new mongoose.Schema({
      position: String,
      value: Number,
      createdAt: { type: Date, default: Date.now }
    })
  );
};

module.exports = modelFactory;
