import express from "express";
const app = express();
import "dotenv/config";
import "./db/connections.js";

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Homepage");
})

app.listen(3000, ()=> {
    console.log("Listening on port 3000");
})