'use strict';

const ApolloServerLocal = require('apollo-server').ApolloServer;
const ApolloServerLambda = require('apollo-server-lambda').ApolloServer;

const { schema } = require('./grapql/schema');
const { collection } = require('./data/connector');

const createLocalServer = () => {
    return new ApolloServerLocal({ 
        schema: schema,
        context: {
            collection
        }
    });    
};

const createLambdaServer = () => {
    return new ApolloServerLambda({ 
        schema: schema,
        context: {
            collection
        }
    });    
};

module.exports = {
    createLocalServer,
    createLambdaServer
};
