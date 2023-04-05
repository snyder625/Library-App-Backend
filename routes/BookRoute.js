import express from 'express';
import { searchBooks, getBook, createBook, getCategory, allBooks, getType } from '../Controllers/BookController.js';

const router = express.Router();

router.post('/', createBook)
router.get('/', searchBooks)
router.get('/', allBooks)
router.get('/:id', getBook)
router.get('/genre/:genre', getCategory)
router.get('/type/:type', getType)

export default router