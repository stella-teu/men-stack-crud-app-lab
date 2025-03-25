import Book from "../models/books.js";
import { Router } from "express";
//connects to the server.js

const booksRouter = Router();

booksRouter.get("/", (req, res) => {
    res.render("landing.ejs");
})

booksRouter.get("/books/new", (req,res) => {
    res.render("books/new.ejs");
    
})

booksRouter.get("/books", async (req, res) => {
    const books = await Book.find({});
    res.render("books/index.ejs", { books });
})

booksRouter.post("/books", async (req, res) => {
    let { title, author, pageCount, description} = req.body;
    const book = await Book.create({title, author, pageCount, description});

    res.redirect("/books");
})

booksRouter.get("/books/update", (req, res) => {
    res.render("books/update.ejs");
})

booksRouter.delete("/books/:bookId", async (req,res) => {
    await Book.findByIdAndDelete(req.params.bookId);
    res.redirect("/books");
})

booksRouter.get("/books/:bookId/edit", async (req,res) => {
    const foundBook = await Book.findById(req.params.bookId);
    res.render("books/update.ejs", {
        book: foundBook,
    });
})

booksRouter.put("/books/:bookId", async (req, res)=> {
    await Book.findByIdAndUpdate(req.params.bookId, req.body);
    res.redirect("/books");
})

export default booksRouter;