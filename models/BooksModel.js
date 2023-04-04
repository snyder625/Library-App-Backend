import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
    },
    description: {
      type: String,
    },
    authorId: {
      type: String,
    },
    rating: {
      type: Number,
    },
    pages: {
      type: Number,
    },
    status: {
      type: String,
    },
    genre: {
      type: String,
    },
  }, { timestamps: true });
  
  const BookModel = mongoose.model('Books', bookSchema);
  export default BookModel;