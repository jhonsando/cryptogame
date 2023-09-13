/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getScoreBoard = /* GraphQL */ `
  query GetScoreBoard($id: ID!) {
    getScoreBoard(id: $id) {
      username
      score
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listScoreBoards = /* GraphQL */ `
  query ListScoreBoards(
    $filter: ModelScoreBoardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScoreBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        username
        score
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
