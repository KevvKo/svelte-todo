const { gql } = require('apollo-server-express');

const ToDo = gql`
    type ToDo {
        text: String
    }

    type Mutation {
        createToDo ( text: String ): ToDo
    }
`;

const ToDoResolvers = {
    Mutation: {
        createToDo: async ( parent, args, context, info ) => {
            return 'mock'
        }
    }
}

module.exports = {
    ToDo,
    ToDoResolvers
}