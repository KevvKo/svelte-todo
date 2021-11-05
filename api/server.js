const { ApolloServer } = require('apollo-server');
const { schema } = require('./grapql/schema');

const server = new ApolloServer({ 
    schema: schema
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });