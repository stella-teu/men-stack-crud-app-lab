import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true},
    author: { type: String, required: true},
    pageCount: { type: Number },
    description: {type: String}
})

const Book = mongoose.model("Book", bookSchema);
export default Book;