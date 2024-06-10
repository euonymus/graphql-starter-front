import gql from 'graphql-tag';

export const GET_DATA = gql`
  query {
    items {
      id
      name
    }
  }
`;
