'use strict';

const { ApolloServer } = require('apollo-server');
const { schema } = require('./grapql/schema');
const { MongoClient } = require("mongodb");


const server = new ApolloServer({ 
    schema: schema
});


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });