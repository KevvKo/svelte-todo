'use strict';

const { isConnected } = require('./data/connector');
const { createLocalServer } = require('./server');

const server = createLocalServer();

if(isConnected) {
    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
      });
}
