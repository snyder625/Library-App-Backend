import AuthorModel from '../models/BooksModel.js'
import mongoose from 'mongoose';


//Create a new Author
export const createAuthor = async (req, res) => {
    const newAuthor = new AuthorModel(req.body);

    try {
        await newAuthor.save();
        res.status(200).json(newAuthor);
    } catch (error) {
        res.status(500).json(error)
    }
};

//Get all authors
export const allAuthors = async (req, res) => {
    try {
        const authors = await AuthorModel.find();
        res.status(200).json(authors);
      } catch (error) {
        res.status(500).json(error);
      }
};

//Get a specific Author by id
export const getAuthor = async (req, res) => {
    const id = req.params.id;

    try {
        const author = await AuthorModel.findById(id);
        res.status(200).json(author);
    } catch (error) {
        res.status(500).json(error);
    }
};