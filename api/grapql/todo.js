'use strict';

const { gql } = require('apollo-server-lambda');

const ToDo = gql`
    type ToDo {
        id: String!
        text: String!
    }

    type Mutation {
        createToDo ( text: String ): ToDo!
        deleteToDo ( text: String ): ToDo!
        editToDo ( oldText: String, newText: String ): ToDo!
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
        },
        deleteToDo: async (parent, args, context) => {
            const { text } = args;
            const { collection } = context;
            const data = { text: text };            
            const result = await collection.deleteOne(data); 
            
            if(result.acknowledged){
                return { text: data.text };
            }
            
            throw new Error('Something went wrong');
        },
        editToDo: async (parent, args, context) => {
            const { oldText, newText } = args;
            const { collection } = context;
            const data = { text: oldText };            
            const result = await collection.updateOne(
                data,
                {
                    $set: { 'text': newText },
                    $currentDate: { lastModified: true }
                }
            ); 
            
            if(result.acknowledged){
                return { text: newText };
            }
            
            throw new Error('Something went wrong');
        }
    }
};

module.exports = {
    ToDo,
    ToDoResolvers
};
