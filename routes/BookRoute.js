import express from 'express';
import { getBooks, getBook, createBook } from '../Controllers/BookController.js';

const router = express.Router();

router.post('/', createBook)
router.get('/:id', getBook)
router.get('/', getBooks)

export default router