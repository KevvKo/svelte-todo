import { gql } from '@apollo/client';

export const TODO_QUERY = gql`
    query ToDoQuery(
        $text: String!
    ) {
        todo(text: $text){
            text
        }
    }
`;

export const TODOS_QUERY = gql`
     {
        todos {
            text
        }
     }
`;
