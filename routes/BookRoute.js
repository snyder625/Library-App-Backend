import express from 'express';
import { searchBooks, getBook, createBook, getCategory, allBooks } from '../Controllers/BookController.js';

const router = express.Router();

router.post('/', createBook)
router.get('/', searchBooks)
router.get('/', allBooks)
router.get('/:id', getBook)
router.get('/:category', getCategory)

export default router