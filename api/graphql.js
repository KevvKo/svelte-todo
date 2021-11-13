'use strict';

const { createLambdaServer } = require('./server');

const server = createLambdaServer();

exports.graphqlHandler = server.createHandler();
