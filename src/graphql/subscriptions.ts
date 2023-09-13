/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateScoreBoard = /* GraphQL */ `
  subscription OnCreateScoreBoard(
    $filter: ModelSubscriptionScoreBoardFilterInput
  ) {
    onCreateScoreBoard(filter: $filter) {
      username
      score
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateScoreBoard = /* GraphQL */ `
  subscription OnUpdateScoreBoard(
    $filter: ModelSubscriptionScoreBoardFilterInput
  ) {
    onUpdateScoreBoard(filter: $filter) {
      username
      score
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteScoreBoard = /* GraphQL */ `
  subscription OnDeleteScoreBoard(
    $filter: ModelSubscriptionScoreBoardFilterInput
  ) {
    onDeleteScoreBoard(filter: $filter) {
      username
      score
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
