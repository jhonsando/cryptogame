/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateScoreBoardInput = {
  username: string,
  score?: number | null,
  id?: string | null,
};

export type ModelScoreBoardConditionInput = {
  username?: ModelStringInput | null,
  score?: ModelIntInput | null,
  and?: Array< ModelScoreBoardConditionInput | null > | null,
  or?: Array< ModelScoreBoardConditionInput | null > | null,
  not?: ModelScoreBoardConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ScoreBoard = {
  __typename: "ScoreBoard",
  username: string,
  score?: number | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateScoreBoardInput = {
  username?: string | null,
  score?: number | null,
  id: string,
};

export type DeleteScoreBoardInput = {
  id: string,
};

export type ModelScoreBoardFilterInput = {
  username?: ModelStringInput | null,
  score?: ModelIntInput | null,
  and?: Array< ModelScoreBoardFilterInput | null > | null,
  or?: Array< ModelScoreBoardFilterInput | null > | null,
  not?: ModelScoreBoardFilterInput | null,
};

export type ModelScoreBoardConnection = {
  __typename: "ModelScoreBoardConnection",
  items:  Array<ScoreBoard | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionScoreBoardFilterInput = {
  username?: ModelSubscriptionStringInput | null,
  score?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionScoreBoardFilterInput | null > | null,
  or?: Array< ModelSubscriptionScoreBoardFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateScoreBoardMutationVariables = {
  input: CreateScoreBoardInput,
  condition?: ModelScoreBoardConditionInput | null,
};

export type CreateScoreBoardMutation = {
  createScoreBoard?:  {
    __typename: "ScoreBoard",
    username: string,
    score?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateScoreBoardMutationVariables = {
  input: UpdateScoreBoardInput,
  condition?: ModelScoreBoardConditionInput | null,
};

export type UpdateScoreBoardMutation = {
  updateScoreBoard?:  {
    __typename: "ScoreBoard",
    username: string,
    score?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteScoreBoardMutationVariables = {
  input: DeleteScoreBoardInput,
  condition?: ModelScoreBoardConditionInput | null,
};

export type DeleteScoreBoardMutation = {
  deleteScoreBoard?:  {
    __typename: "ScoreBoard",
    username: string,
    score?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetScoreBoardQueryVariables = {
  id: string,
};

export type GetScoreBoardQuery = {
  getScoreBoard?:  {
    __typename: "ScoreBoard",
    username: string,
    score?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListScoreBoardsQueryVariables = {
  filter?: ModelScoreBoardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListScoreBoardsQuery = {
  listScoreBoards?:  {
    __typename: "ModelScoreBoardConnection",
    items:  Array< {
      __typename: "ScoreBoard",
      username: string,
      score?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateScoreBoardSubscriptionVariables = {
  filter?: ModelSubscriptionScoreBoardFilterInput | null,
};

export type OnCreateScoreBoardSubscription = {
  onCreateScoreBoard?:  {
    __typename: "ScoreBoard",
    username: string,
    score?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateScoreBoardSubscriptionVariables = {
  filter?: ModelSubscriptionScoreBoardFilterInput | null,
};

export type OnUpdateScoreBoardSubscription = {
  onUpdateScoreBoard?:  {
    __typename: "ScoreBoard",
    username: string,
    score?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteScoreBoardSubscriptionVariables = {
  filter?: ModelSubscriptionScoreBoardFilterInput | null,
};

export type OnDeleteScoreBoardSubscription = {
  onDeleteScoreBoard?:  {
    __typename: "ScoreBoard",
    username: string,
    score?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
