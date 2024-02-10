const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors())

app.get("/", (_req, res) => {
    res.send({ message: "Running!" });
})

app.listen("3000", err => {
    console.log(err && err || "Connected to 3000");
});
