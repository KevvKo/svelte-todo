'use strict';
const { gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { merge } = require('lodash');
const { ToDo, ToDoResolvers } = require('./todo');

const Query = gql`
    type Query {
        todo: ToDo!
    }npx eslint --init
`; 

const QueryResolvers = {
    Query: {
        todo: (parent, args, context) => ({ text: 'Im a ToDo' })
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
