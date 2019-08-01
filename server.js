const express = require("express");
const path = require("path");
const {
    MongoClient
} = require("mongodb");
require("dotenv").config();

const startupController = require("./startup")

MongoClient.connect(process.env.MONGODB_URI, function (err, client) {
    if (err) {
        return console.error(err)
    }

    const db = client.db();
    const app = express();

    app.use("/res", express.static(path.join(__dirname, "res")));
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "views"));

    app.get("/startups/:id", startupController.renderStartup(db))

    const port = process.env.PORT;
    app.listen(port, function () {
        console.log("Server started on port", port);
    });
})