const { MongoClient } = require('mongodb');
require('dotenv').config()

const db = 'ToDoApp';
const collection = ' ToDos';

const client = new MongoClient( process.env.API_URI, { useNewUrlParser: true, useUnifiedTopology: true });

async function isConnected(){
  return client.isConnected();
}

/**
 * 
 * @param {String} value 
 */
async function create( value ) {
  client.connect(async err => {

    const collection = client.db( db ).collection( collection );
    collection.insertOne({
      text: value
    }).then( res => {
      console.info(res);
    })
  });
}

/**
 * 
 * @param {String} value 
 */
async function read( value ){
  client.connect(async err => {

    const collection = client.db( db ).collection( collection );
  
    const cursor = await collection.find({text: value })
    if ((await cursor.count()) === 0) {
      return false;
    }
    
    client.close();
    return cursor.forEach(console.dir);
  });
}

module.exports = {
  isConnected,
  create,
  read
}
