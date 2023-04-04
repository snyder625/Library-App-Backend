import express from 'express';
import { getAuthor, createAuthor, allAuthors } from '../Controllers/AuthorController.js';

const router = express.Router();

router.post('/', createAuthor)
router.get('/', allAuthors)
router.get('/:id', getAuthor)

export default router