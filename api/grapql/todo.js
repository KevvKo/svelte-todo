'use strict';

const { gql } = require('apollo-server-express');

const ToDo = gql`
    type ToDo {
        text: String!
    }

    type Mutation {
        createToDo ( text: String ): ToDo!
    }
`;

const ToDoResolvers = {
    Mutation: {
        createToDo: (parent, args, context) => {
            const { text } = args;
            return { text: text };
        }
    }
};

module.exports = {
    ToDo,
    ToDoResolvers
};
