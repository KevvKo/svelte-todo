const { gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { merge } = require('lodash') 
const { ToDo, ToDoResolvers } = require('./todo');

const Query = gql`
    type Query {
        todo: ToDo!
    }
`; 

const QueryResolvers = {
    Query: {
        todo: async ( parent, args, context) => {
            return ''
        }
    }
}
const schema = makeExecutableSchema( {
    typeDefs: [Query, ToDo],
    resolvers: merge(
        QueryResolvers,
        ToDoResolvers
    )
});
  
module.exports = {
    schema
}