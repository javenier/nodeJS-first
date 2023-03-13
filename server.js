const express = require('express');
require('dotenv').config();
const app = express();

app.use("/", (req, res) => {
    res.send(process.env.TEXT);
    res.end();});
module.exports = app;
