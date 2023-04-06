import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    authorId: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      index: true,
      required: true,
      enum: ['Horror', 'Mystery', 'Comedy', 'Fantasy'],
    },
  }, { timestamps: true });
  
  const BookModel = mongoose.model('Books', bookSchema);
  export default BookModel;