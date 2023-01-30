require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const handle = require("./handlers/index");
const db = require("./models")

const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.json())

app.get("/", (req, res) => res.send("Hello World"));

app.use(handle.notFound); 
app.use(handle.errors);

app.listen(port, console.log("Server started", {port}));
