import express from "express";
const app = express();
import "./db/connections.js";
import booksRouter from "./controllers/books.js";
import methodOverride from "method-override";
import morgan from "morgan";

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride("_method"));
app.use(morgan("dev"));

app.use("/", booksRouter);

app.listen(3000, ()=> {
    console.log("Listening on port 3000");
})