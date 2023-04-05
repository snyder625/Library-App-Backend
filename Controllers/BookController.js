import BookModel from '../models/BooksModel.js'
import mongoose from 'mongoose';

//Get all books
export const allBooks = async (req, res) => {
    try {
        const books = await BookModel.find();
        res.status(200).json(books);
      } catch (error) {
        res.status(500).json(error);
      }
};

//Get a specific Book by id
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
export const searchBooks = async (req, res) => {
    const title = req.query.title || '';

    try {
        const books = await BookModel.find({ title: { $regex: new RegExp(title, 'i') } }).exec();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json(error);
    }
};

//Get Books by Category
export const getCategory = async (req, res) => {
    const genre = req.params.genre;

    try {
    const books = await BookModel.find({ genre }).limit(10);
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//Get Books by Type
export const getType = async (req, res) => {
    const type = req.params.type;

    try {
    const books = await BookModel.find({ type });
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
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