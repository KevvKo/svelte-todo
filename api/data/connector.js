const { MongoClient } = require('mongodb');
const { API_URI } = require('dotenv').config();

const client = new MongoClient( API_URI, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

module.export = {
    client
}