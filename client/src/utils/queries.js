import { gql } from '@apollo/client';

export const GET_ME = gql``;

export const QUERY_ME = gql`
  query me{
    tech{
      _id
      username
      email
      savedbooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;
