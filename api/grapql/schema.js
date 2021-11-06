'use strict';
const { gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { merge } = require('lodash');
const { ToDo, ToDoResolvers } = require('./todo');

const Query = gql`
    type Query {
        todo(text: String! ): ToDo!
    }
`; 

const QueryResolvers = {
    Query: {
        todo: (parent, args, context) => {
            const { collection } = context;
            return collection.findOne({ text: args.text });
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
