const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const usersRouter = require('./routes/user');

const exercisesRouter = require('./routes/exercise');


app.use('/users', usersRouter);
app.use('/exercises', exercisesRouter);


app.listen(port, () => {
    console.log('Server is running on port');
});