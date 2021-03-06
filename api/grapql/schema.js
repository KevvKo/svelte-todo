'use strict';
const { gql } = require('apollo-server-lambda');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { merge } = require('lodash');
const { ToDo, ToDoResolvers } = require('./todo');

const Query = gql`
    type Query {
        todo(text: String! ): ToDo!
        todos: [ToDo]
    }
`; 

const QueryResolvers = {
    Query: {
        todo: (parent, args, context) => {
            const { collection } = context;
            return collection.findOne({ text: args.text });
        },
        todos: async (parent, args, context) => {
            const { collection } = context;
            return collection.find().toArray();
        }
    }
};

const schema = makeExecutableSchema({
    typeDefs: [
        Query,
         ToDo
        ],
    resolvers: merge(
        QueryResolvers,
        ToDoResolvers
    )
});
  
module.exports = {
    schema
};
