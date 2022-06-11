const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const visitorsController = require("./controllers/visitorsController.js");
const visitsController = require("./controllers/visitsController.js");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Sébastien");
});

app.get("/visitors", visitorsController.getAllVisitors);
app.post("/newVisitor", visitorsController.createVisitor);
app.post("/newVisit", visitsController.createVisit);
app.post("/new", visitsController.addingVistors);

app.listen(PORT, () => {
  console.log(`le serveur est lancé sur le port : ${PORT}`);
});

module.exports = app;
