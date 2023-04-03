import express from 'express';
import mongoose  from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import BookRoute from './routes/BookRoute.js'

const app = express();

const PORT = 3000;

mongoose.connect("mongodb+srv://admin-rizwan:Test123@cluster0.y5gay.mongodb.net/LibraryApp?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
.then((app.listen(PORT, ()=> {console.log('Server started on port ' + PORT)})))
.catch((error)=> {console.log(error)});

app.use('/book', BookRoute)