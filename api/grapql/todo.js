'use strict';

const { gql } = require('apollo-server-express');
const { identity } = require('lodash');

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
        createToDo: async (parent, args, context) => {
            const { text } = args;
            const { collection } = context;
            const data = { text: text };            
            const result = await collection.insertOne(data); 
            
            if(result.acknowledged){
                return { text: data.text };
            }
            
            throw new Error('Something went wrong');
        }
    }
};

module.exports = {
    ToDo,
    ToDoResolvers
};
