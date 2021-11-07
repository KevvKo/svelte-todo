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

export const EDIT_TODO = gql`
    mutation EditToDo(
        $oldText: String!
        $newText: String!
    ) {
        editToDo(oldText: $oldText, newText: $newText){
            text
        }
    }
`;
