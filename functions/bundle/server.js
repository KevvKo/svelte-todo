'use strict';

const ApolloServer = require('apollo-server').ApolloServer;
const ApolloServerLambda = require('apollo-server-lambda').AplloServer;
const { schema } = require('./grapql/schema');
const { collection } = require('./data/connector');

const createLambdaServer = () => {
    return new ApolloServerLambda({ 
        schema: schema,
        context: {
            collection
    }
    });
}

const createLocalServer = () => {
    return new ApolloServer({ 
        schema: schema,
        context: {
            collection
        }
    });
}

module.exports = { 
    createLambdaServer, 
    createLocalServer };
