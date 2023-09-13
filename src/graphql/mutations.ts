/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createScoreBoard = /* GraphQL */ `
  mutation CreateScoreBoard(
    $input: CreateScoreBoardInput!
    $condition: ModelScoreBoardConditionInput
  ) {
    createScoreBoard(input: $input, condition: $condition) {
      username
      score
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateScoreBoard = /* GraphQL */ `
  mutation UpdateScoreBoard(
    $input: UpdateScoreBoardInput!
    $condition: ModelScoreBoardConditionInput
  ) {
    updateScoreBoard(input: $input, condition: $condition) {
      username
      score
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteScoreBoard = /* GraphQL */ `
  mutation DeleteScoreBoard(
    $input: DeleteScoreBoardInput!
    $condition: ModelScoreBoardConditionInput
  ) {
    deleteScoreBoard(input: $input, condition: $condition) {
      username
      score
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
