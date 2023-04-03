import BookModel from '../models/BooksModel.js'
import mongoose from 'mongoose';

//Get a specific Book
export const getBook = async (req, res) => {
    const id = req.params.id;

    try {
        const book = await BookModel.findById(id);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json(error);
    }
};

//Get Books by Title
export const getBooks = async (req, res) => {
    const title = req.query.title || '';

    try {
        const books = await BookModel.find({ title: { $regex: new RegExp(title, 'i') } }).exec();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json(error);
    }
};

//Create a new Book
export const createBook = async (req, res) => {
    const newBook = new BookModel(req.body);

    try {
        await newBook.save();
        res.status(200).json(newBook);
    } catch (error) {
        res.status(500).json(error)
    }
};