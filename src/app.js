const fs = require("fs");
const path = require("path");
const express = require("express");
const { view } = require("ramda");
const res = require("express/lib/response");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.render("index", { title: "Index" }));

app.listen(3000, () => console.log("PS Project run on port 3000"));
