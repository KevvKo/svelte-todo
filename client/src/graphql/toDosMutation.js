import { gql } from '@apollo/client';

export const CREATE_TODO = gql`
    mutation CreateToDo(
        $text: String!
    ) {
        createToDo(text: $text){
            text
        }
    }
`;


export const DELETE_TODO = gql`
    mutation DeleteToDo(
        $text: String!
    ) {
        deleteToDo(text: $text){
            text
        }
    }
`;
