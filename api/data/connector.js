'use strict';

const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(
  process.env.API_URI,
  { useNewUrlParser: true, 
    useUnifiedTopology: true }
);

client.connect();
  const collection = client.db('ToDoApp').collection('ToDos');


/**
 * 
 * @returns boolean
 */
function isConnected(){
  return client.isConnected();
}

module.exports = {
  isConnected,
  collection
};
