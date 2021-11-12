const { createLocalServer } = require('./server');
const { isConnected } = require('./data/connector');

const server = createLocalServer();

if(isConnected) {
    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
      });
}