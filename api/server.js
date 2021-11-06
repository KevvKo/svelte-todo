'use strict';

const { ApolloServer } = require('apollo-server');
const { schema } = require('./grapql/schema');
const { isConnected, create, read } = require('./data/connector');

const server = new ApolloServer({ 
    schema: schema,
    context: {
        create,
        read
    }
});

// check the db connecthon
if(isConnected){
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
      });
}
