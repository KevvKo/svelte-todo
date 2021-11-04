const {DB_USER, DB_PASSWORD } = require('dotenv').config();
const MongoClient = require('mongodb').MongoClient

MongoClient.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.qqxvm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, 
    (err, client) => {
        if (err) return console.error(err);
        console.log('Connected to Database');
  }
);