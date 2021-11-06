'use strict';

const { MongoClient } = require('mongodb');
require('dotenv').config();

const db = 'ToDoApp';
const collectionName = ' ToDos';

const client = new MongoClient(
  process.env.API_URI,
  { useNewUrlParser: true, 
    useUnifiedTopology: true }
);

/**
 * 
 * @returns boolean
 */
function isConnected(){
  return client.isConnected();
}

/**
 * 
 * @param {String} value 
 */
async function create (value) {
  await client.connect(async (err) => {
    if(err) {
      return err;
    }
    const collection = await client.db(db).collection(collectionName);
    collection.insertOne({
      text: value
    }).then((res) => {
      console.info(res);
    });
  });
}

/**
 * 
 * @param {String} value 
 */
async function read (value){

  await client.connect(async (err) => {
    if(err) {
      return err;
    }

    const collection = await client.db('ToDoApp').collection('ToDos');
    const cursor = await collection.find({ text: value });
    
    if (await cursor.count() === 0) {
      return false;
    }

    return cursor.forEach(console.dir);
  });
}

module.exports = {
  isConnected,
  create,
  read
};
