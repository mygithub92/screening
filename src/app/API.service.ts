/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateCrew: OnCreateCrewSubscription;
  onUpdateCrew: OnUpdateCrewSubscription;
  onDeleteCrew: OnDeleteCrewSubscription;
  onCreateQuestion: OnCreateQuestionSubscription;
  onUpdateQuestion: OnUpdateQuestionSubscription;
  onDeleteQuestion: OnDeleteQuestionSubscription;
  onCreateOption: OnCreateOptionSubscription;
  onUpdateOption: OnUpdateOptionSubscription;
  onDeleteOption: OnDeleteOptionSubscription;
};

export type CreateCrewInput = {
  id?: string | null;
  name: string;
  type: string;
  orgnizationCode: string;
  phoneNumber: string;
  email: string;
};

export type ModelCrewConditionInput = {
  name?: ModelStringInput | null;
  type?: ModelStringInput | null;
  orgnizationCode?: ModelStringInput | null;
  phoneNumber?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelCrewConditionInput | null> | null;
  or?: Array<ModelCrewConditionInput | null> | null;
  not?: ModelCrewConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
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
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Crew = {
  __typename: "Crew";
  id: string;
  name: string;
  type: string;
  orgnizationCode: string;
  phoneNumber: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCrewInput = {
  id: string;
  name?: string | null;
  type?: string | null;
  orgnizationCode?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
};

export type DeleteCrewInput = {
  id: string;
};

export type CreateQuestionInput = {
  id?: string | null;
  title: string;
};

export type ModelQuestionConditionInput = {
  title?: ModelStringInput | null;
  and?: Array<ModelQuestionConditionInput | null> | null;
  or?: Array<ModelQuestionConditionInput | null> | null;
  not?: ModelQuestionConditionInput | null;
};

export type Question = {
  __typename: "Question";
  id: string;
  title: string;
  options?: ModelOptionConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelOptionConnection = {
  __typename: "ModelOptionConnection";
  items: Array<Option | null>;
  nextToken?: string | null;
};

export type Option = {
  __typename: "Option";
  id: string;
  label: string;
  value: string;
  question?: Question | null;
  createdAt: string;
  updatedAt: string;
  questionOptionsId?: string | null;
};

export type UpdateQuestionInput = {
  id: string;
  title?: string | null;
};

export type DeleteQuestionInput = {
  id: string;
};

export type CreateOptionInput = {
  id?: string | null;
  label: string;
  value: string;
  questionOptionsId?: string | null;
};

export type ModelOptionConditionInput = {
  label?: ModelStringInput | null;
  value?: ModelStringInput | null;
  and?: Array<ModelOptionConditionInput | null> | null;
  or?: Array<ModelOptionConditionInput | null> | null;
  not?: ModelOptionConditionInput | null;
  questionOptionsId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateOptionInput = {
  id: string;
  label?: string | null;
  value?: string | null;
  questionOptionsId?: string | null;
};

export type DeleteOptionInput = {
  id: string;
};

export type ModelCrewFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  type?: ModelStringInput | null;
  orgnizationCode?: ModelStringInput | null;
  phoneNumber?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelCrewFilterInput | null> | null;
  or?: Array<ModelCrewFilterInput | null> | null;
  not?: ModelCrewFilterInput | null;
};

export type ModelCrewConnection = {
  __typename: "ModelCrewConnection";
  items: Array<Crew | null>;
  nextToken?: string | null;
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  and?: Array<ModelQuestionFilterInput | null> | null;
  or?: Array<ModelQuestionFilterInput | null> | null;
  not?: ModelQuestionFilterInput | null;
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection";
  items: Array<Question | null>;
  nextToken?: string | null;
};

export type ModelOptionFilterInput = {
  id?: ModelIDInput | null;
  label?: ModelStringInput | null;
  value?: ModelStringInput | null;
  and?: Array<ModelOptionFilterInput | null> | null;
  or?: Array<ModelOptionFilterInput | null> | null;
  not?: ModelOptionFilterInput | null;
  questionOptionsId?: ModelIDInput | null;
};

export type CreateCrewMutation = {
  __typename: "Crew";
  id: string;
  name: string;
  type: string;
  orgnizationCode: string;
  phoneNumber: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCrewMutation = {
  __typename: "Crew";
  id: string;
  name: string;
  type: string;
  orgnizationCode: string;
  phoneNumber: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCrewMutation = {
  __typename: "Crew";
  id: string;
  name: string;
  type: string;
  orgnizationCode: string;
  phoneNumber: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateQuestionMutation = {
  __typename: "Question";
  id: string;
  title: string;
  options?: {
    __typename: "ModelOptionConnection";
    items: Array<{
      __typename: "Option";
      id: string;
      label: string;
      value: string;
      createdAt: string;
      updatedAt: string;
      questionOptionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuestionMutation = {
  __typename: "Question";
  id: string;
  title: string;
  options?: {
    __typename: "ModelOptionConnection";
    items: Array<{
      __typename: "Option";
      id: string;
      label: string;
      value: string;
      createdAt: string;
      updatedAt: string;
      questionOptionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteQuestionMutation = {
  __typename: "Question";
  id: string;
  title: string;
  options?: {
    __typename: "ModelOptionConnection";
    items: Array<{
      __typename: "Option";
      id: string;
      label: string;
      value: string;
      createdAt: string;
      updatedAt: string;
      questionOptionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateOptionMutation = {
  __typename: "Option";
  id: string;
  label: string;
  value: string;
  question?: {
    __typename: "Question";
    id: string;
    title: string;
    options?: {
      __typename: "ModelOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  questionOptionsId?: string | null;
};

export type UpdateOptionMutation = {
  __typename: "Option";
  id: string;
  label: string;
  value: string;
  question?: {
    __typename: "Question";
    id: string;
    title: string;
    options?: {
      __typename: "ModelOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  questionOptionsId?: string | null;
};

export type DeleteOptionMutation = {
  __typename: "Option";
  id: string;
  label: string;
  value: string;
  question?: {
    __typename: "Question";
    id: string;
    title: string;
    options?: {
      __typename: "ModelOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  questionOptionsId?: string | null;
};

export type GetCrewQuery = {
  __typename: "Crew";
  id: string;
  name: string;
  type: string;
  orgnizationCode: string;
  phoneNumber: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type ListCrewsQuery = {
  __typename: "ModelCrewConnection";
  items: Array<{
    __typename: "Crew";
    id: string;
    name: string;
    type: string;
    orgnizationCode: string;
    phoneNumber: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetQuestionQuery = {
  __typename: "Question";
  id: string;
  title: string;
  options?: {
    __typename: "ModelOptionConnection";
    items: Array<{
      __typename: "Option";
      id: string;
      label: string;
      value: string;
      createdAt: string;
      updatedAt: string;
      questionOptionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListQuestionsQuery = {
  __typename: "ModelQuestionConnection";
  items: Array<{
    __typename: "Question";
    id: string;
    title: string;
    options?: {
      __typename: "ModelOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetOptionQuery = {
  __typename: "Option";
  id: string;
  label: string;
  value: string;
  question?: {
    __typename: "Question";
    id: string;
    title: string;
    options?: {
      __typename: "ModelOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  questionOptionsId?: string | null;
};

export type ListOptionsQuery = {
  __typename: "ModelOptionConnection";
  items: Array<{
    __typename: "Option";
    id: string;
    label: string;
    value: string;
    question?: {
      __typename: "Question";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    questionOptionsId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateCrewSubscription = {
  __typename: "Crew";
  id: string;
  name: string;
  type: string;
  orgnizationCode: string;
  phoneNumber: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCrewSubscription = {
  __typename: "Crew";
  id: string;
  name: string;
  type: string;
  orgnizationCode: string;
  phoneNumber: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCrewSubscription = {
  __typename: "Crew";
  id: string;
  name: string;
  type: string;
  orgnizationCode: string;
  phoneNumber: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateQuestionSubscription = {
  __typename: "Question";
  id: string;
  title: string;
  options?: {
    __typename: "ModelOptionConnection";
    items: Array<{
      __typename: "Option";
      id: string;
      label: string;
      value: string;
      createdAt: string;
      updatedAt: string;
      questionOptionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateQuestionSubscription = {
  __typename: "Question";
  id: string;
  title: string;
  options?: {
    __typename: "ModelOptionConnection";
    items: Array<{
      __typename: "Option";
      id: string;
      label: string;
      value: string;
      createdAt: string;
      updatedAt: string;
      questionOptionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteQuestionSubscription = {
  __typename: "Question";
  id: string;
  title: string;
  options?: {
    __typename: "ModelOptionConnection";
    items: Array<{
      __typename: "Option";
      id: string;
      label: string;
      value: string;
      createdAt: string;
      updatedAt: string;
      questionOptionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateOptionSubscription = {
  __typename: "Option";
  id: string;
  label: string;
  value: string;
  question?: {
    __typename: "Question";
    id: string;
    title: string;
    options?: {
      __typename: "ModelOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  questionOptionsId?: string | null;
};

export type OnUpdateOptionSubscription = {
  __typename: "Option";
  id: string;
  label: string;
  value: string;
  question?: {
    __typename: "Question";
    id: string;
    title: string;
    options?: {
      __typename: "ModelOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  questionOptionsId?: string | null;
};

export type OnDeleteOptionSubscription = {
  __typename: "Option";
  id: string;
  label: string;
  value: string;
  question?: {
    __typename: "Question";
    id: string;
    title: string;
    options?: {
      __typename: "ModelOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  questionOptionsId?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCrew(
    input: CreateCrewInput,
    condition?: ModelCrewConditionInput
  ): Promise<CreateCrewMutation> {
    const statement = `mutation CreateCrew($input: CreateCrewInput!, $condition: ModelCrewConditionInput) {
        createCrew(input: $input, condition: $condition) {
          __typename
          id
          name
          type
          orgnizationCode
          phoneNumber
          email
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCrewMutation>response.data.createCrew;
  }
  async UpdateCrew(
    input: UpdateCrewInput,
    condition?: ModelCrewConditionInput
  ): Promise<UpdateCrewMutation> {
    const statement = `mutation UpdateCrew($input: UpdateCrewInput!, $condition: ModelCrewConditionInput) {
        updateCrew(input: $input, condition: $condition) {
          __typename
          id
          name
          type
          orgnizationCode
          phoneNumber
          email
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCrewMutation>response.data.updateCrew;
  }
  async DeleteCrew(
    input: DeleteCrewInput,
    condition?: ModelCrewConditionInput
  ): Promise<DeleteCrewMutation> {
    const statement = `mutation DeleteCrew($input: DeleteCrewInput!, $condition: ModelCrewConditionInput) {
        deleteCrew(input: $input, condition: $condition) {
          __typename
          id
          name
          type
          orgnizationCode
          phoneNumber
          email
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCrewMutation>response.data.deleteCrew;
  }
  async CreateQuestion(
    input: CreateQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<CreateQuestionMutation> {
    const statement = `mutation CreateQuestion($input: CreateQuestionInput!, $condition: ModelQuestionConditionInput) {
        createQuestion(input: $input, condition: $condition) {
          __typename
          id
          title
          options {
            __typename
            items {
              __typename
              id
              label
              value
              createdAt
              updatedAt
              questionOptionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuestionMutation>response.data.createQuestion;
  }
  async UpdateQuestion(
    input: UpdateQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<UpdateQuestionMutation> {
    const statement = `mutation UpdateQuestion($input: UpdateQuestionInput!, $condition: ModelQuestionConditionInput) {
        updateQuestion(input: $input, condition: $condition) {
          __typename
          id
          title
          options {
            __typename
            items {
              __typename
              id
              label
              value
              createdAt
              updatedAt
              questionOptionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuestionMutation>response.data.updateQuestion;
  }
  async DeleteQuestion(
    input: DeleteQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<DeleteQuestionMutation> {
    const statement = `mutation DeleteQuestion($input: DeleteQuestionInput!, $condition: ModelQuestionConditionInput) {
        deleteQuestion(input: $input, condition: $condition) {
          __typename
          id
          title
          options {
            __typename
            items {
              __typename
              id
              label
              value
              createdAt
              updatedAt
              questionOptionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuestionMutation>response.data.deleteQuestion;
  }
  async CreateOption(
    input: CreateOptionInput,
    condition?: ModelOptionConditionInput
  ): Promise<CreateOptionMutation> {
    const statement = `mutation CreateOption($input: CreateOptionInput!, $condition: ModelOptionConditionInput) {
        createOption(input: $input, condition: $condition) {
          __typename
          id
          label
          value
          question {
            __typename
            id
            title
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          questionOptionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateOptionMutation>response.data.createOption;
  }
  async UpdateOption(
    input: UpdateOptionInput,
    condition?: ModelOptionConditionInput
  ): Promise<UpdateOptionMutation> {
    const statement = `mutation UpdateOption($input: UpdateOptionInput!, $condition: ModelOptionConditionInput) {
        updateOption(input: $input, condition: $condition) {
          __typename
          id
          label
          value
          question {
            __typename
            id
            title
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          questionOptionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateOptionMutation>response.data.updateOption;
  }
  async DeleteOption(
    input: DeleteOptionInput,
    condition?: ModelOptionConditionInput
  ): Promise<DeleteOptionMutation> {
    const statement = `mutation DeleteOption($input: DeleteOptionInput!, $condition: ModelOptionConditionInput) {
        deleteOption(input: $input, condition: $condition) {
          __typename
          id
          label
          value
          question {
            __typename
            id
            title
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          questionOptionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteOptionMutation>response.data.deleteOption;
  }
  async GetCrew(id: string): Promise<GetCrewQuery> {
    const statement = `query GetCrew($id: ID!) {
        getCrew(id: $id) {
          __typename
          id
          name
          type
          orgnizationCode
          phoneNumber
          email
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCrewQuery>response.data.getCrew;
  }
  async ListCrews(
    filter?: ModelCrewFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCrewsQuery> {
    const statement = `query ListCrews($filter: ModelCrewFilterInput, $limit: Int, $nextToken: String) {
        listCrews(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            type
            orgnizationCode
            phoneNumber
            email
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCrewsQuery>response.data.listCrews;
  }
  async GetQuestion(id: string): Promise<GetQuestionQuery> {
    const statement = `query GetQuestion($id: ID!) {
        getQuestion(id: $id) {
          __typename
          id
          title
          options {
            __typename
            items {
              __typename
              id
              label
              value
              createdAt
              updatedAt
              questionOptionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuestionQuery>response.data.getQuestion;
  }
  async ListQuestions(
    filter?: ModelQuestionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuestionsQuery> {
    const statement = `query ListQuestions($filter: ModelQuestionFilterInput, $limit: Int, $nextToken: String) {
        listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuestionsQuery>response.data.listQuestions;
  }
  async GetOption(id: string): Promise<GetOptionQuery> {
    const statement = `query GetOption($id: ID!) {
        getOption(id: $id) {
          __typename
          id
          label
          value
          question {
            __typename
            id
            title
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          questionOptionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOptionQuery>response.data.getOption;
  }
  async ListOptions(
    filter?: ModelOptionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOptionsQuery> {
    const statement = `query ListOptions($filter: ModelOptionFilterInput, $limit: Int, $nextToken: String) {
        listOptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            label
            value
            question {
              __typename
              id
              title
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            questionOptionsId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListOptionsQuery>response.data.listOptions;
  }
  OnCreateCrewListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCrew">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCrew {
        onCreateCrew {
          __typename
          id
          name
          type
          orgnizationCode
          phoneNumber
          email
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCrew">>
  >;

  OnUpdateCrewListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCrew">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCrew {
        onUpdateCrew {
          __typename
          id
          name
          type
          orgnizationCode
          phoneNumber
          email
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCrew">>
  >;

  OnDeleteCrewListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCrew">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCrew {
        onDeleteCrew {
          __typename
          id
          name
          type
          orgnizationCode
          phoneNumber
          email
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCrew">>
  >;

  OnCreateQuestionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateQuestion">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuestion {
        onCreateQuestion {
          __typename
          id
          title
          options {
            __typename
            items {
              __typename
              id
              label
              value
              createdAt
              updatedAt
              questionOptionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateQuestion">>
  >;

  OnUpdateQuestionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateQuestion">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuestion {
        onUpdateQuestion {
          __typename
          id
          title
          options {
            __typename
            items {
              __typename
              id
              label
              value
              createdAt
              updatedAt
              questionOptionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateQuestion">>
  >;

  OnDeleteQuestionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteQuestion">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuestion {
        onDeleteQuestion {
          __typename
          id
          title
          options {
            __typename
            items {
              __typename
              id
              label
              value
              createdAt
              updatedAt
              questionOptionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteQuestion">>
  >;

  OnCreateOptionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateOption">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateOption {
        onCreateOption {
          __typename
          id
          label
          value
          question {
            __typename
            id
            title
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          questionOptionsId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateOption">>
  >;

  OnUpdateOptionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateOption">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOption {
        onUpdateOption {
          __typename
          id
          label
          value
          question {
            __typename
            id
            title
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          questionOptionsId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateOption">>
  >;

  OnDeleteOptionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteOption">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOption {
        onDeleteOption {
          __typename
          id
          label
          value
          question {
            __typename
            id
            title
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          questionOptionsId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteOption">>
  >;
}
