const { MongoClient } = require('mongodb');
require('dotenv').config()

const client = new MongoClient( process.env.API_URI, { useNewUrlParser: true, useUnifiedTopology: true });

async function run(){
  client.connect(async err => {

    const collection = client.db("ToDoApp").collection("ToDos");
    // perform actions on the collection object
    const cursor = await collection.find({text:'shopping'})
    if ((await cursor.count()) === 0) {

      console.log("No documents found!");
    }
    await cursor.forEach(console.dir);
    client.close();
  });

}

run()
module.export = {
    run
}
