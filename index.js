const express = require('express');
const app = express();

const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/brickbase';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log("We're connected!")
});

const cors = require('cors');
const eventRoutes = require('./routes/events');

app.use('/events', eventRoutes);

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);



const PORT = process.env.PORT || 5000;



app.listen(PORT, () => console.log('Application listening in port ', PORT));
