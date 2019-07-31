const express = require("express");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, "res")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const port = process.env.PORT;
app.listen(port, function() {
  console.log("Server started on port", port);
});
