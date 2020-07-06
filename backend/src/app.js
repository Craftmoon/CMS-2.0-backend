const express = require("express"),
  logger = require("./middleware/logger"),
  db = require("./models"),
  apiRoutes = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 5000;

// Init middleware
//app.use(logger);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, (err) => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
    console.log(`Server started on port ${PORT}`);
  });
});
