import mongoose from 'mongoose';

const authorSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: true,
    },
    image: 'string',
    description: 'string',
    books: [],
}, { timestamps: true }
);

const AuthorModel = mongoose.model("Authors", authorSchema);
export default AuthorModel