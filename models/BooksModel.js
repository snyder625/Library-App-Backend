import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    id: {
        type: 'string',
        required: true
    },
    title: {
        type: 'string',
        required: true,
        index: true
      },
    cover: 'string',
    description: 'string',
    authorId: 'string',
    rating: 'number',
    pages: 'number',
    status: 'string',
    genre: 'string',
}, {timestamps: true}
);

const BookModel = mongoose.model("Books", bookSchema);
export default BookModel