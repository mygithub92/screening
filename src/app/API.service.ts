/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from '@angular/core';
import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api-graphql';
import { Observable } from 'zen-observable-ts';

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateSceening: OnCreateSceeningSubscription;
  onUpdateSceening: OnUpdateSceeningSubscription;
  onDeleteSceening: OnDeleteSceeningSubscription;
  onCreateAnsweredQuestion: OnCreateAnsweredQuestionSubscription;
  onUpdateAnsweredQuestion: OnUpdateAnsweredQuestionSubscription;
  onDeleteAnsweredQuestion: OnDeleteAnsweredQuestionSubscription;
  onCreateForm: OnCreateFormSubscription;
  onUpdateForm: OnUpdateFormSubscription;
  onDeleteForm: OnDeleteFormSubscription;
  onCreateJob: OnCreateJobSubscription;
  onUpdateJob: OnUpdateJobSubscription;
  onDeleteJob: OnDeleteJobSubscription;
  onCreateLocation: OnCreateLocationSubscription;
  onUpdateLocation: OnUpdateLocationSubscription;
  onDeleteLocation: OnDeleteLocationSubscription;
  onCreateQuestion: OnCreateQuestionSubscription;
  onUpdateQuestion: OnUpdateQuestionSubscription;
  onDeleteQuestion: OnDeleteQuestionSubscription;
  onCreateOption: OnCreateOptionSubscription;
  onUpdateOption: OnUpdateOptionSubscription;
  onDeleteOption: OnDeleteOptionSubscription;
  onCreateCrew: OnCreateCrewSubscription;
  onUpdateCrew: OnUpdateCrewSubscription;
  onDeleteCrew: OnDeleteCrewSubscription;
  onCreateFormJob: OnCreateFormJobSubscription;
  onUpdateFormJob: OnUpdateFormJobSubscription;
  onDeleteFormJob: OnDeleteFormJobSubscription;
  onCreateCrewJob: OnCreateCrewJobSubscription;
  onUpdateCrewJob: OnUpdateCrewJobSubscription;
  onDeleteCrewJob: OnDeleteCrewJobSubscription;
  onCreateQuestionOption: OnCreateQuestionOptionSubscription;
  onUpdateQuestionOption: OnUpdateQuestionOptionSubscription;
  onDeleteQuestionOption: OnDeleteQuestionOptionSubscription;
};

export type CreateSceeningInput = {
  id?: string | null;
  jobId?: string | null;
  jobName?: string | null;
  crewId?: string | null;
  crewName?: string | null;
  crewPhoneNumber?: string | null;
  result?: string | null;
  method?: string | null;
  staffId?: string | null;
  staffName?: string | null;
  processed?: boolean | null;
  location?: string | null;
  processedAt?: string | null;
  submittedAt?: string | null;
  _version?: number | null;
};

export type ModelSceeningConditionInput = {
  jobId?: ModelStringInput | null;
  jobName?: ModelStringInput | null;
  crewId?: ModelStringInput | null;
  crewName?: ModelStringInput | null;
  crewPhoneNumber?: ModelStringInput | null;
  result?: ModelStringInput | null;
  method?: ModelStringInput | null;
  staffId?: ModelStringInput | null;
  staffName?: ModelStringInput | null;
  processed?: ModelBooleanInput | null;
  location?: ModelStringInput | null;
  processedAt?: ModelStringInput | null;
  submittedAt?: ModelStringInput | null;
  and?: Array<ModelSceeningConditionInput | null> | null;
  or?: Array<ModelSceeningConditionInput | null> | null;
  not?: ModelSceeningConditionInput | null;
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
  _null = "_null",
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

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Sceening = {
  __typename: "Sceening";
  id: string;
  jobId?: string | null;
  jobName?: string | null;
  crewId?: string | null;
  crewName?: string | null;
  crewPhoneNumber?: string | null;
  result?: string | null;
  method?: string | null;
  staffId?: string | null;
  staffName?: string | null;
  processed?: boolean | null;
  location?: string | null;
  processedAt?: string | null;
  submittedAt?: string | null;
  answeredQuestions?: ModelAnsweredQuestionConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelAnsweredQuestionConnection = {
  __typename: "ModelAnsweredQuestionConnection";
  items: Array<AnsweredQuestion | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type AnsweredQuestion = {
  __typename: "AnsweredQuestion";
  id: string;
  question?: string | null;
  answer?: string | null;
  sceening?: Sceening | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  sceeningAnsweredQuestionsId?: string | null;
};

export type UpdateSceeningInput = {
  id: string;
  jobId?: string | null;
  jobName?: string | null;
  crewId?: string | null;
  crewName?: string | null;
  crewPhoneNumber?: string | null;
  result?: string | null;
  method?: string | null;
  staffId?: string | null;
  staffName?: string | null;
  processed?: boolean | null;
  location?: string | null;
  processedAt?: string | null;
  submittedAt?: string | null;
  _version?: number | null;
};

export type DeleteSceeningInput = {
  id: string;
  _version?: number | null;
};

export type CreateAnsweredQuestionInput = {
  id?: string | null;
  question?: string | null;
  answer?: string | null;
  order?: number | null;
  _version?: number | null;
  sceeningAnsweredQuestionsId?: string | null;
};

export type ModelAnsweredQuestionConditionInput = {
  question?: ModelStringInput | null;
  answer?: ModelStringInput | null;
  order?: ModelIntInput | null;
  and?: Array<ModelAnsweredQuestionConditionInput | null> | null;
  or?: Array<ModelAnsweredQuestionConditionInput | null> | null;
  not?: ModelAnsweredQuestionConditionInput | null;
  sceeningAnsweredQuestionsId?: ModelIDInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
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

export type UpdateAnsweredQuestionInput = {
  id: string;
  question?: string | null;
  answer?: string | null;
  order?: number | null;
  _version?: number | null;
  sceeningAnsweredQuestionsId?: string | null;
};

export type DeleteAnsweredQuestionInput = {
  id: string;
  _version?: number | null;
};

export type CreateFormInput = {
  id?: string | null;
  name?: string | null;
  _version?: number | null;
};

export type ModelFormConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelFormConditionInput | null> | null;
  or?: Array<ModelFormConditionInput | null> | null;
  not?: ModelFormConditionInput | null;
};

export type Form = {
  __typename: "Form";
  id: string;
  name?: string | null;
  questions?: ModelQuestionConnection | null;
  jobs?: ModelFormJobConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection";
  items: Array<Question | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Question = {
  __typename: "Question";
  id: string;
  title?: string | null;
  options?: ModelQuestionOptionConnection | null;
  form?: Form | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  formQuestionsId?: string | null;
};

export type ModelQuestionOptionConnection = {
  __typename: "ModelQuestionOptionConnection";
  items: Array<QuestionOption | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type QuestionOption = {
  __typename: "QuestionOption";
  id: string;
  questionId: string;
  optionId: string;
  question: Question;
  option: Option;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type Option = {
  __typename: "Option";
  id: string;
  label?: string | null;
  value?: string | null;
  questions?: ModelQuestionOptionConnection | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelFormJobConnection = {
  __typename: "ModelFormJobConnection";
  items: Array<FormJob | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type FormJob = {
  __typename: "FormJob";
  id: string;
  formId: string;
  jobId: string;
  form: Form;
  job: Job;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type Job = {
  __typename: "Job";
  id: string;
  code?: string | null;
  location?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  forms?: ModelFormJobConnection | null;
  crews?: ModelCrewJobConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelCrewJobConnection = {
  __typename: "ModelCrewJobConnection";
  items: Array<CrewJob | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type CrewJob = {
  __typename: "CrewJob";
  id: string;
  jobId: string;
  crewId: string;
  job: Job;
  crew: Crew;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type Crew = {
  __typename: "Crew";
  id: string;
  userName?: string | null;
  role?: string | null;
  DOB?: string | null;
  healthCardNumber?: string | null;
  vaxxStatus?: string | null;
  userAgreement?: string | null;
  companyName?: string | null;
  address?: string | null;
  phonenumber?: string | null;
  name?: string | null;
  email?: string | null;
  defaultJobId?: string | null;
  jobs?: ModelCrewJobConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateFormInput = {
  id: string;
  name?: string | null;
  _version?: number | null;
};

export type DeleteFormInput = {
  id: string;
  _version?: number | null;
};

export type CreateJobInput = {
  id?: string | null;
  code?: string | null;
  location?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  _version?: number | null;
};

export type ModelJobConditionInput = {
  code?: ModelStringInput | null;
  location?: ModelStringInput | null;
  startDate?: ModelStringInput | null;
  endDate?: ModelStringInput | null;
  and?: Array<ModelJobConditionInput | null> | null;
  or?: Array<ModelJobConditionInput | null> | null;
  not?: ModelJobConditionInput | null;
};

export type UpdateJobInput = {
  id: string;
  code?: string | null;
  location?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  _version?: number | null;
};

export type DeleteJobInput = {
  id: string;
  _version?: number | null;
};

export type CreateLocationInput = {
  id?: string | null;
  name?: string | null;
  _version?: number | null;
};

export type ModelLocationConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelLocationConditionInput | null> | null;
  or?: Array<ModelLocationConditionInput | null> | null;
  not?: ModelLocationConditionInput | null;
};

export type Location = {
  __typename: "Location";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateLocationInput = {
  id: string;
  name?: string | null;
  _version?: number | null;
};

export type DeleteLocationInput = {
  id: string;
  _version?: number | null;
};

export type CreateQuestionInput = {
  id?: string | null;
  title?: string | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  _version?: number | null;
  formQuestionsId?: string | null;
};

export type ModelQuestionConditionInput = {
  title?: ModelStringInput | null;
  order?: ModelIntInput | null;
  optionOrderDesc?: ModelBooleanInput | null;
  and?: Array<ModelQuestionConditionInput | null> | null;
  or?: Array<ModelQuestionConditionInput | null> | null;
  not?: ModelQuestionConditionInput | null;
  formQuestionsId?: ModelIDInput | null;
};

export type UpdateQuestionInput = {
  id: string;
  title?: string | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  _version?: number | null;
  formQuestionsId?: string | null;
};

export type DeleteQuestionInput = {
  id: string;
  _version?: number | null;
};

export type CreateOptionInput = {
  id?: string | null;
  label?: string | null;
  value?: string | null;
  order?: number | null;
  _version?: number | null;
};

export type ModelOptionConditionInput = {
  label?: ModelStringInput | null;
  value?: ModelStringInput | null;
  order?: ModelIntInput | null;
  and?: Array<ModelOptionConditionInput | null> | null;
  or?: Array<ModelOptionConditionInput | null> | null;
  not?: ModelOptionConditionInput | null;
};

export type UpdateOptionInput = {
  id: string;
  label?: string | null;
  value?: string | null;
  order?: number | null;
  _version?: number | null;
};

export type DeleteOptionInput = {
  id: string;
  _version?: number | null;
};

export type CreateCrewInput = {
  id?: string | null;
  userName?: string | null;
  role?: string | null;
  DOB?: string | null;
  healthCardNumber?: string | null;
  vaxxStatus?: string | null;
  userAgreement?: string | null;
  companyName?: string | null;
  address?: string | null;
  phonenumber?: string | null;
  name?: string | null;
  email?: string | null;
  defaultJobId?: string | null;
  _version?: number | null;
};

export type ModelCrewConditionInput = {
  userName?: ModelStringInput | null;
  role?: ModelStringInput | null;
  DOB?: ModelStringInput | null;
  healthCardNumber?: ModelStringInput | null;
  vaxxStatus?: ModelStringInput | null;
  userAgreement?: ModelStringInput | null;
  companyName?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phonenumber?: ModelStringInput | null;
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  defaultJobId?: ModelStringInput | null;
  and?: Array<ModelCrewConditionInput | null> | null;
  or?: Array<ModelCrewConditionInput | null> | null;
  not?: ModelCrewConditionInput | null;
};

export type UpdateCrewInput = {
  id: string;
  userName?: string | null;
  role?: string | null;
  DOB?: string | null;
  healthCardNumber?: string | null;
  vaxxStatus?: string | null;
  userAgreement?: string | null;
  companyName?: string | null;
  address?: string | null;
  phonenumber?: string | null;
  name?: string | null;
  email?: string | null;
  defaultJobId?: string | null;
  _version?: number | null;
};

export type DeleteCrewInput = {
  id: string;
  _version?: number | null;
};

export type CreateFormJobInput = {
  id?: string | null;
  formId: string;
  jobId: string;
  _version?: number | null;
};

export type ModelFormJobConditionInput = {
  formId?: ModelIDInput | null;
  jobId?: ModelIDInput | null;
  and?: Array<ModelFormJobConditionInput | null> | null;
  or?: Array<ModelFormJobConditionInput | null> | null;
  not?: ModelFormJobConditionInput | null;
};

export type UpdateFormJobInput = {
  id: string;
  formId?: string | null;
  jobId?: string | null;
  _version?: number | null;
};

export type DeleteFormJobInput = {
  id: string;
  _version?: number | null;
};

export type CreateCrewJobInput = {
  id?: string | null;
  jobId: string;
  crewId: string;
  _version?: number | null;
};

export type ModelCrewJobConditionInput = {
  jobId?: ModelIDInput | null;
  crewId?: ModelIDInput | null;
  and?: Array<ModelCrewJobConditionInput | null> | null;
  or?: Array<ModelCrewJobConditionInput | null> | null;
  not?: ModelCrewJobConditionInput | null;
};

export type UpdateCrewJobInput = {
  id: string;
  jobId?: string | null;
  crewId?: string | null;
  _version?: number | null;
};

export type DeleteCrewJobInput = {
  id: string;
  _version?: number | null;
};

export type CreateQuestionOptionInput = {
  id?: string | null;
  questionId: string;
  optionId: string;
  _version?: number | null;
};

export type ModelQuestionOptionConditionInput = {
  questionId?: ModelIDInput | null;
  optionId?: ModelIDInput | null;
  and?: Array<ModelQuestionOptionConditionInput | null> | null;
  or?: Array<ModelQuestionOptionConditionInput | null> | null;
  not?: ModelQuestionOptionConditionInput | null;
};

export type UpdateQuestionOptionInput = {
  id: string;
  questionId?: string | null;
  optionId?: string | null;
  _version?: number | null;
};

export type DeleteQuestionOptionInput = {
  id: string;
  _version?: number | null;
};

export type ModelSceeningFilterInput = {
  id?: ModelIDInput | null;
  jobId?: ModelStringInput | null;
  jobName?: ModelStringInput | null;
  crewId?: ModelStringInput | null;
  crewName?: ModelStringInput | null;
  crewPhoneNumber?: ModelStringInput | null;
  result?: ModelStringInput | null;
  method?: ModelStringInput | null;
  staffId?: ModelStringInput | null;
  staffName?: ModelStringInput | null;
  processed?: ModelBooleanInput | null;
  location?: ModelStringInput | null;
  processedAt?: ModelStringInput | null;
  submittedAt?: ModelStringInput | null;
  and?: Array<ModelSceeningFilterInput | null> | null;
  or?: Array<ModelSceeningFilterInput | null> | null;
  not?: ModelSceeningFilterInput | null;
};

export type ModelSceeningConnection = {
  __typename: "ModelSceeningConnection";
  items: Array<Sceening | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelAnsweredQuestionFilterInput = {
  id?: ModelIDInput | null;
  question?: ModelStringInput | null;
  answer?: ModelStringInput | null;
  order?: ModelIntInput | null;
  and?: Array<ModelAnsweredQuestionFilterInput | null> | null;
  or?: Array<ModelAnsweredQuestionFilterInput | null> | null;
  not?: ModelAnsweredQuestionFilterInput | null;
  sceeningAnsweredQuestionsId?: ModelIDInput | null;
};

export type ModelFormFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelFormFilterInput | null> | null;
  or?: Array<ModelFormFilterInput | null> | null;
  not?: ModelFormFilterInput | null;
};

export type ModelFormConnection = {
  __typename: "ModelFormConnection";
  items: Array<Form | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelJobFilterInput = {
  id?: ModelIDInput | null;
  code?: ModelStringInput | null;
  location?: ModelStringInput | null;
  startDate?: ModelStringInput | null;
  endDate?: ModelStringInput | null;
  and?: Array<ModelJobFilterInput | null> | null;
  or?: Array<ModelJobFilterInput | null> | null;
  not?: ModelJobFilterInput | null;
};

export type ModelJobConnection = {
  __typename: "ModelJobConnection";
  items: Array<Job | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelLocationFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelLocationFilterInput | null> | null;
  or?: Array<ModelLocationFilterInput | null> | null;
  not?: ModelLocationFilterInput | null;
};

export type ModelLocationConnection = {
  __typename: "ModelLocationConnection";
  items: Array<Location | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  order?: ModelIntInput | null;
  optionOrderDesc?: ModelBooleanInput | null;
  and?: Array<ModelQuestionFilterInput | null> | null;
  or?: Array<ModelQuestionFilterInput | null> | null;
  not?: ModelQuestionFilterInput | null;
  formQuestionsId?: ModelIDInput | null;
};

export type ModelOptionFilterInput = {
  id?: ModelIDInput | null;
  label?: ModelStringInput | null;
  value?: ModelStringInput | null;
  order?: ModelIntInput | null;
  and?: Array<ModelOptionFilterInput | null> | null;
  or?: Array<ModelOptionFilterInput | null> | null;
  not?: ModelOptionFilterInput | null;
};

export type ModelOptionConnection = {
  __typename: "ModelOptionConnection";
  items: Array<Option | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelCrewFilterInput = {
  id?: ModelIDInput | null;
  userName?: ModelStringInput | null;
  role?: ModelStringInput | null;
  DOB?: ModelStringInput | null;
  healthCardNumber?: ModelStringInput | null;
  vaxxStatus?: ModelStringInput | null;
  userAgreement?: ModelStringInput | null;
  companyName?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phonenumber?: ModelStringInput | null;
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  defaultJobId?: ModelStringInput | null;
  and?: Array<ModelCrewFilterInput | null> | null;
  or?: Array<ModelCrewFilterInput | null> | null;
  not?: ModelCrewFilterInput | null;
};

export type ModelCrewConnection = {
  __typename: "ModelCrewConnection";
  items: Array<Crew | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelFormJobFilterInput = {
  id?: ModelIDInput | null;
  formId?: ModelIDInput | null;
  jobId?: ModelIDInput | null;
  and?: Array<ModelFormJobFilterInput | null> | null;
  or?: Array<ModelFormJobFilterInput | null> | null;
  not?: ModelFormJobFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export type ModelCrewJobFilterInput = {
  id?: ModelIDInput | null;
  jobId?: ModelIDInput | null;
  crewId?: ModelIDInput | null;
  and?: Array<ModelCrewJobFilterInput | null> | null;
  or?: Array<ModelCrewJobFilterInput | null> | null;
  not?: ModelCrewJobFilterInput | null;
};

export type ModelQuestionOptionFilterInput = {
  id?: ModelIDInput | null;
  questionId?: ModelIDInput | null;
  optionId?: ModelIDInput | null;
  and?: Array<ModelQuestionOptionFilterInput | null> | null;
  or?: Array<ModelQuestionOptionFilterInput | null> | null;
  not?: ModelQuestionOptionFilterInput | null;
};

export type ModelSubscriptionSceeningFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  jobId?: ModelSubscriptionStringInput | null;
  jobName?: ModelSubscriptionStringInput | null;
  crewId?: ModelSubscriptionStringInput | null;
  crewName?: ModelSubscriptionStringInput | null;
  crewPhoneNumber?: ModelSubscriptionStringInput | null;
  result?: ModelSubscriptionStringInput | null;
  method?: ModelSubscriptionStringInput | null;
  staffId?: ModelSubscriptionStringInput | null;
  staffName?: ModelSubscriptionStringInput | null;
  processed?: ModelSubscriptionBooleanInput | null;
  location?: ModelSubscriptionStringInput | null;
  processedAt?: ModelSubscriptionStringInput | null;
  submittedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionSceeningFilterInput | null> | null;
  or?: Array<ModelSubscriptionSceeningFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
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
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
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
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelSubscriptionAnsweredQuestionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  question?: ModelSubscriptionStringInput | null;
  answer?: ModelSubscriptionStringInput | null;
  order?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionAnsweredQuestionFilterInput | null> | null;
  or?: Array<ModelSubscriptionAnsweredQuestionFilterInput | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionFormFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionFormFilterInput | null> | null;
  or?: Array<ModelSubscriptionFormFilterInput | null> | null;
};

export type ModelSubscriptionJobFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  code?: ModelSubscriptionStringInput | null;
  location?: ModelSubscriptionStringInput | null;
  startDate?: ModelSubscriptionStringInput | null;
  endDate?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionJobFilterInput | null> | null;
  or?: Array<ModelSubscriptionJobFilterInput | null> | null;
};

export type ModelSubscriptionLocationFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionLocationFilterInput | null> | null;
  or?: Array<ModelSubscriptionLocationFilterInput | null> | null;
};

export type ModelSubscriptionQuestionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  title?: ModelSubscriptionStringInput | null;
  order?: ModelSubscriptionIntInput | null;
  optionOrderDesc?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionQuestionFilterInput | null> | null;
  or?: Array<ModelSubscriptionQuestionFilterInput | null> | null;
};

export type ModelSubscriptionOptionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  label?: ModelSubscriptionStringInput | null;
  value?: ModelSubscriptionStringInput | null;
  order?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionOptionFilterInput | null> | null;
  or?: Array<ModelSubscriptionOptionFilterInput | null> | null;
};

export type ModelSubscriptionCrewFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userName?: ModelSubscriptionStringInput | null;
  role?: ModelSubscriptionStringInput | null;
  DOB?: ModelSubscriptionStringInput | null;
  healthCardNumber?: ModelSubscriptionStringInput | null;
  vaxxStatus?: ModelSubscriptionStringInput | null;
  userAgreement?: ModelSubscriptionStringInput | null;
  companyName?: ModelSubscriptionStringInput | null;
  address?: ModelSubscriptionStringInput | null;
  phonenumber?: ModelSubscriptionStringInput | null;
  name?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  defaultJobId?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCrewFilterInput | null> | null;
  or?: Array<ModelSubscriptionCrewFilterInput | null> | null;
};

export type ModelSubscriptionFormJobFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  formId?: ModelSubscriptionIDInput | null;
  jobId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionFormJobFilterInput | null> | null;
  or?: Array<ModelSubscriptionFormJobFilterInput | null> | null;
};

export type ModelSubscriptionCrewJobFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  jobId?: ModelSubscriptionIDInput | null;
  crewId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionCrewJobFilterInput | null> | null;
  or?: Array<ModelSubscriptionCrewJobFilterInput | null> | null;
};

export type ModelSubscriptionQuestionOptionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  questionId?: ModelSubscriptionIDInput | null;
  optionId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionQuestionOptionFilterInput | null> | null;
  or?: Array<ModelSubscriptionQuestionOptionFilterInput | null> | null;
};

export type CreateSceeningMutation = {
  __typename: "Sceening";
  id: string;
  jobId?: string | null;
  jobName?: string | null;
  crewId?: string | null;
  crewName?: string | null;
  crewPhoneNumber?: string | null;
  result?: string | null;
  method?: string | null;
  staffId?: string | null;
  staffName?: string | null;
  processed?: boolean | null;
  location?: string | null;
  processedAt?: string | null;
  submittedAt?: string | null;
  answeredQuestions?: {
    __typename: "ModelAnsweredQuestionConnection";
    items: Array<{
      __typename: "AnsweredQuestion";
      id: string;
      question?: string | null;
      answer?: string | null;
      sceening?: {
        __typename: "Sceening";
        id: string;
        jobId?: string | null;
        jobName?: string | null;
        crewId?: string | null;
        crewName?: string | null;
        crewPhoneNumber?: string | null;
        result?: string | null;
        method?: string | null;
        staffId?: string | null;
        staffName?: string | null;
        processed?: boolean | null;
        location?: string | null;
        processedAt?: string | null;
        submittedAt?: string | null;
        answeredQuestions?: {
          __typename: "ModelAnsweredQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      order?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      sceeningAnsweredQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateSceeningMutation = {
  __typename: "Sceening";
  id: string;
  jobId?: string | null;
  jobName?: string | null;
  crewId?: string | null;
  crewName?: string | null;
  crewPhoneNumber?: string | null;
  result?: string | null;
  method?: string | null;
  staffId?: string | null;
  staffName?: string | null;
  processed?: boolean | null;
  location?: string | null;
  processedAt?: string | null;
  submittedAt?: string | null;
  answeredQuestions?: {
    __typename: "ModelAnsweredQuestionConnection";
    items: Array<{
      __typename: "AnsweredQuestion";
      id: string;
      question?: string | null;
      answer?: string | null;
      sceening?: {
        __typename: "Sceening";
        id: string;
        jobId?: string | null;
        jobName?: string | null;
        crewId?: string | null;
        crewName?: string | null;
        crewPhoneNumber?: string | null;
        result?: string | null;
        method?: string | null;
        staffId?: string | null;
        staffName?: string | null;
        processed?: boolean | null;
        location?: string | null;
        processedAt?: string | null;
        submittedAt?: string | null;
        answeredQuestions?: {
          __typename: "ModelAnsweredQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      order?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      sceeningAnsweredQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteSceeningMutation = {
  __typename: "Sceening";
  id: string;
  jobId?: string | null;
  jobName?: string | null;
  crewId?: string | null;
  crewName?: string | null;
  crewPhoneNumber?: string | null;
  result?: string | null;
  method?: string | null;
  staffId?: string | null;
  staffName?: string | null;
  processed?: boolean | null;
  location?: string | null;
  processedAt?: string | null;
  submittedAt?: string | null;
  answeredQuestions?: {
    __typename: "ModelAnsweredQuestionConnection";
    items: Array<{
      __typename: "AnsweredQuestion";
      id: string;
      question?: string | null;
      answer?: string | null;
      sceening?: {
        __typename: "Sceening";
        id: string;
        jobId?: string | null;
        jobName?: string | null;
        crewId?: string | null;
        crewName?: string | null;
        crewPhoneNumber?: string | null;
        result?: string | null;
        method?: string | null;
        staffId?: string | null;
        staffName?: string | null;
        processed?: boolean | null;
        location?: string | null;
        processedAt?: string | null;
        submittedAt?: string | null;
        answeredQuestions?: {
          __typename: "ModelAnsweredQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      order?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      sceeningAnsweredQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateAnsweredQuestionMutation = {
  __typename: "AnsweredQuestion";
  id: string;
  question?: string | null;
  answer?: string | null;
  sceening?: {
    __typename: "Sceening";
    id: string;
    jobId?: string | null;
    jobName?: string | null;
    crewId?: string | null;
    crewName?: string | null;
    crewPhoneNumber?: string | null;
    result?: string | null;
    method?: string | null;
    staffId?: string | null;
    staffName?: string | null;
    processed?: boolean | null;
    location?: string | null;
    processedAt?: string | null;
    submittedAt?: string | null;
    answeredQuestions?: {
      __typename: "ModelAnsweredQuestionConnection";
      items: Array<{
        __typename: "AnsweredQuestion";
        id: string;
        question?: string | null;
        answer?: string | null;
        sceening?: {
          __typename: "Sceening";
          id: string;
          jobId?: string | null;
          jobName?: string | null;
          crewId?: string | null;
          crewName?: string | null;
          crewPhoneNumber?: string | null;
          result?: string | null;
          method?: string | null;
          staffId?: string | null;
          staffName?: string | null;
          processed?: boolean | null;
          location?: string | null;
          processedAt?: string | null;
          submittedAt?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        sceeningAnsweredQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  sceeningAnsweredQuestionsId?: string | null;
};

export type UpdateAnsweredQuestionMutation = {
  __typename: "AnsweredQuestion";
  id: string;
  question?: string | null;
  answer?: string | null;
  sceening?: {
    __typename: "Sceening";
    id: string;
    jobId?: string | null;
    jobName?: string | null;
    crewId?: string | null;
    crewName?: string | null;
    crewPhoneNumber?: string | null;
    result?: string | null;
    method?: string | null;
    staffId?: string | null;
    staffName?: string | null;
    processed?: boolean | null;
    location?: string | null;
    processedAt?: string | null;
    submittedAt?: string | null;
    answeredQuestions?: {
      __typename: "ModelAnsweredQuestionConnection";
      items: Array<{
        __typename: "AnsweredQuestion";
        id: string;
        question?: string | null;
        answer?: string | null;
        sceening?: {
          __typename: "Sceening";
          id: string;
          jobId?: string | null;
          jobName?: string | null;
          crewId?: string | null;
          crewName?: string | null;
          crewPhoneNumber?: string | null;
          result?: string | null;
          method?: string | null;
          staffId?: string | null;
          staffName?: string | null;
          processed?: boolean | null;
          location?: string | null;
          processedAt?: string | null;
          submittedAt?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        sceeningAnsweredQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  sceeningAnsweredQuestionsId?: string | null;
};

export type DeleteAnsweredQuestionMutation = {
  __typename: "AnsweredQuestion";
  id: string;
  question?: string | null;
  answer?: string | null;
  sceening?: {
    __typename: "Sceening";
    id: string;
    jobId?: string | null;
    jobName?: string | null;
    crewId?: string | null;
    crewName?: string | null;
    crewPhoneNumber?: string | null;
    result?: string | null;
    method?: string | null;
    staffId?: string | null;
    staffName?: string | null;
    processed?: boolean | null;
    location?: string | null;
    processedAt?: string | null;
    submittedAt?: string | null;
    answeredQuestions?: {
      __typename: "ModelAnsweredQuestionConnection";
      items: Array<{
        __typename: "AnsweredQuestion";
        id: string;
        question?: string | null;
        answer?: string | null;
        sceening?: {
          __typename: "Sceening";
          id: string;
          jobId?: string | null;
          jobName?: string | null;
          crewId?: string | null;
          crewName?: string | null;
          crewPhoneNumber?: string | null;
          result?: string | null;
          method?: string | null;
          staffId?: string | null;
          staffName?: string | null;
          processed?: boolean | null;
          location?: string | null;
          processedAt?: string | null;
          submittedAt?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        sceeningAnsweredQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  sceeningAnsweredQuestionsId?: string | null;
};

export type CreateFormMutation = {
  __typename: "Form";
  id: string;
  name?: string | null;
  questions?: {
    __typename: "ModelQuestionConnection";
    items: Array<{
      __typename: "Question";
      id: string;
      title?: string | null;
      options?: {
        __typename: "ModelQuestionOptionConnection";
        items: Array<{
          __typename: "QuestionOption";
          id: string;
          questionId: string;
          optionId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      form?: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      formQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  jobs?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      form: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateFormMutation = {
  __typename: "Form";
  id: string;
  name?: string | null;
  questions?: {
    __typename: "ModelQuestionConnection";
    items: Array<{
      __typename: "Question";
      id: string;
      title?: string | null;
      options?: {
        __typename: "ModelQuestionOptionConnection";
        items: Array<{
          __typename: "QuestionOption";
          id: string;
          questionId: string;
          optionId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      form?: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      formQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  jobs?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      form: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteFormMutation = {
  __typename: "Form";
  id: string;
  name?: string | null;
  questions?: {
    __typename: "ModelQuestionConnection";
    items: Array<{
      __typename: "Question";
      id: string;
      title?: string | null;
      options?: {
        __typename: "ModelQuestionOptionConnection";
        items: Array<{
          __typename: "QuestionOption";
          id: string;
          questionId: string;
          optionId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      form?: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      formQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  jobs?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      form: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateJobMutation = {
  __typename: "Job";
  id: string;
  code?: string | null;
  location?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      form: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  crews?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      crew: {
        __typename: "Crew";
        id: string;
        userName?: string | null;
        role?: string | null;
        DOB?: string | null;
        healthCardNumber?: string | null;
        vaxxStatus?: string | null;
        userAgreement?: string | null;
        companyName?: string | null;
        address?: string | null;
        phonenumber?: string | null;
        name?: string | null;
        email?: string | null;
        defaultJobId?: string | null;
        jobs?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateJobMutation = {
  __typename: "Job";
  id: string;
  code?: string | null;
  location?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      form: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  crews?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      crew: {
        __typename: "Crew";
        id: string;
        userName?: string | null;
        role?: string | null;
        DOB?: string | null;
        healthCardNumber?: string | null;
        vaxxStatus?: string | null;
        userAgreement?: string | null;
        companyName?: string | null;
        address?: string | null;
        phonenumber?: string | null;
        name?: string | null;
        email?: string | null;
        defaultJobId?: string | null;
        jobs?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteJobMutation = {
  __typename: "Job";
  id: string;
  code?: string | null;
  location?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      form: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  crews?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      crew: {
        __typename: "Crew";
        id: string;
        userName?: string | null;
        role?: string | null;
        DOB?: string | null;
        healthCardNumber?: string | null;
        vaxxStatus?: string | null;
        userAgreement?: string | null;
        companyName?: string | null;
        address?: string | null;
        phonenumber?: string | null;
        name?: string | null;
        email?: string | null;
        defaultJobId?: string | null;
        jobs?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateLocationMutation = {
  __typename: "Location";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateLocationMutation = {
  __typename: "Location";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteLocationMutation = {
  __typename: "Location";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateQuestionMutation = {
  __typename: "Question";
  id: string;
  title?: string | null;
  options?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionId: string;
      optionId: string;
      question: {
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      };
      option: {
        __typename: "Option";
        id: string;
        label?: string | null;
        value?: string | null;
        questions?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  form?: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      items: Array<{
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  formQuestionsId?: string | null;
};

export type UpdateQuestionMutation = {
  __typename: "Question";
  id: string;
  title?: string | null;
  options?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionId: string;
      optionId: string;
      question: {
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      };
      option: {
        __typename: "Option";
        id: string;
        label?: string | null;
        value?: string | null;
        questions?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  form?: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      items: Array<{
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  formQuestionsId?: string | null;
};

export type DeleteQuestionMutation = {
  __typename: "Question";
  id: string;
  title?: string | null;
  options?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionId: string;
      optionId: string;
      question: {
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      };
      option: {
        __typename: "Option";
        id: string;
        label?: string | null;
        value?: string | null;
        questions?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  form?: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      items: Array<{
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  formQuestionsId?: string | null;
};

export type CreateOptionMutation = {
  __typename: "Option";
  id: string;
  label?: string | null;
  value?: string | null;
  questions?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionId: string;
      optionId: string;
      question: {
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      };
      option: {
        __typename: "Option";
        id: string;
        label?: string | null;
        value?: string | null;
        questions?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateOptionMutation = {
  __typename: "Option";
  id: string;
  label?: string | null;
  value?: string | null;
  questions?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionId: string;
      optionId: string;
      question: {
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      };
      option: {
        __typename: "Option";
        id: string;
        label?: string | null;
        value?: string | null;
        questions?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteOptionMutation = {
  __typename: "Option";
  id: string;
  label?: string | null;
  value?: string | null;
  questions?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionId: string;
      optionId: string;
      question: {
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      };
      option: {
        __typename: "Option";
        id: string;
        label?: string | null;
        value?: string | null;
        questions?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateCrewMutation = {
  __typename: "Crew";
  id: string;
  userName?: string | null;
  role?: string | null;
  DOB?: string | null;
  healthCardNumber?: string | null;
  vaxxStatus?: string | null;
  userAgreement?: string | null;
  companyName?: string | null;
  address?: string | null;
  phonenumber?: string | null;
  name?: string | null;
  email?: string | null;
  defaultJobId?: string | null;
  jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      crew: {
        __typename: "Crew";
        id: string;
        userName?: string | null;
        role?: string | null;
        DOB?: string | null;
        healthCardNumber?: string | null;
        vaxxStatus?: string | null;
        userAgreement?: string | null;
        companyName?: string | null;
        address?: string | null;
        phonenumber?: string | null;
        name?: string | null;
        email?: string | null;
        defaultJobId?: string | null;
        jobs?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateCrewMutation = {
  __typename: "Crew";
  id: string;
  userName?: string | null;
  role?: string | null;
  DOB?: string | null;
  healthCardNumber?: string | null;
  vaxxStatus?: string | null;
  userAgreement?: string | null;
  companyName?: string | null;
  address?: string | null;
  phonenumber?: string | null;
  name?: string | null;
  email?: string | null;
  defaultJobId?: string | null;
  jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      crew: {
        __typename: "Crew";
        id: string;
        userName?: string | null;
        role?: string | null;
        DOB?: string | null;
        healthCardNumber?: string | null;
        vaxxStatus?: string | null;
        userAgreement?: string | null;
        companyName?: string | null;
        address?: string | null;
        phonenumber?: string | null;
        name?: string | null;
        email?: string | null;
        defaultJobId?: string | null;
        jobs?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteCrewMutation = {
  __typename: "Crew";
  id: string;
  userName?: string | null;
  role?: string | null;
  DOB?: string | null;
  healthCardNumber?: string | null;
  vaxxStatus?: string | null;
  userAgreement?: string | null;
  companyName?: string | null;
  address?: string | null;
  phonenumber?: string | null;
  name?: string | null;
  email?: string | null;
  defaultJobId?: string | null;
  jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      crew: {
        __typename: "Crew";
        id: string;
        userName?: string | null;
        role?: string | null;
        DOB?: string | null;
        healthCardNumber?: string | null;
        vaxxStatus?: string | null;
        userAgreement?: string | null;
        companyName?: string | null;
        address?: string | null;
        phonenumber?: string | null;
        name?: string | null;
        email?: string | null;
        defaultJobId?: string | null;
        jobs?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateFormJobMutation = {
  __typename: "FormJob";
  id: string;
  formId: string;
  jobId: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      items: Array<{
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    location?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateFormJobMutation = {
  __typename: "FormJob";
  id: string;
  formId: string;
  jobId: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      items: Array<{
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    location?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteFormJobMutation = {
  __typename: "FormJob";
  id: string;
  formId: string;
  jobId: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      items: Array<{
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    location?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateCrewJobMutation = {
  __typename: "CrewJob";
  id: string;
  jobId: string;
  crewId: string;
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    location?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    role?: string | null;
    DOB?: string | null;
    healthCardNumber?: string | null;
    vaxxStatus?: string | null;
    userAgreement?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateCrewJobMutation = {
  __typename: "CrewJob";
  id: string;
  jobId: string;
  crewId: string;
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    location?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    role?: string | null;
    DOB?: string | null;
    healthCardNumber?: string | null;
    vaxxStatus?: string | null;
    userAgreement?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteCrewJobMutation = {
  __typename: "CrewJob";
  id: string;
  jobId: string;
  crewId: string;
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    location?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    role?: string | null;
    DOB?: string | null;
    healthCardNumber?: string | null;
    vaxxStatus?: string | null;
    userAgreement?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateQuestionOptionMutation = {
  __typename: "QuestionOption";
  id: string;
  questionId: string;
  optionId: string;
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    options?: {
      __typename: "ModelQuestionOptionConnection";
      items: Array<{
        __typename: "QuestionOption";
        id: string;
        questionId: string;
        optionId: string;
        question: {
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        };
        option: {
          __typename: "Option";
          id: string;
          label?: string | null;
          value?: string | null;
          order?: number | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    form?: {
      __typename: "Form";
      id: string;
      name?: string | null;
      questions?: {
        __typename: "ModelQuestionConnection";
        items: Array<{
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      jobs?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    formQuestionsId?: string | null;
  };
  option: {
    __typename: "Option";
    id: string;
    label?: string | null;
    value?: string | null;
    questions?: {
      __typename: "ModelQuestionOptionConnection";
      items: Array<{
        __typename: "QuestionOption";
        id: string;
        questionId: string;
        optionId: string;
        question: {
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        };
        option: {
          __typename: "Option";
          id: string;
          label?: string | null;
          value?: string | null;
          order?: number | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateQuestionOptionMutation = {
  __typename: "QuestionOption";
  id: string;
  questionId: string;
  optionId: string;
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    options?: {
      __typename: "ModelQuestionOptionConnection";
      items: Array<{
        __typename: "QuestionOption";
        id: string;
        questionId: string;
        optionId: string;
        question: {
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        };
        option: {
          __typename: "Option";
          id: string;
          label?: string | null;
          value?: string | null;
          order?: number | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    form?: {
      __typename: "Form";
      id: string;
      name?: string | null;
      questions?: {
        __typename: "ModelQuestionConnection";
        items: Array<{
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      jobs?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    formQuestionsId?: string | null;
  };
  option: {
    __typename: "Option";
    id: string;
    label?: string | null;
    value?: string | null;
    questions?: {
      __typename: "ModelQuestionOptionConnection";
      items: Array<{
        __typename: "QuestionOption";
        id: string;
        questionId: string;
        optionId: string;
        question: {
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        };
        option: {
          __typename: "Option";
          id: string;
          label?: string | null;
          value?: string | null;
          order?: number | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteQuestionOptionMutation = {
  __typename: "QuestionOption";
  id: string;
  questionId: string;
  optionId: string;
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    options?: {
      __typename: "ModelQuestionOptionConnection";
      items: Array<{
        __typename: "QuestionOption";
        id: string;
        questionId: string;
        optionId: string;
        question: {
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        };
        option: {
          __typename: "Option";
          id: string;
          label?: string | null;
          value?: string | null;
          order?: number | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    form?: {
      __typename: "Form";
      id: string;
      name?: string | null;
      questions?: {
        __typename: "ModelQuestionConnection";
        items: Array<{
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      jobs?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    formQuestionsId?: string | null;
  };
  option: {
    __typename: "Option";
    id: string;
    label?: string | null;
    value?: string | null;
    questions?: {
      __typename: "ModelQuestionOptionConnection";
      items: Array<{
        __typename: "QuestionOption";
        id: string;
        questionId: string;
        optionId: string;
        question: {
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        };
        option: {
          __typename: "Option";
          id: string;
          label?: string | null;
          value?: string | null;
          order?: number | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type GetSceeningQuery = {
  __typename: "Sceening";
  id: string;
  jobId?: string | null;
  jobName?: string | null;
  crewId?: string | null;
  crewName?: string | null;
  crewPhoneNumber?: string | null;
  result?: string | null;
  method?: string | null;
  staffId?: string | null;
  staffName?: string | null;
  processed?: boolean | null;
  location?: string | null;
  processedAt?: string | null;
  submittedAt?: string | null;
  answeredQuestions?: {
    __typename: "ModelAnsweredQuestionConnection";
    items: Array<{
      __typename: "AnsweredQuestion";
      id: string;
      question?: string | null;
      answer?: string | null;
      sceening?: {
        __typename: "Sceening";
        id: string;
        jobId?: string | null;
        jobName?: string | null;
        crewId?: string | null;
        crewName?: string | null;
        crewPhoneNumber?: string | null;
        result?: string | null;
        method?: string | null;
        staffId?: string | null;
        staffName?: string | null;
        processed?: boolean | null;
        location?: string | null;
        processedAt?: string | null;
        submittedAt?: string | null;
        answeredQuestions?: {
          __typename: "ModelAnsweredQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      order?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      sceeningAnsweredQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListSceeningsQuery = {
  __typename: "ModelSceeningConnection";
  items: Array<{
    __typename: "Sceening";
    id: string;
    jobId?: string | null;
    jobName?: string | null;
    crewId?: string | null;
    crewName?: string | null;
    crewPhoneNumber?: string | null;
    result?: string | null;
    method?: string | null;
    staffId?: string | null;
    staffName?: string | null;
    processed?: boolean | null;
    location?: string | null;
    processedAt?: string | null;
    submittedAt?: string | null;
    answeredQuestions?: {
      __typename: "ModelAnsweredQuestionConnection";
      items: Array<{
        __typename: "AnsweredQuestion";
        id: string;
        question?: string | null;
        answer?: string | null;
        sceening?: {
          __typename: "Sceening";
          id: string;
          jobId?: string | null;
          jobName?: string | null;
          crewId?: string | null;
          crewName?: string | null;
          crewPhoneNumber?: string | null;
          result?: string | null;
          method?: string | null;
          staffId?: string | null;
          staffName?: string | null;
          processed?: boolean | null;
          location?: string | null;
          processedAt?: string | null;
          submittedAt?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        sceeningAnsweredQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncSceeningsQuery = {
  __typename: "ModelSceeningConnection";
  items: Array<{
    __typename: "Sceening";
    id: string;
    jobId?: string | null;
    jobName?: string | null;
    crewId?: string | null;
    crewName?: string | null;
    crewPhoneNumber?: string | null;
    result?: string | null;
    method?: string | null;
    staffId?: string | null;
    staffName?: string | null;
    processed?: boolean | null;
    location?: string | null;
    processedAt?: string | null;
    submittedAt?: string | null;
    answeredQuestions?: {
      __typename: "ModelAnsweredQuestionConnection";
      items: Array<{
        __typename: "AnsweredQuestion";
        id: string;
        question?: string | null;
        answer?: string | null;
        sceening?: {
          __typename: "Sceening";
          id: string;
          jobId?: string | null;
          jobName?: string | null;
          crewId?: string | null;
          crewName?: string | null;
          crewPhoneNumber?: string | null;
          result?: string | null;
          method?: string | null;
          staffId?: string | null;
          staffName?: string | null;
          processed?: boolean | null;
          location?: string | null;
          processedAt?: string | null;
          submittedAt?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        sceeningAnsweredQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetAnsweredQuestionQuery = {
  __typename: "AnsweredQuestion";
  id: string;
  question?: string | null;
  answer?: string | null;
  sceening?: {
    __typename: "Sceening";
    id: string;
    jobId?: string | null;
    jobName?: string | null;
    crewId?: string | null;
    crewName?: string | null;
    crewPhoneNumber?: string | null;
    result?: string | null;
    method?: string | null;
    staffId?: string | null;
    staffName?: string | null;
    processed?: boolean | null;
    location?: string | null;
    processedAt?: string | null;
    submittedAt?: string | null;
    answeredQuestions?: {
      __typename: "ModelAnsweredQuestionConnection";
      items: Array<{
        __typename: "AnsweredQuestion";
        id: string;
        question?: string | null;
        answer?: string | null;
        sceening?: {
          __typename: "Sceening";
          id: string;
          jobId?: string | null;
          jobName?: string | null;
          crewId?: string | null;
          crewName?: string | null;
          crewPhoneNumber?: string | null;
          result?: string | null;
          method?: string | null;
          staffId?: string | null;
          staffName?: string | null;
          processed?: boolean | null;
          location?: string | null;
          processedAt?: string | null;
          submittedAt?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        sceeningAnsweredQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  sceeningAnsweredQuestionsId?: string | null;
};

export type ListAnsweredQuestionsQuery = {
  __typename: "ModelAnsweredQuestionConnection";
  items: Array<{
    __typename: "AnsweredQuestion";
    id: string;
    question?: string | null;
    answer?: string | null;
    sceening?: {
      __typename: "Sceening";
      id: string;
      jobId?: string | null;
      jobName?: string | null;
      crewId?: string | null;
      crewName?: string | null;
      crewPhoneNumber?: string | null;
      result?: string | null;
      method?: string | null;
      staffId?: string | null;
      staffName?: string | null;
      processed?: boolean | null;
      location?: string | null;
      processedAt?: string | null;
      submittedAt?: string | null;
      answeredQuestions?: {
        __typename: "ModelAnsweredQuestionConnection";
        items: Array<{
          __typename: "AnsweredQuestion";
          id: string;
          question?: string | null;
          answer?: string | null;
          order?: number | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          sceeningAnsweredQuestionsId?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    sceeningAnsweredQuestionsId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncAnsweredQuestionsQuery = {
  __typename: "ModelAnsweredQuestionConnection";
  items: Array<{
    __typename: "AnsweredQuestion";
    id: string;
    question?: string | null;
    answer?: string | null;
    sceening?: {
      __typename: "Sceening";
      id: string;
      jobId?: string | null;
      jobName?: string | null;
      crewId?: string | null;
      crewName?: string | null;
      crewPhoneNumber?: string | null;
      result?: string | null;
      method?: string | null;
      staffId?: string | null;
      staffName?: string | null;
      processed?: boolean | null;
      location?: string | null;
      processedAt?: string | null;
      submittedAt?: string | null;
      answeredQuestions?: {
        __typename: "ModelAnsweredQuestionConnection";
        items: Array<{
          __typename: "AnsweredQuestion";
          id: string;
          question?: string | null;
          answer?: string | null;
          order?: number | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          sceeningAnsweredQuestionsId?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    sceeningAnsweredQuestionsId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetFormQuery = {
  __typename: "Form";
  id: string;
  name?: string | null;
  questions?: {
    __typename: "ModelQuestionConnection";
    items: Array<{
      __typename: "Question";
      id: string;
      title?: string | null;
      options?: {
        __typename: "ModelQuestionOptionConnection";
        items: Array<{
          __typename: "QuestionOption";
          id: string;
          questionId: string;
          optionId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      form?: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      formQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  jobs?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      form: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListFormsQuery = {
  __typename: "ModelFormConnection";
  items: Array<{
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      items: Array<{
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncFormsQuery = {
  __typename: "ModelFormConnection";
  items: Array<{
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      items: Array<{
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetJobQuery = {
  __typename: "Job";
  id: string;
  code?: string | null;
  location?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      form: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  crews?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      crew: {
        __typename: "Crew";
        id: string;
        userName?: string | null;
        role?: string | null;
        DOB?: string | null;
        healthCardNumber?: string | null;
        vaxxStatus?: string | null;
        userAgreement?: string | null;
        companyName?: string | null;
        address?: string | null;
        phonenumber?: string | null;
        name?: string | null;
        email?: string | null;
        defaultJobId?: string | null;
        jobs?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListJobsQuery = {
  __typename: "ModelJobConnection";
  items: Array<{
    __typename: "Job";
    id: string;
    code?: string | null;
    location?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncJobsQuery = {
  __typename: "ModelJobConnection";
  items: Array<{
    __typename: "Job";
    id: string;
    code?: string | null;
    location?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetLocationQuery = {
  __typename: "Location";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListLocationsQuery = {
  __typename: "ModelLocationConnection";
  items: Array<{
    __typename: "Location";
    id: string;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncLocationsQuery = {
  __typename: "ModelLocationConnection";
  items: Array<{
    __typename: "Location";
    id: string;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetQuestionQuery = {
  __typename: "Question";
  id: string;
  title?: string | null;
  options?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionId: string;
      optionId: string;
      question: {
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      };
      option: {
        __typename: "Option";
        id: string;
        label?: string | null;
        value?: string | null;
        questions?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  form?: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      items: Array<{
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  formQuestionsId?: string | null;
};

export type ListQuestionsQuery = {
  __typename: "ModelQuestionConnection";
  items: Array<{
    __typename: "Question";
    id: string;
    title?: string | null;
    options?: {
      __typename: "ModelQuestionOptionConnection";
      items: Array<{
        __typename: "QuestionOption";
        id: string;
        questionId: string;
        optionId: string;
        question: {
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        };
        option: {
          __typename: "Option";
          id: string;
          label?: string | null;
          value?: string | null;
          order?: number | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    form?: {
      __typename: "Form";
      id: string;
      name?: string | null;
      questions?: {
        __typename: "ModelQuestionConnection";
        items: Array<{
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      jobs?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    formQuestionsId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncQuestionsQuery = {
  __typename: "ModelQuestionConnection";
  items: Array<{
    __typename: "Question";
    id: string;
    title?: string | null;
    options?: {
      __typename: "ModelQuestionOptionConnection";
      items: Array<{
        __typename: "QuestionOption";
        id: string;
        questionId: string;
        optionId: string;
        question: {
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        };
        option: {
          __typename: "Option";
          id: string;
          label?: string | null;
          value?: string | null;
          order?: number | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    form?: {
      __typename: "Form";
      id: string;
      name?: string | null;
      questions?: {
        __typename: "ModelQuestionConnection";
        items: Array<{
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      jobs?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    formQuestionsId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetOptionQuery = {
  __typename: "Option";
  id: string;
  label?: string | null;
  value?: string | null;
  questions?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionId: string;
      optionId: string;
      question: {
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      };
      option: {
        __typename: "Option";
        id: string;
        label?: string | null;
        value?: string | null;
        questions?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListOptionsQuery = {
  __typename: "ModelOptionConnection";
  items: Array<{
    __typename: "Option";
    id: string;
    label?: string | null;
    value?: string | null;
    questions?: {
      __typename: "ModelQuestionOptionConnection";
      items: Array<{
        __typename: "QuestionOption";
        id: string;
        questionId: string;
        optionId: string;
        question: {
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        };
        option: {
          __typename: "Option";
          id: string;
          label?: string | null;
          value?: string | null;
          order?: number | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncOptionsQuery = {
  __typename: "ModelOptionConnection";
  items: Array<{
    __typename: "Option";
    id: string;
    label?: string | null;
    value?: string | null;
    questions?: {
      __typename: "ModelQuestionOptionConnection";
      items: Array<{
        __typename: "QuestionOption";
        id: string;
        questionId: string;
        optionId: string;
        question: {
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        };
        option: {
          __typename: "Option";
          id: string;
          label?: string | null;
          value?: string | null;
          order?: number | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetCrewQuery = {
  __typename: "Crew";
  id: string;
  userName?: string | null;
  role?: string | null;
  DOB?: string | null;
  healthCardNumber?: string | null;
  vaxxStatus?: string | null;
  userAgreement?: string | null;
  companyName?: string | null;
  address?: string | null;
  phonenumber?: string | null;
  name?: string | null;
  email?: string | null;
  defaultJobId?: string | null;
  jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      crew: {
        __typename: "Crew";
        id: string;
        userName?: string | null;
        role?: string | null;
        DOB?: string | null;
        healthCardNumber?: string | null;
        vaxxStatus?: string | null;
        userAgreement?: string | null;
        companyName?: string | null;
        address?: string | null;
        phonenumber?: string | null;
        name?: string | null;
        email?: string | null;
        defaultJobId?: string | null;
        jobs?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListCrewsQuery = {
  __typename: "ModelCrewConnection";
  items: Array<{
    __typename: "Crew";
    id: string;
    userName?: string | null;
    role?: string | null;
    DOB?: string | null;
    healthCardNumber?: string | null;
    vaxxStatus?: string | null;
    userAgreement?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncCrewsQuery = {
  __typename: "ModelCrewConnection";
  items: Array<{
    __typename: "Crew";
    id: string;
    userName?: string | null;
    role?: string | null;
    DOB?: string | null;
    healthCardNumber?: string | null;
    vaxxStatus?: string | null;
    userAgreement?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetFormJobQuery = {
  __typename: "FormJob";
  id: string;
  formId: string;
  jobId: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      items: Array<{
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    location?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListFormJobsQuery = {
  __typename: "ModelFormJobConnection";
  items: Array<{
    __typename: "FormJob";
    id: string;
    formId: string;
    jobId: string;
    form: {
      __typename: "Form";
      id: string;
      name?: string | null;
      questions?: {
        __typename: "ModelQuestionConnection";
        items: Array<{
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      jobs?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    job: {
      __typename: "Job";
      id: string;
      code?: string | null;
      location?: string | null;
      startDate?: string | null;
      endDate?: string | null;
      forms?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      crews?: {
        __typename: "ModelCrewJobConnection";
        items: Array<{
          __typename: "CrewJob";
          id: string;
          jobId: string;
          crewId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncFormJobsQuery = {
  __typename: "ModelFormJobConnection";
  items: Array<{
    __typename: "FormJob";
    id: string;
    formId: string;
    jobId: string;
    form: {
      __typename: "Form";
      id: string;
      name?: string | null;
      questions?: {
        __typename: "ModelQuestionConnection";
        items: Array<{
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      jobs?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    job: {
      __typename: "Job";
      id: string;
      code?: string | null;
      location?: string | null;
      startDate?: string | null;
      endDate?: string | null;
      forms?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      crews?: {
        __typename: "ModelCrewJobConnection";
        items: Array<{
          __typename: "CrewJob";
          id: string;
          jobId: string;
          crewId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type FormJobsByFormIdQuery = {
  __typename: "ModelFormJobConnection";
  items: Array<{
    __typename: "FormJob";
    id: string;
    formId: string;
    jobId: string;
    form: {
      __typename: "Form";
      id: string;
      name?: string | null;
      questions?: {
        __typename: "ModelQuestionConnection";
        items: Array<{
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      jobs?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    job: {
      __typename: "Job";
      id: string;
      code?: string | null;
      location?: string | null;
      startDate?: string | null;
      endDate?: string | null;
      forms?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      crews?: {
        __typename: "ModelCrewJobConnection";
        items: Array<{
          __typename: "CrewJob";
          id: string;
          jobId: string;
          crewId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type FormJobsByJobIdQuery = {
  __typename: "ModelFormJobConnection";
  items: Array<{
    __typename: "FormJob";
    id: string;
    formId: string;
    jobId: string;
    form: {
      __typename: "Form";
      id: string;
      name?: string | null;
      questions?: {
        __typename: "ModelQuestionConnection";
        items: Array<{
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      jobs?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    job: {
      __typename: "Job";
      id: string;
      code?: string | null;
      location?: string | null;
      startDate?: string | null;
      endDate?: string | null;
      forms?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      crews?: {
        __typename: "ModelCrewJobConnection";
        items: Array<{
          __typename: "CrewJob";
          id: string;
          jobId: string;
          crewId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetCrewJobQuery = {
  __typename: "CrewJob";
  id: string;
  jobId: string;
  crewId: string;
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    location?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    role?: string | null;
    DOB?: string | null;
    healthCardNumber?: string | null;
    vaxxStatus?: string | null;
    userAgreement?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListCrewJobsQuery = {
  __typename: "ModelCrewJobConnection";
  items: Array<{
    __typename: "CrewJob";
    id: string;
    jobId: string;
    crewId: string;
    job: {
      __typename: "Job";
      id: string;
      code?: string | null;
      location?: string | null;
      startDate?: string | null;
      endDate?: string | null;
      forms?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      crews?: {
        __typename: "ModelCrewJobConnection";
        items: Array<{
          __typename: "CrewJob";
          id: string;
          jobId: string;
          crewId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    crew: {
      __typename: "Crew";
      id: string;
      userName?: string | null;
      role?: string | null;
      DOB?: string | null;
      healthCardNumber?: string | null;
      vaxxStatus?: string | null;
      userAgreement?: string | null;
      companyName?: string | null;
      address?: string | null;
      phonenumber?: string | null;
      name?: string | null;
      email?: string | null;
      defaultJobId?: string | null;
      jobs?: {
        __typename: "ModelCrewJobConnection";
        items: Array<{
          __typename: "CrewJob";
          id: string;
          jobId: string;
          crewId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncCrewJobsQuery = {
  __typename: "ModelCrewJobConnection";
  items: Array<{
    __typename: "CrewJob";
    id: string;
    jobId: string;
    crewId: string;
    job: {
      __typename: "Job";
      id: string;
      code?: string | null;
      location?: string | null;
      startDate?: string | null;
      endDate?: string | null;
      forms?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      crews?: {
        __typename: "ModelCrewJobConnection";
        items: Array<{
          __typename: "CrewJob";
          id: string;
          jobId: string;
          crewId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    crew: {
      __typename: "Crew";
      id: string;
      userName?: string | null;
      role?: string | null;
      DOB?: string | null;
      healthCardNumber?: string | null;
      vaxxStatus?: string | null;
      userAgreement?: string | null;
      companyName?: string | null;
      address?: string | null;
      phonenumber?: string | null;
      name?: string | null;
      email?: string | null;
      defaultJobId?: string | null;
      jobs?: {
        __typename: "ModelCrewJobConnection";
        items: Array<{
          __typename: "CrewJob";
          id: string;
          jobId: string;
          crewId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type CrewJobsByJobIdQuery = {
  __typename: "ModelCrewJobConnection";
  items: Array<{
    __typename: "CrewJob";
    id: string;
    jobId: string;
    crewId: string;
    job: {
      __typename: "Job";
      id: string;
      code?: string | null;
      location?: string | null;
      startDate?: string | null;
      endDate?: string | null;
      forms?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      crews?: {
        __typename: "ModelCrewJobConnection";
        items: Array<{
          __typename: "CrewJob";
          id: string;
          jobId: string;
          crewId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    crew: {
      __typename: "Crew";
      id: string;
      userName?: string | null;
      role?: string | null;
      DOB?: string | null;
      healthCardNumber?: string | null;
      vaxxStatus?: string | null;
      userAgreement?: string | null;
      companyName?: string | null;
      address?: string | null;
      phonenumber?: string | null;
      name?: string | null;
      email?: string | null;
      defaultJobId?: string | null;
      jobs?: {
        __typename: "ModelCrewJobConnection";
        items: Array<{
          __typename: "CrewJob";
          id: string;
          jobId: string;
          crewId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type CrewJobsByCrewIdQuery = {
  __typename: "ModelCrewJobConnection";
  items: Array<{
    __typename: "CrewJob";
    id: string;
    jobId: string;
    crewId: string;
    job: {
      __typename: "Job";
      id: string;
      code?: string | null;
      location?: string | null;
      startDate?: string | null;
      endDate?: string | null;
      forms?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      crews?: {
        __typename: "ModelCrewJobConnection";
        items: Array<{
          __typename: "CrewJob";
          id: string;
          jobId: string;
          crewId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    crew: {
      __typename: "Crew";
      id: string;
      userName?: string | null;
      role?: string | null;
      DOB?: string | null;
      healthCardNumber?: string | null;
      vaxxStatus?: string | null;
      userAgreement?: string | null;
      companyName?: string | null;
      address?: string | null;
      phonenumber?: string | null;
      name?: string | null;
      email?: string | null;
      defaultJobId?: string | null;
      jobs?: {
        __typename: "ModelCrewJobConnection";
        items: Array<{
          __typename: "CrewJob";
          id: string;
          jobId: string;
          crewId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetQuestionOptionQuery = {
  __typename: "QuestionOption";
  id: string;
  questionId: string;
  optionId: string;
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    options?: {
      __typename: "ModelQuestionOptionConnection";
      items: Array<{
        __typename: "QuestionOption";
        id: string;
        questionId: string;
        optionId: string;
        question: {
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        };
        option: {
          __typename: "Option";
          id: string;
          label?: string | null;
          value?: string | null;
          order?: number | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    form?: {
      __typename: "Form";
      id: string;
      name?: string | null;
      questions?: {
        __typename: "ModelQuestionConnection";
        items: Array<{
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      jobs?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    formQuestionsId?: string | null;
  };
  option: {
    __typename: "Option";
    id: string;
    label?: string | null;
    value?: string | null;
    questions?: {
      __typename: "ModelQuestionOptionConnection";
      items: Array<{
        __typename: "QuestionOption";
        id: string;
        questionId: string;
        optionId: string;
        question: {
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        };
        option: {
          __typename: "Option";
          id: string;
          label?: string | null;
          value?: string | null;
          order?: number | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListQuestionOptionsQuery = {
  __typename: "ModelQuestionOptionConnection";
  items: Array<{
    __typename: "QuestionOption";
    id: string;
    questionId: string;
    optionId: string;
    question: {
      __typename: "Question";
      id: string;
      title?: string | null;
      options?: {
        __typename: "ModelQuestionOptionConnection";
        items: Array<{
          __typename: "QuestionOption";
          id: string;
          questionId: string;
          optionId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      form?: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      formQuestionsId?: string | null;
    };
    option: {
      __typename: "Option";
      id: string;
      label?: string | null;
      value?: string | null;
      questions?: {
        __typename: "ModelQuestionOptionConnection";
        items: Array<{
          __typename: "QuestionOption";
          id: string;
          questionId: string;
          optionId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      order?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncQuestionOptionsQuery = {
  __typename: "ModelQuestionOptionConnection";
  items: Array<{
    __typename: "QuestionOption";
    id: string;
    questionId: string;
    optionId: string;
    question: {
      __typename: "Question";
      id: string;
      title?: string | null;
      options?: {
        __typename: "ModelQuestionOptionConnection";
        items: Array<{
          __typename: "QuestionOption";
          id: string;
          questionId: string;
          optionId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      form?: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      formQuestionsId?: string | null;
    };
    option: {
      __typename: "Option";
      id: string;
      label?: string | null;
      value?: string | null;
      questions?: {
        __typename: "ModelQuestionOptionConnection";
        items: Array<{
          __typename: "QuestionOption";
          id: string;
          questionId: string;
          optionId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      order?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type QuestionOptionsByQuestionIdQuery = {
  __typename: "ModelQuestionOptionConnection";
  items: Array<{
    __typename: "QuestionOption";
    id: string;
    questionId: string;
    optionId: string;
    question: {
      __typename: "Question";
      id: string;
      title?: string | null;
      options?: {
        __typename: "ModelQuestionOptionConnection";
        items: Array<{
          __typename: "QuestionOption";
          id: string;
          questionId: string;
          optionId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      form?: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      formQuestionsId?: string | null;
    };
    option: {
      __typename: "Option";
      id: string;
      label?: string | null;
      value?: string | null;
      questions?: {
        __typename: "ModelQuestionOptionConnection";
        items: Array<{
          __typename: "QuestionOption";
          id: string;
          questionId: string;
          optionId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      order?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type QuestionOptionsByOptionIdQuery = {
  __typename: "ModelQuestionOptionConnection";
  items: Array<{
    __typename: "QuestionOption";
    id: string;
    questionId: string;
    optionId: string;
    question: {
      __typename: "Question";
      id: string;
      title?: string | null;
      options?: {
        __typename: "ModelQuestionOptionConnection";
        items: Array<{
          __typename: "QuestionOption";
          id: string;
          questionId: string;
          optionId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      form?: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      formQuestionsId?: string | null;
    };
    option: {
      __typename: "Option";
      id: string;
      label?: string | null;
      value?: string | null;
      questions?: {
        __typename: "ModelQuestionOptionConnection";
        items: Array<{
          __typename: "QuestionOption";
          id: string;
          questionId: string;
          optionId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      order?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateSceeningSubscription = {
  __typename: "Sceening";
  id: string;
  jobId?: string | null;
  jobName?: string | null;
  crewId?: string | null;
  crewName?: string | null;
  crewPhoneNumber?: string | null;
  result?: string | null;
  method?: string | null;
  staffId?: string | null;
  staffName?: string | null;
  processed?: boolean | null;
  location?: string | null;
  processedAt?: string | null;
  submittedAt?: string | null;
  answeredQuestions?: {
    __typename: "ModelAnsweredQuestionConnection";
    items: Array<{
      __typename: "AnsweredQuestion";
      id: string;
      question?: string | null;
      answer?: string | null;
      sceening?: {
        __typename: "Sceening";
        id: string;
        jobId?: string | null;
        jobName?: string | null;
        crewId?: string | null;
        crewName?: string | null;
        crewPhoneNumber?: string | null;
        result?: string | null;
        method?: string | null;
        staffId?: string | null;
        staffName?: string | null;
        processed?: boolean | null;
        location?: string | null;
        processedAt?: string | null;
        submittedAt?: string | null;
        answeredQuestions?: {
          __typename: "ModelAnsweredQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      order?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      sceeningAnsweredQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateSceeningSubscription = {
  __typename: "Sceening";
  id: string;
  jobId?: string | null;
  jobName?: string | null;
  crewId?: string | null;
  crewName?: string | null;
  crewPhoneNumber?: string | null;
  result?: string | null;
  method?: string | null;
  staffId?: string | null;
  staffName?: string | null;
  processed?: boolean | null;
  location?: string | null;
  processedAt?: string | null;
  submittedAt?: string | null;
  answeredQuestions?: {
    __typename: "ModelAnsweredQuestionConnection";
    items: Array<{
      __typename: "AnsweredQuestion";
      id: string;
      question?: string | null;
      answer?: string | null;
      sceening?: {
        __typename: "Sceening";
        id: string;
        jobId?: string | null;
        jobName?: string | null;
        crewId?: string | null;
        crewName?: string | null;
        crewPhoneNumber?: string | null;
        result?: string | null;
        method?: string | null;
        staffId?: string | null;
        staffName?: string | null;
        processed?: boolean | null;
        location?: string | null;
        processedAt?: string | null;
        submittedAt?: string | null;
        answeredQuestions?: {
          __typename: "ModelAnsweredQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      order?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      sceeningAnsweredQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteSceeningSubscription = {
  __typename: "Sceening";
  id: string;
  jobId?: string | null;
  jobName?: string | null;
  crewId?: string | null;
  crewName?: string | null;
  crewPhoneNumber?: string | null;
  result?: string | null;
  method?: string | null;
  staffId?: string | null;
  staffName?: string | null;
  processed?: boolean | null;
  location?: string | null;
  processedAt?: string | null;
  submittedAt?: string | null;
  answeredQuestions?: {
    __typename: "ModelAnsweredQuestionConnection";
    items: Array<{
      __typename: "AnsweredQuestion";
      id: string;
      question?: string | null;
      answer?: string | null;
      sceening?: {
        __typename: "Sceening";
        id: string;
        jobId?: string | null;
        jobName?: string | null;
        crewId?: string | null;
        crewName?: string | null;
        crewPhoneNumber?: string | null;
        result?: string | null;
        method?: string | null;
        staffId?: string | null;
        staffName?: string | null;
        processed?: boolean | null;
        location?: string | null;
        processedAt?: string | null;
        submittedAt?: string | null;
        answeredQuestions?: {
          __typename: "ModelAnsweredQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      order?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      sceeningAnsweredQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateAnsweredQuestionSubscription = {
  __typename: "AnsweredQuestion";
  id: string;
  question?: string | null;
  answer?: string | null;
  sceening?: {
    __typename: "Sceening";
    id: string;
    jobId?: string | null;
    jobName?: string | null;
    crewId?: string | null;
    crewName?: string | null;
    crewPhoneNumber?: string | null;
    result?: string | null;
    method?: string | null;
    staffId?: string | null;
    staffName?: string | null;
    processed?: boolean | null;
    location?: string | null;
    processedAt?: string | null;
    submittedAt?: string | null;
    answeredQuestions?: {
      __typename: "ModelAnsweredQuestionConnection";
      items: Array<{
        __typename: "AnsweredQuestion";
        id: string;
        question?: string | null;
        answer?: string | null;
        sceening?: {
          __typename: "Sceening";
          id: string;
          jobId?: string | null;
          jobName?: string | null;
          crewId?: string | null;
          crewName?: string | null;
          crewPhoneNumber?: string | null;
          result?: string | null;
          method?: string | null;
          staffId?: string | null;
          staffName?: string | null;
          processed?: boolean | null;
          location?: string | null;
          processedAt?: string | null;
          submittedAt?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        sceeningAnsweredQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  sceeningAnsweredQuestionsId?: string | null;
};

export type OnUpdateAnsweredQuestionSubscription = {
  __typename: "AnsweredQuestion";
  id: string;
  question?: string | null;
  answer?: string | null;
  sceening?: {
    __typename: "Sceening";
    id: string;
    jobId?: string | null;
    jobName?: string | null;
    crewId?: string | null;
    crewName?: string | null;
    crewPhoneNumber?: string | null;
    result?: string | null;
    method?: string | null;
    staffId?: string | null;
    staffName?: string | null;
    processed?: boolean | null;
    location?: string | null;
    processedAt?: string | null;
    submittedAt?: string | null;
    answeredQuestions?: {
      __typename: "ModelAnsweredQuestionConnection";
      items: Array<{
        __typename: "AnsweredQuestion";
        id: string;
        question?: string | null;
        answer?: string | null;
        sceening?: {
          __typename: "Sceening";
          id: string;
          jobId?: string | null;
          jobName?: string | null;
          crewId?: string | null;
          crewName?: string | null;
          crewPhoneNumber?: string | null;
          result?: string | null;
          method?: string | null;
          staffId?: string | null;
          staffName?: string | null;
          processed?: boolean | null;
          location?: string | null;
          processedAt?: string | null;
          submittedAt?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        sceeningAnsweredQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  sceeningAnsweredQuestionsId?: string | null;
};

export type OnDeleteAnsweredQuestionSubscription = {
  __typename: "AnsweredQuestion";
  id: string;
  question?: string | null;
  answer?: string | null;
  sceening?: {
    __typename: "Sceening";
    id: string;
    jobId?: string | null;
    jobName?: string | null;
    crewId?: string | null;
    crewName?: string | null;
    crewPhoneNumber?: string | null;
    result?: string | null;
    method?: string | null;
    staffId?: string | null;
    staffName?: string | null;
    processed?: boolean | null;
    location?: string | null;
    processedAt?: string | null;
    submittedAt?: string | null;
    answeredQuestions?: {
      __typename: "ModelAnsweredQuestionConnection";
      items: Array<{
        __typename: "AnsweredQuestion";
        id: string;
        question?: string | null;
        answer?: string | null;
        sceening?: {
          __typename: "Sceening";
          id: string;
          jobId?: string | null;
          jobName?: string | null;
          crewId?: string | null;
          crewName?: string | null;
          crewPhoneNumber?: string | null;
          result?: string | null;
          method?: string | null;
          staffId?: string | null;
          staffName?: string | null;
          processed?: boolean | null;
          location?: string | null;
          processedAt?: string | null;
          submittedAt?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        sceeningAnsweredQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  sceeningAnsweredQuestionsId?: string | null;
};

export type OnCreateFormSubscription = {
  __typename: "Form";
  id: string;
  name?: string | null;
  questions?: {
    __typename: "ModelQuestionConnection";
    items: Array<{
      __typename: "Question";
      id: string;
      title?: string | null;
      options?: {
        __typename: "ModelQuestionOptionConnection";
        items: Array<{
          __typename: "QuestionOption";
          id: string;
          questionId: string;
          optionId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      form?: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      formQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  jobs?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      form: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateFormSubscription = {
  __typename: "Form";
  id: string;
  name?: string | null;
  questions?: {
    __typename: "ModelQuestionConnection";
    items: Array<{
      __typename: "Question";
      id: string;
      title?: string | null;
      options?: {
        __typename: "ModelQuestionOptionConnection";
        items: Array<{
          __typename: "QuestionOption";
          id: string;
          questionId: string;
          optionId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      form?: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      formQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  jobs?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      form: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteFormSubscription = {
  __typename: "Form";
  id: string;
  name?: string | null;
  questions?: {
    __typename: "ModelQuestionConnection";
    items: Array<{
      __typename: "Question";
      id: string;
      title?: string | null;
      options?: {
        __typename: "ModelQuestionOptionConnection";
        items: Array<{
          __typename: "QuestionOption";
          id: string;
          questionId: string;
          optionId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      form?: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      formQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  jobs?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      form: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateJobSubscription = {
  __typename: "Job";
  id: string;
  code?: string | null;
  location?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      form: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  crews?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      crew: {
        __typename: "Crew";
        id: string;
        userName?: string | null;
        role?: string | null;
        DOB?: string | null;
        healthCardNumber?: string | null;
        vaxxStatus?: string | null;
        userAgreement?: string | null;
        companyName?: string | null;
        address?: string | null;
        phonenumber?: string | null;
        name?: string | null;
        email?: string | null;
        defaultJobId?: string | null;
        jobs?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateJobSubscription = {
  __typename: "Job";
  id: string;
  code?: string | null;
  location?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      form: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  crews?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      crew: {
        __typename: "Crew";
        id: string;
        userName?: string | null;
        role?: string | null;
        DOB?: string | null;
        healthCardNumber?: string | null;
        vaxxStatus?: string | null;
        userAgreement?: string | null;
        companyName?: string | null;
        address?: string | null;
        phonenumber?: string | null;
        name?: string | null;
        email?: string | null;
        defaultJobId?: string | null;
        jobs?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteJobSubscription = {
  __typename: "Job";
  id: string;
  code?: string | null;
  location?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      form: {
        __typename: "Form";
        id: string;
        name?: string | null;
        questions?: {
          __typename: "ModelQuestionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        jobs?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  crews?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      crew: {
        __typename: "Crew";
        id: string;
        userName?: string | null;
        role?: string | null;
        DOB?: string | null;
        healthCardNumber?: string | null;
        vaxxStatus?: string | null;
        userAgreement?: string | null;
        companyName?: string | null;
        address?: string | null;
        phonenumber?: string | null;
        name?: string | null;
        email?: string | null;
        defaultJobId?: string | null;
        jobs?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateLocationSubscription = {
  __typename: "Location";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateLocationSubscription = {
  __typename: "Location";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteLocationSubscription = {
  __typename: "Location";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateQuestionSubscription = {
  __typename: "Question";
  id: string;
  title?: string | null;
  options?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionId: string;
      optionId: string;
      question: {
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      };
      option: {
        __typename: "Option";
        id: string;
        label?: string | null;
        value?: string | null;
        questions?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  form?: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      items: Array<{
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  formQuestionsId?: string | null;
};

export type OnUpdateQuestionSubscription = {
  __typename: "Question";
  id: string;
  title?: string | null;
  options?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionId: string;
      optionId: string;
      question: {
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      };
      option: {
        __typename: "Option";
        id: string;
        label?: string | null;
        value?: string | null;
        questions?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  form?: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      items: Array<{
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  formQuestionsId?: string | null;
};

export type OnDeleteQuestionSubscription = {
  __typename: "Question";
  id: string;
  title?: string | null;
  options?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionId: string;
      optionId: string;
      question: {
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      };
      option: {
        __typename: "Option";
        id: string;
        label?: string | null;
        value?: string | null;
        questions?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  form?: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      items: Array<{
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  formQuestionsId?: string | null;
};

export type OnCreateOptionSubscription = {
  __typename: "Option";
  id: string;
  label?: string | null;
  value?: string | null;
  questions?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionId: string;
      optionId: string;
      question: {
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      };
      option: {
        __typename: "Option";
        id: string;
        label?: string | null;
        value?: string | null;
        questions?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateOptionSubscription = {
  __typename: "Option";
  id: string;
  label?: string | null;
  value?: string | null;
  questions?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionId: string;
      optionId: string;
      question: {
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      };
      option: {
        __typename: "Option";
        id: string;
        label?: string | null;
        value?: string | null;
        questions?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteOptionSubscription = {
  __typename: "Option";
  id: string;
  label?: string | null;
  value?: string | null;
  questions?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionId: string;
      optionId: string;
      question: {
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      };
      option: {
        __typename: "Option";
        id: string;
        label?: string | null;
        value?: string | null;
        questions?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        order?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateCrewSubscription = {
  __typename: "Crew";
  id: string;
  userName?: string | null;
  role?: string | null;
  DOB?: string | null;
  healthCardNumber?: string | null;
  vaxxStatus?: string | null;
  userAgreement?: string | null;
  companyName?: string | null;
  address?: string | null;
  phonenumber?: string | null;
  name?: string | null;
  email?: string | null;
  defaultJobId?: string | null;
  jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      crew: {
        __typename: "Crew";
        id: string;
        userName?: string | null;
        role?: string | null;
        DOB?: string | null;
        healthCardNumber?: string | null;
        vaxxStatus?: string | null;
        userAgreement?: string | null;
        companyName?: string | null;
        address?: string | null;
        phonenumber?: string | null;
        name?: string | null;
        email?: string | null;
        defaultJobId?: string | null;
        jobs?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateCrewSubscription = {
  __typename: "Crew";
  id: string;
  userName?: string | null;
  role?: string | null;
  DOB?: string | null;
  healthCardNumber?: string | null;
  vaxxStatus?: string | null;
  userAgreement?: string | null;
  companyName?: string | null;
  address?: string | null;
  phonenumber?: string | null;
  name?: string | null;
  email?: string | null;
  defaultJobId?: string | null;
  jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      crew: {
        __typename: "Crew";
        id: string;
        userName?: string | null;
        role?: string | null;
        DOB?: string | null;
        healthCardNumber?: string | null;
        vaxxStatus?: string | null;
        userAgreement?: string | null;
        companyName?: string | null;
        address?: string | null;
        phonenumber?: string | null;
        name?: string | null;
        email?: string | null;
        defaultJobId?: string | null;
        jobs?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteCrewSubscription = {
  __typename: "Crew";
  id: string;
  userName?: string | null;
  role?: string | null;
  DOB?: string | null;
  healthCardNumber?: string | null;
  vaxxStatus?: string | null;
  userAgreement?: string | null;
  companyName?: string | null;
  address?: string | null;
  phonenumber?: string | null;
  name?: string | null;
  email?: string | null;
  defaultJobId?: string | null;
  jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      job: {
        __typename: "Job";
        id: string;
        code?: string | null;
        location?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        forms?: {
          __typename: "ModelFormJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        crews?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      crew: {
        __typename: "Crew";
        id: string;
        userName?: string | null;
        role?: string | null;
        DOB?: string | null;
        healthCardNumber?: string | null;
        vaxxStatus?: string | null;
        userAgreement?: string | null;
        companyName?: string | null;
        address?: string | null;
        phonenumber?: string | null;
        name?: string | null;
        email?: string | null;
        defaultJobId?: string | null;
        jobs?: {
          __typename: "ModelCrewJobConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      };
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateFormJobSubscription = {
  __typename: "FormJob";
  id: string;
  formId: string;
  jobId: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      items: Array<{
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    location?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateFormJobSubscription = {
  __typename: "FormJob";
  id: string;
  formId: string;
  jobId: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      items: Array<{
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    location?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteFormJobSubscription = {
  __typename: "FormJob";
  id: string;
  formId: string;
  jobId: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      items: Array<{
        __typename: "Question";
        id: string;
        title?: string | null;
        options?: {
          __typename: "ModelQuestionOptionConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        form?: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        order?: number | null;
        optionOrderDesc?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        formQuestionsId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    location?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateCrewJobSubscription = {
  __typename: "CrewJob";
  id: string;
  jobId: string;
  crewId: string;
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    location?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    role?: string | null;
    DOB?: string | null;
    healthCardNumber?: string | null;
    vaxxStatus?: string | null;
    userAgreement?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateCrewJobSubscription = {
  __typename: "CrewJob";
  id: string;
  jobId: string;
  crewId: string;
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    location?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    role?: string | null;
    DOB?: string | null;
    healthCardNumber?: string | null;
    vaxxStatus?: string | null;
    userAgreement?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteCrewJobSubscription = {
  __typename: "CrewJob";
  id: string;
  jobId: string;
  crewId: string;
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    location?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      items: Array<{
        __typename: "FormJob";
        id: string;
        formId: string;
        jobId: string;
        form: {
          __typename: "Form";
          id: string;
          name?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    role?: string | null;
    DOB?: string | null;
    healthCardNumber?: string | null;
    vaxxStatus?: string | null;
    userAgreement?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      items: Array<{
        __typename: "CrewJob";
        id: string;
        jobId: string;
        crewId: string;
        job: {
          __typename: "Job";
          id: string;
          code?: string | null;
          location?: string | null;
          startDate?: string | null;
          endDate?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        crew: {
          __typename: "Crew";
          id: string;
          userName?: string | null;
          role?: string | null;
          DOB?: string | null;
          healthCardNumber?: string | null;
          vaxxStatus?: string | null;
          userAgreement?: string | null;
          companyName?: string | null;
          address?: string | null;
          phonenumber?: string | null;
          name?: string | null;
          email?: string | null;
          defaultJobId?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateQuestionOptionSubscription = {
  __typename: "QuestionOption";
  id: string;
  questionId: string;
  optionId: string;
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    options?: {
      __typename: "ModelQuestionOptionConnection";
      items: Array<{
        __typename: "QuestionOption";
        id: string;
        questionId: string;
        optionId: string;
        question: {
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        };
        option: {
          __typename: "Option";
          id: string;
          label?: string | null;
          value?: string | null;
          order?: number | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    form?: {
      __typename: "Form";
      id: string;
      name?: string | null;
      questions?: {
        __typename: "ModelQuestionConnection";
        items: Array<{
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      jobs?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    formQuestionsId?: string | null;
  };
  option: {
    __typename: "Option";
    id: string;
    label?: string | null;
    value?: string | null;
    questions?: {
      __typename: "ModelQuestionOptionConnection";
      items: Array<{
        __typename: "QuestionOption";
        id: string;
        questionId: string;
        optionId: string;
        question: {
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        };
        option: {
          __typename: "Option";
          id: string;
          label?: string | null;
          value?: string | null;
          order?: number | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateQuestionOptionSubscription = {
  __typename: "QuestionOption";
  id: string;
  questionId: string;
  optionId: string;
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    options?: {
      __typename: "ModelQuestionOptionConnection";
      items: Array<{
        __typename: "QuestionOption";
        id: string;
        questionId: string;
        optionId: string;
        question: {
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        };
        option: {
          __typename: "Option";
          id: string;
          label?: string | null;
          value?: string | null;
          order?: number | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    form?: {
      __typename: "Form";
      id: string;
      name?: string | null;
      questions?: {
        __typename: "ModelQuestionConnection";
        items: Array<{
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      jobs?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    formQuestionsId?: string | null;
  };
  option: {
    __typename: "Option";
    id: string;
    label?: string | null;
    value?: string | null;
    questions?: {
      __typename: "ModelQuestionOptionConnection";
      items: Array<{
        __typename: "QuestionOption";
        id: string;
        questionId: string;
        optionId: string;
        question: {
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        };
        option: {
          __typename: "Option";
          id: string;
          label?: string | null;
          value?: string | null;
          order?: number | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteQuestionOptionSubscription = {
  __typename: "QuestionOption";
  id: string;
  questionId: string;
  optionId: string;
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    options?: {
      __typename: "ModelQuestionOptionConnection";
      items: Array<{
        __typename: "QuestionOption";
        id: string;
        questionId: string;
        optionId: string;
        question: {
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        };
        option: {
          __typename: "Option";
          id: string;
          label?: string | null;
          value?: string | null;
          order?: number | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    form?: {
      __typename: "Form";
      id: string;
      name?: string | null;
      questions?: {
        __typename: "ModelQuestionConnection";
        items: Array<{
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      jobs?: {
        __typename: "ModelFormJobConnection";
        items: Array<{
          __typename: "FormJob";
          id: string;
          formId: string;
          jobId: string;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    formQuestionsId?: string | null;
  };
  option: {
    __typename: "Option";
    id: string;
    label?: string | null;
    value?: string | null;
    questions?: {
      __typename: "ModelQuestionOptionConnection";
      items: Array<{
        __typename: "QuestionOption";
        id: string;
        questionId: string;
        optionId: string;
        question: {
          __typename: "Question";
          id: string;
          title?: string | null;
          order?: number | null;
          optionOrderDesc?: boolean | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          formQuestionsId?: string | null;
        };
        option: {
          __typename: "Option";
          id: string;
          label?: string | null;
          value?: string | null;
          order?: number | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        };
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

@Injectable({
  providedIn: "root",
})
export class APIService {
  async CreateSceening(
    input: CreateSceeningInput,
    condition?: ModelSceeningConditionInput
  ): Promise<CreateSceeningMutation> {
    const statement = `mutation CreateSceening($input: CreateSceeningInput!, $condition: ModelSceeningConditionInput) {
        createSceening(input: $input, condition: $condition) {
          __typename
          id
          jobId
          jobName
          crewId
          crewName
          crewPhoneNumber
          result
          method
          staffId
          staffName
          processed
          location
          processedAt
          submittedAt
          answeredQuestions {
            __typename
            items {
              __typename
              id
              question
              answer
              sceening {
                __typename
                id
                jobId
                jobName
                crewId
                crewName
                crewPhoneNumber
                result
                method
                staffId
                staffName
                processed
                location
                processedAt
                submittedAt
                answeredQuestions {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              order
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              sceeningAnsweredQuestionsId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSceeningMutation>response.data.createSceening;
  }
  async UpdateSceening(
    input: UpdateSceeningInput,
    condition?: ModelSceeningConditionInput
  ): Promise<UpdateSceeningMutation> {
    const statement = `mutation UpdateSceening($input: UpdateSceeningInput!, $condition: ModelSceeningConditionInput) {
        updateSceening(input: $input, condition: $condition) {
          __typename
          id
          jobId
          jobName
          crewId
          crewName
          crewPhoneNumber
          result
          method
          staffId
          staffName
          processed
          location
          processedAt
          submittedAt
          answeredQuestions {
            __typename
            items {
              __typename
              id
              question
              answer
              sceening {
                __typename
                id
                jobId
                jobName
                crewId
                crewName
                crewPhoneNumber
                result
                method
                staffId
                staffName
                processed
                location
                processedAt
                submittedAt
                answeredQuestions {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              order
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              sceeningAnsweredQuestionsId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSceeningMutation>response.data.updateSceening;
  }
  async DeleteSceening(
    input: DeleteSceeningInput,
    condition?: ModelSceeningConditionInput
  ): Promise<DeleteSceeningMutation> {
    const statement = `mutation DeleteSceening($input: DeleteSceeningInput!, $condition: ModelSceeningConditionInput) {
        deleteSceening(input: $input, condition: $condition) {
          __typename
          id
          jobId
          jobName
          crewId
          crewName
          crewPhoneNumber
          result
          method
          staffId
          staffName
          processed
          location
          processedAt
          submittedAt
          answeredQuestions {
            __typename
            items {
              __typename
              id
              question
              answer
              sceening {
                __typename
                id
                jobId
                jobName
                crewId
                crewName
                crewPhoneNumber
                result
                method
                staffId
                staffName
                processed
                location
                processedAt
                submittedAt
                answeredQuestions {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              order
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              sceeningAnsweredQuestionsId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSceeningMutation>response.data.deleteSceening;
  }
  async CreateAnsweredQuestion(
    input: CreateAnsweredQuestionInput,
    condition?: ModelAnsweredQuestionConditionInput
  ): Promise<CreateAnsweredQuestionMutation> {
    const statement = `mutation CreateAnsweredQuestion($input: CreateAnsweredQuestionInput!, $condition: ModelAnsweredQuestionConditionInput) {
        createAnsweredQuestion(input: $input, condition: $condition) {
          __typename
          id
          question
          answer
          sceening {
            __typename
            id
            jobId
            jobName
            crewId
            crewName
            crewPhoneNumber
            result
            method
            staffId
            staffName
            processed
            location
            processedAt
            submittedAt
            answeredQuestions {
              __typename
              items {
                __typename
                id
                question
                answer
                sceening {
                  __typename
                  id
                  jobId
                  jobName
                  crewId
                  crewName
                  crewPhoneNumber
                  result
                  method
                  staffId
                  staffName
                  processed
                  location
                  processedAt
                  submittedAt
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                sceeningAnsweredQuestionsId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sceeningAnsweredQuestionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAnsweredQuestionMutation>response.data.createAnsweredQuestion;
  }
  async UpdateAnsweredQuestion(
    input: UpdateAnsweredQuestionInput,
    condition?: ModelAnsweredQuestionConditionInput
  ): Promise<UpdateAnsweredQuestionMutation> {
    const statement = `mutation UpdateAnsweredQuestion($input: UpdateAnsweredQuestionInput!, $condition: ModelAnsweredQuestionConditionInput) {
        updateAnsweredQuestion(input: $input, condition: $condition) {
          __typename
          id
          question
          answer
          sceening {
            __typename
            id
            jobId
            jobName
            crewId
            crewName
            crewPhoneNumber
            result
            method
            staffId
            staffName
            processed
            location
            processedAt
            submittedAt
            answeredQuestions {
              __typename
              items {
                __typename
                id
                question
                answer
                sceening {
                  __typename
                  id
                  jobId
                  jobName
                  crewId
                  crewName
                  crewPhoneNumber
                  result
                  method
                  staffId
                  staffName
                  processed
                  location
                  processedAt
                  submittedAt
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                sceeningAnsweredQuestionsId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sceeningAnsweredQuestionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAnsweredQuestionMutation>response.data.updateAnsweredQuestion;
  }
  async DeleteAnsweredQuestion(
    input: DeleteAnsweredQuestionInput,
    condition?: ModelAnsweredQuestionConditionInput
  ): Promise<DeleteAnsweredQuestionMutation> {
    const statement = `mutation DeleteAnsweredQuestion($input: DeleteAnsweredQuestionInput!, $condition: ModelAnsweredQuestionConditionInput) {
        deleteAnsweredQuestion(input: $input, condition: $condition) {
          __typename
          id
          question
          answer
          sceening {
            __typename
            id
            jobId
            jobName
            crewId
            crewName
            crewPhoneNumber
            result
            method
            staffId
            staffName
            processed
            location
            processedAt
            submittedAt
            answeredQuestions {
              __typename
              items {
                __typename
                id
                question
                answer
                sceening {
                  __typename
                  id
                  jobId
                  jobName
                  crewId
                  crewName
                  crewPhoneNumber
                  result
                  method
                  staffId
                  staffName
                  processed
                  location
                  processedAt
                  submittedAt
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                sceeningAnsweredQuestionsId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sceeningAnsweredQuestionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAnsweredQuestionMutation>response.data.deleteAnsweredQuestion;
  }
  async CreateForm(
    input: CreateFormInput,
    condition?: ModelFormConditionInput
  ): Promise<CreateFormMutation> {
    const statement = `mutation CreateForm($input: CreateFormInput!, $condition: ModelFormConditionInput) {
        createForm(input: $input, condition: $condition) {
          __typename
          id
          name
          questions {
            __typename
            items {
              __typename
              id
              title
              options {
                __typename
                items {
                  __typename
                  id
                  questionId
                  optionId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              order
              optionOrderDesc
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              formQuestionsId
            }
            nextToken
            startedAt
          }
          jobs {
            __typename
            items {
              __typename
              id
              formId
              jobId
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFormMutation>response.data.createForm;
  }
  async UpdateForm(
    input: UpdateFormInput,
    condition?: ModelFormConditionInput
  ): Promise<UpdateFormMutation> {
    const statement = `mutation UpdateForm($input: UpdateFormInput!, $condition: ModelFormConditionInput) {
        updateForm(input: $input, condition: $condition) {
          __typename
          id
          name
          questions {
            __typename
            items {
              __typename
              id
              title
              options {
                __typename
                items {
                  __typename
                  id
                  questionId
                  optionId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              order
              optionOrderDesc
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              formQuestionsId
            }
            nextToken
            startedAt
          }
          jobs {
            __typename
            items {
              __typename
              id
              formId
              jobId
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFormMutation>response.data.updateForm;
  }
  async DeleteForm(
    input: DeleteFormInput,
    condition?: ModelFormConditionInput
  ): Promise<DeleteFormMutation> {
    const statement = `mutation DeleteForm($input: DeleteFormInput!, $condition: ModelFormConditionInput) {
        deleteForm(input: $input, condition: $condition) {
          __typename
          id
          name
          questions {
            __typename
            items {
              __typename
              id
              title
              options {
                __typename
                items {
                  __typename
                  id
                  questionId
                  optionId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              order
              optionOrderDesc
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              formQuestionsId
            }
            nextToken
            startedAt
          }
          jobs {
            __typename
            items {
              __typename
              id
              formId
              jobId
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFormMutation>response.data.deleteForm;
  }
  async CreateJob(
    input: CreateJobInput,
    condition?: ModelJobConditionInput
  ): Promise<CreateJobMutation> {
    const statement = `mutation CreateJob($input: CreateJobInput!, $condition: ModelJobConditionInput) {
        createJob(input: $input, condition: $condition) {
          __typename
          id
          code
          location
          startDate
          endDate
          forms {
            __typename
            items {
              __typename
              id
              formId
              jobId
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          crews {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              crew {
                __typename
                id
                userName
                role
                DOB
                healthCardNumber
                vaxxStatus
                userAgreement
                companyName
                address
                phonenumber
                name
                email
                defaultJobId
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateJobMutation>response.data.createJob;
  }
  async UpdateJob(
    input: UpdateJobInput,
    condition?: ModelJobConditionInput
  ): Promise<UpdateJobMutation> {
    const statement = `mutation UpdateJob($input: UpdateJobInput!, $condition: ModelJobConditionInput) {
        updateJob(input: $input, condition: $condition) {
          __typename
          id
          code
          location
          startDate
          endDate
          forms {
            __typename
            items {
              __typename
              id
              formId
              jobId
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          crews {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              crew {
                __typename
                id
                userName
                role
                DOB
                healthCardNumber
                vaxxStatus
                userAgreement
                companyName
                address
                phonenumber
                name
                email
                defaultJobId
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateJobMutation>response.data.updateJob;
  }
  async DeleteJob(
    input: DeleteJobInput,
    condition?: ModelJobConditionInput
  ): Promise<DeleteJobMutation> {
    const statement = `mutation DeleteJob($input: DeleteJobInput!, $condition: ModelJobConditionInput) {
        deleteJob(input: $input, condition: $condition) {
          __typename
          id
          code
          location
          startDate
          endDate
          forms {
            __typename
            items {
              __typename
              id
              formId
              jobId
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          crews {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              crew {
                __typename
                id
                userName
                role
                DOB
                healthCardNumber
                vaxxStatus
                userAgreement
                companyName
                address
                phonenumber
                name
                email
                defaultJobId
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteJobMutation>response.data.deleteJob;
  }
  async CreateLocation(
    input: CreateLocationInput,
    condition?: ModelLocationConditionInput
  ): Promise<CreateLocationMutation> {
    const statement = `mutation CreateLocation($input: CreateLocationInput!, $condition: ModelLocationConditionInput) {
        createLocation(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLocationMutation>response.data.createLocation;
  }
  async UpdateLocation(
    input: UpdateLocationInput,
    condition?: ModelLocationConditionInput
  ): Promise<UpdateLocationMutation> {
    const statement = `mutation UpdateLocation($input: UpdateLocationInput!, $condition: ModelLocationConditionInput) {
        updateLocation(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateLocationMutation>response.data.updateLocation;
  }
  async DeleteLocation(
    input: DeleteLocationInput,
    condition?: ModelLocationConditionInput
  ): Promise<DeleteLocationMutation> {
    const statement = `mutation DeleteLocation($input: DeleteLocationInput!, $condition: ModelLocationConditionInput) {
        deleteLocation(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLocationMutation>response.data.deleteLocation;
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
              questionId
              optionId
              question {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              option {
                __typename
                id
                label
                value
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          form {
            __typename
            id
            name
            questions {
              __typename
              items {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              nextToken
              startedAt
            }
            jobs {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          order
          optionOrderDesc
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          formQuestionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
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
              questionId
              optionId
              question {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              option {
                __typename
                id
                label
                value
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          form {
            __typename
            id
            name
            questions {
              __typename
              items {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              nextToken
              startedAt
            }
            jobs {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          order
          optionOrderDesc
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          formQuestionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
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
              questionId
              optionId
              question {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              option {
                __typename
                id
                label
                value
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          form {
            __typename
            id
            name
            questions {
              __typename
              items {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              nextToken
              startedAt
            }
            jobs {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          order
          optionOrderDesc
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          formQuestionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
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
          questions {
            __typename
            items {
              __typename
              id
              questionId
              optionId
              question {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              option {
                __typename
                id
                label
                value
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
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
          questions {
            __typename
            items {
              __typename
              id
              questionId
              optionId
              question {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              option {
                __typename
                id
                label
                value
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
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
          questions {
            __typename
            items {
              __typename
              id
              questionId
              optionId
              question {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              option {
                __typename
                id
                label
                value
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteOptionMutation>response.data.deleteOption;
  }
  async CreateCrew(
    input: CreateCrewInput,
    condition?: ModelCrewConditionInput
  ): Promise<CreateCrewMutation> {
    const statement = `mutation CreateCrew($input: CreateCrewInput!, $condition: ModelCrewConditionInput) {
        createCrew(input: $input, condition: $condition) {
          __typename
          id
          userName
          role
          DOB
          healthCardNumber
          vaxxStatus
          userAgreement
          companyName
          address
          phonenumber
          name
          email
          defaultJobId
          jobs {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              crew {
                __typename
                id
                userName
                role
                DOB
                healthCardNumber
                vaxxStatus
                userAgreement
                companyName
                address
                phonenumber
                name
                email
                defaultJobId
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
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
          userName
          role
          DOB
          healthCardNumber
          vaxxStatus
          userAgreement
          companyName
          address
          phonenumber
          name
          email
          defaultJobId
          jobs {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              crew {
                __typename
                id
                userName
                role
                DOB
                healthCardNumber
                vaxxStatus
                userAgreement
                companyName
                address
                phonenumber
                name
                email
                defaultJobId
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
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
          userName
          role
          DOB
          healthCardNumber
          vaxxStatus
          userAgreement
          companyName
          address
          phonenumber
          name
          email
          defaultJobId
          jobs {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              crew {
                __typename
                id
                userName
                role
                DOB
                healthCardNumber
                vaxxStatus
                userAgreement
                companyName
                address
                phonenumber
                name
                email
                defaultJobId
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCrewMutation>response.data.deleteCrew;
  }
  async CreateFormJob(
    input: CreateFormJobInput,
    condition?: ModelFormJobConditionInput
  ): Promise<CreateFormJobMutation> {
    const statement = `mutation CreateFormJob($input: CreateFormJobInput!, $condition: ModelFormJobConditionInput) {
        createFormJob(input: $input, condition: $condition) {
          __typename
          id
          formId
          jobId
          form {
            __typename
            id
            name
            questions {
              __typename
              items {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              nextToken
              startedAt
            }
            jobs {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          job {
            __typename
            id
            code
            location
            startDate
            endDate
            forms {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            crews {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFormJobMutation>response.data.createFormJob;
  }
  async UpdateFormJob(
    input: UpdateFormJobInput,
    condition?: ModelFormJobConditionInput
  ): Promise<UpdateFormJobMutation> {
    const statement = `mutation UpdateFormJob($input: UpdateFormJobInput!, $condition: ModelFormJobConditionInput) {
        updateFormJob(input: $input, condition: $condition) {
          __typename
          id
          formId
          jobId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFormJobMutation>response.data.updateFormJob;
  }
  async DeleteFormJob(
    input: DeleteFormJobInput,
    condition?: ModelFormJobConditionInput
  ): Promise<DeleteFormJobMutation> {
    const statement = `mutation DeleteFormJob($input: DeleteFormJobInput!, $condition: ModelFormJobConditionInput) {
        deleteFormJob(input: $input, condition: $condition) {
          __typename
          id
          formId
          jobId
          form {
            __typename
            id
            name
            questions {
              __typename
              items {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              nextToken
              startedAt
            }
            jobs {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          job {
            __typename
            id
            code
            location
            startDate
            endDate
            forms {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            crews {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFormJobMutation>response.data.deleteFormJob;
  }
  async CreateCrewJob(
    input: CreateCrewJobInput,
    condition?: ModelCrewJobConditionInput
  ): Promise<CreateCrewJobMutation> {
    const statement = `mutation CreateCrewJob($input: CreateCrewJobInput!, $condition: ModelCrewJobConditionInput) {
        createCrewJob(input: $input, condition: $condition) {
          __typename
          id
          jobId
          crewId
          job {
            __typename
            id
            code
            location
            startDate
            endDate
            forms {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            crews {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          crew {
            __typename
            id
            userName
            role
            DOB
            healthCardNumber
            vaxxStatus
            userAgreement
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            jobs {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCrewJobMutation>response.data.createCrewJob;
  }
  async UpdateCrewJob(
    input: UpdateCrewJobInput,
    condition?: ModelCrewJobConditionInput
  ): Promise<UpdateCrewJobMutation> {
    const statement = `mutation UpdateCrewJob($input: UpdateCrewJobInput!, $condition: ModelCrewJobConditionInput) {
        updateCrewJob(input: $input, condition: $condition) {
          __typename
          id
          jobId
          crewId
          job {
            __typename
            id
            code
            location
            startDate
            endDate
            forms {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            crews {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          crew {
            __typename
            id
            userName
            role
            DOB
            healthCardNumber
            vaxxStatus
            userAgreement
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            jobs {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCrewJobMutation>response.data.updateCrewJob;
  }
  async DeleteCrewJob(
    input: DeleteCrewJobInput,
    condition?: ModelCrewJobConditionInput
  ): Promise<DeleteCrewJobMutation> {
    const statement = `mutation DeleteCrewJob($input: DeleteCrewJobInput!, $condition: ModelCrewJobConditionInput) {
        deleteCrewJob(input: $input, condition: $condition) {
          __typename
          id
          jobId
          crewId
          job {
            __typename
            id
            code
            location
            startDate
            endDate
            forms {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            crews {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          crew {
            __typename
            id
            userName
            role
            DOB
            healthCardNumber
            vaxxStatus
            userAgreement
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            jobs {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCrewJobMutation>response.data.deleteCrewJob;
  }
  async CreateQuestionOption(
    input: CreateQuestionOptionInput,
    condition?: ModelQuestionOptionConditionInput
  ): Promise<CreateQuestionOptionMutation> {
    const statement = `mutation CreateQuestionOption($input: CreateQuestionOptionInput!, $condition: ModelQuestionOptionConditionInput) {
        createQuestionOption(input: $input, condition: $condition) {
          __typename
          id
          questionId
          optionId
          question {
            __typename
            id
            title
            options {
              __typename
              items {
                __typename
                id
                questionId
                optionId
                question {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                option {
                  __typename
                  id
                  label
                  value
                  order
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            form {
              __typename
              id
              name
              questions {
                __typename
                items {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                nextToken
                startedAt
              }
              jobs {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            formQuestionsId
          }
          option {
            __typename
            id
            label
            value
            questions {
              __typename
              items {
                __typename
                id
                questionId
                optionId
                question {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                option {
                  __typename
                  id
                  label
                  value
                  order
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            order
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuestionOptionMutation>response.data.createQuestionOption;
  }
  async UpdateQuestionOption(
    input: UpdateQuestionOptionInput,
    condition?: ModelQuestionOptionConditionInput
  ): Promise<UpdateQuestionOptionMutation> {
    const statement = `mutation UpdateQuestionOption($input: UpdateQuestionOptionInput!, $condition: ModelQuestionOptionConditionInput) {
        updateQuestionOption(input: $input, condition: $condition) {
          __typename
          id
          questionId
          optionId
          question {
            __typename
            id
            title
            options {
              __typename
              items {
                __typename
                id
                questionId
                optionId
                question {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                option {
                  __typename
                  id
                  label
                  value
                  order
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            form {
              __typename
              id
              name
              questions {
                __typename
                items {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                nextToken
                startedAt
              }
              jobs {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            formQuestionsId
          }
          option {
            __typename
            id
            label
            value
            questions {
              __typename
              items {
                __typename
                id
                questionId
                optionId
                question {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                option {
                  __typename
                  id
                  label
                  value
                  order
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            order
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuestionOptionMutation>response.data.updateQuestionOption;
  }
  async DeleteQuestionOption(
    input: DeleteQuestionOptionInput,
    condition?: ModelQuestionOptionConditionInput
  ): Promise<DeleteQuestionOptionMutation> {
    const statement = `mutation DeleteQuestionOption($input: DeleteQuestionOptionInput!, $condition: ModelQuestionOptionConditionInput) {
        deleteQuestionOption(input: $input, condition: $condition) {
          __typename
          id
          questionId
          optionId
          question {
            __typename
            id
            title
            options {
              __typename
              items {
                __typename
                id
                questionId
                optionId
                question {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                option {
                  __typename
                  id
                  label
                  value
                  order
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            form {
              __typename
              id
              name
              questions {
                __typename
                items {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                nextToken
                startedAt
              }
              jobs {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            formQuestionsId
          }
          option {
            __typename
            id
            label
            value
            questions {
              __typename
              items {
                __typename
                id
                questionId
                optionId
                question {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                option {
                  __typename
                  id
                  label
                  value
                  order
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            order
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuestionOptionMutation>response.data.deleteQuestionOption;
  }
  async GetSceening(id: string): Promise<GetSceeningQuery> {
    const statement = `query GetSceening($id: ID!) {
        getSceening(id: $id) {
          __typename
          id
          jobId
          jobName
          crewId
          crewName
          crewPhoneNumber
          result
          method
          staffId
          staffName
          processed
          location
          processedAt
          submittedAt
          answeredQuestions {
            __typename
            items {
              __typename
              id
              question
              answer
              sceening {
                __typename
                id
                jobId
                jobName
                crewId
                crewName
                crewPhoneNumber
                result
                method
                staffId
                staffName
                processed
                location
                processedAt
                submittedAt
                answeredQuestions {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              order
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              sceeningAnsweredQuestionsId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSceeningQuery>response.data.getSceening;
  }
  async ListSceenings(
    filter?: ModelSceeningFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSceeningsQuery> {
    const statement = `query ListSceenings($filter: ModelSceeningFilterInput, $limit: Int, $nextToken: String) {
        listSceenings(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            jobId
            jobName
            crewId
            crewName
            crewPhoneNumber
            result
            method
            staffId
            staffName
            processed
            location
            processedAt
            submittedAt
            answeredQuestions {
              __typename
              items {
                __typename
                id
                question
                answer
                sceening {
                  __typename
                  id
                  jobId
                  jobName
                  crewId
                  crewName
                  crewPhoneNumber
                  result
                  method
                  staffId
                  staffName
                  processed
                  location
                  processedAt
                  submittedAt
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                sceeningAnsweredQuestionsId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    return <ListSceeningsQuery>response.data.listSceenings;
  }
  async SyncSceenings(
    filter?: ModelSceeningFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncSceeningsQuery> {
    const statement = `query SyncSceenings($filter: ModelSceeningFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncSceenings(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            jobId
            jobName
            crewId
            crewName
            crewPhoneNumber
            result
            method
            staffId
            staffName
            processed
            location
            processedAt
            submittedAt
            answeredQuestions {
              __typename
              items {
                __typename
                id
                question
                answer
                sceening {
                  __typename
                  id
                  jobId
                  jobName
                  crewId
                  crewName
                  crewPhoneNumber
                  result
                  method
                  staffId
                  staffName
                  processed
                  location
                  processedAt
                  submittedAt
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                sceeningAnsweredQuestionsId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncSceeningsQuery>response.data.syncSceenings;
  }
  async GetAnsweredQuestion(id: string): Promise<GetAnsweredQuestionQuery> {
    const statement = `query GetAnsweredQuestion($id: ID!) {
        getAnsweredQuestion(id: $id) {
          __typename
          id
          question
          answer
          sceening {
            __typename
            id
            jobId
            jobName
            crewId
            crewName
            crewPhoneNumber
            result
            method
            staffId
            staffName
            processed
            location
            processedAt
            submittedAt
            answeredQuestions {
              __typename
              items {
                __typename
                id
                question
                answer
                sceening {
                  __typename
                  id
                  jobId
                  jobName
                  crewId
                  crewName
                  crewPhoneNumber
                  result
                  method
                  staffId
                  staffName
                  processed
                  location
                  processedAt
                  submittedAt
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                sceeningAnsweredQuestionsId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sceeningAnsweredQuestionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAnsweredQuestionQuery>response.data.getAnsweredQuestion;
  }
  async ListAnsweredQuestions(
    filter?: ModelAnsweredQuestionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAnsweredQuestionsQuery> {
    const statement = `query ListAnsweredQuestions($filter: ModelAnsweredQuestionFilterInput, $limit: Int, $nextToken: String) {
        listAnsweredQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            question
            answer
            sceening {
              __typename
              id
              jobId
              jobName
              crewId
              crewName
              crewPhoneNumber
              result
              method
              staffId
              staffName
              processed
              location
              processedAt
              submittedAt
              answeredQuestions {
                __typename
                items {
                  __typename
                  id
                  question
                  answer
                  order
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  sceeningAnsweredQuestionsId
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            order
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            sceeningAnsweredQuestionsId
          }
          nextToken
          startedAt
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
    return <ListAnsweredQuestionsQuery>response.data.listAnsweredQuestions;
  }
  async SyncAnsweredQuestions(
    filter?: ModelAnsweredQuestionFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncAnsweredQuestionsQuery> {
    const statement = `query SyncAnsweredQuestions($filter: ModelAnsweredQuestionFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncAnsweredQuestions(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            question
            answer
            sceening {
              __typename
              id
              jobId
              jobName
              crewId
              crewName
              crewPhoneNumber
              result
              method
              staffId
              staffName
              processed
              location
              processedAt
              submittedAt
              answeredQuestions {
                __typename
                items {
                  __typename
                  id
                  question
                  answer
                  order
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  sceeningAnsweredQuestionsId
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            order
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            sceeningAnsweredQuestionsId
          }
          nextToken
          startedAt
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
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncAnsweredQuestionsQuery>response.data.syncAnsweredQuestions;
  }
  async GetForm(id: string): Promise<GetFormQuery> {
    const statement = `query GetForm($id: ID!) {
        getForm(id: $id) {
          __typename
          id
          name
          questions {
            __typename
            items {
              __typename
              id
              title
              options {
                __typename
                items {
                  __typename
                  id
                  questionId
                  optionId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              order
              optionOrderDesc
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              formQuestionsId
            }
            nextToken
            startedAt
          }
          jobs {
            __typename
            items {
              __typename
              id
              formId
              jobId
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFormQuery>response.data.getForm;
  }
  async ListForms(
    filter?: ModelFormFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFormsQuery> {
    const statement = `query ListForms($filter: ModelFormFilterInput, $limit: Int, $nextToken: String) {
        listForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            questions {
              __typename
              items {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              nextToken
              startedAt
            }
            jobs {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    return <ListFormsQuery>response.data.listForms;
  }
  async SyncForms(
    filter?: ModelFormFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncFormsQuery> {
    const statement = `query SyncForms($filter: ModelFormFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncForms(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            questions {
              __typename
              items {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              nextToken
              startedAt
            }
            jobs {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncFormsQuery>response.data.syncForms;
  }
  async GetJob(id: string): Promise<GetJobQuery> {
    const statement = `query GetJob($id: ID!) {
        getJob(id: $id) {
          __typename
          id
          code
          location
          startDate
          endDate
          forms {
            __typename
            items {
              __typename
              id
              formId
              jobId
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          crews {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              crew {
                __typename
                id
                userName
                role
                DOB
                healthCardNumber
                vaxxStatus
                userAgreement
                companyName
                address
                phonenumber
                name
                email
                defaultJobId
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetJobQuery>response.data.getJob;
  }
  async ListJobs(
    filter?: ModelJobFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListJobsQuery> {
    const statement = `query ListJobs($filter: ModelJobFilterInput, $limit: Int, $nextToken: String) {
        listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            code
            location
            startDate
            endDate
            forms {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    return <ListJobsQuery>response.data.listJobs;
  }
  async SyncJobs(
    filter?: ModelJobFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncJobsQuery> {
    const statement = `query SyncJobs($filter: ModelJobFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncJobs(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            code
            location
            startDate
            endDate
            forms {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            crews {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncJobsQuery>response.data.syncJobs;
  }
  async GetLocation(id: string): Promise<GetLocationQuery> {
    const statement = `query GetLocation($id: ID!) {
        getLocation(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLocationQuery>response.data.getLocation;
  }
  async ListLocations(
    filter?: ModelLocationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLocationsQuery> {
    const statement = `query ListLocations($filter: ModelLocationFilterInput, $limit: Int, $nextToken: String) {
        listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    return <ListLocationsQuery>response.data.listLocations;
  }
  async SyncLocations(
    filter?: ModelLocationFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncLocationsQuery> {
    const statement = `query SyncLocations($filter: ModelLocationFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncLocations(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncLocationsQuery>response.data.syncLocations;
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
              questionId
              optionId
              question {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              option {
                __typename
                id
                label
                value
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          form {
            __typename
            id
            name
            questions {
              __typename
              items {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              nextToken
              startedAt
            }
            jobs {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          order
          optionOrderDesc
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          formQuestionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
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
              items {
                __typename
                id
                questionId
                optionId
                question {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                option {
                  __typename
                  id
                  label
                  value
                  order
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            form {
              __typename
              id
              name
              questions {
                __typename
                items {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                nextToken
                startedAt
              }
              jobs {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            formQuestionsId
          }
          nextToken
          startedAt
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
  async SyncQuestions(
    filter?: ModelQuestionFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncQuestionsQuery> {
    const statement = `query SyncQuestions($filter: ModelQuestionFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncQuestions(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            title
            options {
              __typename
              items {
                __typename
                id
                questionId
                optionId
                question {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                option {
                  __typename
                  id
                  label
                  value
                  order
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            form {
              __typename
              id
              name
              questions {
                __typename
                items {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                nextToken
                startedAt
              }
              jobs {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            formQuestionsId
          }
          nextToken
          startedAt
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
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncQuestionsQuery>response.data.syncQuestions;
  }
  async GetOption(id: string): Promise<GetOptionQuery> {
    const statement = `query GetOption($id: ID!) {
        getOption(id: $id) {
          __typename
          id
          label
          value
          questions {
            __typename
            items {
              __typename
              id
              questionId
              optionId
              question {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              option {
                __typename
                id
                label
                value
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
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
            questions {
              __typename
              items {
                __typename
                id
                questionId
                optionId
                question {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                option {
                  __typename
                  id
                  label
                  value
                  order
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            order
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
  async SyncOptions(
    filter?: ModelOptionFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncOptionsQuery> {
    const statement = `query SyncOptions($filter: ModelOptionFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncOptions(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            label
            value
            questions {
              __typename
              items {
                __typename
                id
                questionId
                optionId
                question {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                option {
                  __typename
                  id
                  label
                  value
                  order
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            order
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncOptionsQuery>response.data.syncOptions;
  }
  async GetCrew(id: string): Promise<GetCrewQuery> {
    const statement = `query GetCrew($id: ID!) {
        getCrew(id: $id) {
          __typename
          id
          userName
          role
          DOB
          healthCardNumber
          vaxxStatus
          userAgreement
          companyName
          address
          phonenumber
          name
          email
          defaultJobId
          jobs {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              crew {
                __typename
                id
                userName
                role
                DOB
                healthCardNumber
                vaxxStatus
                userAgreement
                companyName
                address
                phonenumber
                name
                email
                defaultJobId
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
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
            userName
            role
            DOB
            healthCardNumber
            vaxxStatus
            userAgreement
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            jobs {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
  async SyncCrews(
    filter?: ModelCrewFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncCrewsQuery> {
    const statement = `query SyncCrews($filter: ModelCrewFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncCrews(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            userName
            role
            DOB
            healthCardNumber
            vaxxStatus
            userAgreement
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            jobs {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncCrewsQuery>response.data.syncCrews;
  }
  async GetFormJob(id: string): Promise<GetFormJobQuery> {
    const statement = `query GetFormJob($id: ID!) {
        getFormJob(id: $id) {
          __typename
          id
          formId
          jobId
          form {
            __typename
            id
            name
            questions {
              __typename
              items {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              nextToken
              startedAt
            }
            jobs {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          job {
            __typename
            id
            code
            location
            startDate
            endDate
            forms {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            crews {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFormJobQuery>response.data.getFormJob;
  }
  async ListFormJobs(
    filter?: ModelFormJobFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFormJobsQuery> {
    const statement = `query ListFormJobs($filter: ModelFormJobFilterInput, $limit: Int, $nextToken: String) {
        listFormJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            formId
            jobId
            form {
              __typename
              id
              name
              questions {
                __typename
                items {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                nextToken
                startedAt
              }
              jobs {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            job {
              __typename
              id
              code
              location
              startDate
              endDate
              forms {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              crews {
                __typename
                items {
                  __typename
                  id
                  jobId
                  crewId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    return <ListFormJobsQuery>response.data.listFormJobs;
  }
  async SyncFormJobs(
    filter?: ModelFormJobFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncFormJobsQuery> {
    const statement = `query SyncFormJobs($filter: ModelFormJobFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncFormJobs(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            formId
            jobId
            form {
              __typename
              id
              name
              questions {
                __typename
                items {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                nextToken
                startedAt
              }
              jobs {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            job {
              __typename
              id
              code
              location
              startDate
              endDate
              forms {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              crews {
                __typename
                items {
                  __typename
                  id
                  jobId
                  crewId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncFormJobsQuery>response.data.syncFormJobs;
  }
  async FormJobsByFormId(
    formId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelFormJobFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<FormJobsByFormIdQuery> {
    const statement = `query FormJobsByFormId($formId: ID!, $sortDirection: ModelSortDirection, $filter: ModelFormJobFilterInput, $limit: Int, $nextToken: String) {
        formJobsByFormId(formId: $formId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            formId
            jobId
            form {
              __typename
              id
              name
              questions {
                __typename
                items {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                nextToken
                startedAt
              }
              jobs {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            job {
              __typename
              id
              code
              location
              startDate
              endDate
              forms {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              crews {
                __typename
                items {
                  __typename
                  id
                  jobId
                  crewId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      formId,
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
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
    return <FormJobsByFormIdQuery>response.data.formJobsByFormId;
  }
  async FormJobsByJobId(
    jobId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelFormJobFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<FormJobsByJobIdQuery> {
    const statement = `query FormJobsByJobId($jobId: ID!, $sortDirection: ModelSortDirection, $filter: ModelFormJobFilterInput, $limit: Int, $nextToken: String) {
        formJobsByJobId(jobId: $jobId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            formId
            jobId
            form {
              __typename
              id
              name
              questions {
                __typename
                items {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                nextToken
                startedAt
              }
              jobs {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            job {
              __typename
              id
              code
              location
              startDate
              endDate
              forms {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              crews {
                __typename
                items {
                  __typename
                  id
                  jobId
                  crewId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      jobId,
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
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
    return <FormJobsByJobIdQuery>response.data.formJobsByJobId;
  }
  async GetCrewJob(id: string): Promise<GetCrewJobQuery> {
    const statement = `query GetCrewJob($id: ID!) {
        getCrewJob(id: $id) {
          __typename
          id
          jobId
          crewId
          job {
            __typename
            id
            code
            location
            startDate
            endDate
            forms {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            crews {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          crew {
            __typename
            id
            userName
            role
            DOB
            healthCardNumber
            vaxxStatus
            userAgreement
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            jobs {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCrewJobQuery>response.data.getCrewJob;
  }
  async ListCrewJobs(
    filter?: ModelCrewJobFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCrewJobsQuery> {
    const statement = `query ListCrewJobs($filter: ModelCrewJobFilterInput, $limit: Int, $nextToken: String) {
        listCrewJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            jobId
            crewId
            job {
              __typename
              id
              code
              location
              startDate
              endDate
              forms {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              crews {
                __typename
                items {
                  __typename
                  id
                  jobId
                  crewId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            crew {
              __typename
              id
              userName
              role
              DOB
              healthCardNumber
              vaxxStatus
              userAgreement
              companyName
              address
              phonenumber
              name
              email
              defaultJobId
              jobs {
                __typename
                items {
                  __typename
                  id
                  jobId
                  crewId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    return <ListCrewJobsQuery>response.data.listCrewJobs;
  }
  async SyncCrewJobs(
    filter?: ModelCrewJobFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncCrewJobsQuery> {
    const statement = `query SyncCrewJobs($filter: ModelCrewJobFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncCrewJobs(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            jobId
            crewId
            job {
              __typename
              id
              code
              location
              startDate
              endDate
              forms {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              crews {
                __typename
                items {
                  __typename
                  id
                  jobId
                  crewId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            crew {
              __typename
              id
              userName
              role
              DOB
              healthCardNumber
              vaxxStatus
              userAgreement
              companyName
              address
              phonenumber
              name
              email
              defaultJobId
              jobs {
                __typename
                items {
                  __typename
                  id
                  jobId
                  crewId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncCrewJobsQuery>response.data.syncCrewJobs;
  }
  async CrewJobsByJobId(
    jobId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelCrewJobFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<CrewJobsByJobIdQuery> {
    const statement = `query CrewJobsByJobId($jobId: ID!, $sortDirection: ModelSortDirection, $filter: ModelCrewJobFilterInput, $limit: Int, $nextToken: String) {
        crewJobsByJobId(jobId: $jobId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            jobId
            crewId
            job {
              __typename
              id
              code
              location
              startDate
              endDate
              forms {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              crews {
                __typename
                items {
                  __typename
                  id
                  jobId
                  crewId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            crew {
              __typename
              id
              userName
              role
              DOB
              healthCardNumber
              vaxxStatus
              userAgreement
              companyName
              address
              phonenumber
              name
              email
              defaultJobId
              jobs {
                __typename
                items {
                  __typename
                  id
                  jobId
                  crewId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      jobId,
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
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
    return <CrewJobsByJobIdQuery>response.data.crewJobsByJobId;
  }
  async CrewJobsByCrewId(
    crewId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelCrewJobFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<CrewJobsByCrewIdQuery> {
    const statement = `query CrewJobsByCrewId($crewId: ID!, $sortDirection: ModelSortDirection, $filter: ModelCrewJobFilterInput, $limit: Int, $nextToken: String) {
        crewJobsByCrewId(crewId: $crewId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            jobId
            crewId
            job {
              __typename
              id
              code
              location
              startDate
              endDate
              forms {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              crews {
                __typename
                items {
                  __typename
                  id
                  jobId
                  crewId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            crew {
              __typename
              id
              userName
              role
              DOB
              healthCardNumber
              vaxxStatus
              userAgreement
              companyName
              address
              phonenumber
              name
              email
              defaultJobId
              jobs {
                __typename
                items {
                  __typename
                  id
                  jobId
                  crewId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      crewId,
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
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
    return <CrewJobsByCrewIdQuery>response.data.crewJobsByCrewId;
  }
  async GetQuestionOption(id: string): Promise<GetQuestionOptionQuery> {
    const statement = `query GetQuestionOption($id: ID!) {
        getQuestionOption(id: $id) {
          __typename
          id
          questionId
          optionId
          question {
            __typename
            id
            title
            options {
              __typename
              items {
                __typename
                id
                questionId
                optionId
                question {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                option {
                  __typename
                  id
                  label
                  value
                  order
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            form {
              __typename
              id
              name
              questions {
                __typename
                items {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                nextToken
                startedAt
              }
              jobs {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            formQuestionsId
          }
          option {
            __typename
            id
            label
            value
            questions {
              __typename
              items {
                __typename
                id
                questionId
                optionId
                question {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                option {
                  __typename
                  id
                  label
                  value
                  order
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            order
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuestionOptionQuery>response.data.getQuestionOption;
  }
  async ListQuestionOptions(
    filter?: ModelQuestionOptionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuestionOptionsQuery> {
    const statement = `query ListQuestionOptions($filter: ModelQuestionOptionFilterInput, $limit: Int, $nextToken: String) {
        listQuestionOptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            questionId
            optionId
            question {
              __typename
              id
              title
              options {
                __typename
                items {
                  __typename
                  id
                  questionId
                  optionId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              order
              optionOrderDesc
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              formQuestionsId
            }
            option {
              __typename
              id
              label
              value
              questions {
                __typename
                items {
                  __typename
                  id
                  questionId
                  optionId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              order
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    return <ListQuestionOptionsQuery>response.data.listQuestionOptions;
  }
  async SyncQuestionOptions(
    filter?: ModelQuestionOptionFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncQuestionOptionsQuery> {
    const statement = `query SyncQuestionOptions($filter: ModelQuestionOptionFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncQuestionOptions(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            questionId
            optionId
            question {
              __typename
              id
              title
              options {
                __typename
                items {
                  __typename
                  id
                  questionId
                  optionId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              order
              optionOrderDesc
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              formQuestionsId
            }
            option {
              __typename
              id
              label
              value
              questions {
                __typename
                items {
                  __typename
                  id
                  questionId
                  optionId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              order
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncQuestionOptionsQuery>response.data.syncQuestionOptions;
  }
  async QuestionOptionsByQuestionId(
    questionId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelQuestionOptionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<QuestionOptionsByQuestionIdQuery> {
    const statement = `query QuestionOptionsByQuestionId($questionId: ID!, $sortDirection: ModelSortDirection, $filter: ModelQuestionOptionFilterInput, $limit: Int, $nextToken: String) {
        questionOptionsByQuestionId(questionId: $questionId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            questionId
            optionId
            question {
              __typename
              id
              title
              options {
                __typename
                items {
                  __typename
                  id
                  questionId
                  optionId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              order
              optionOrderDesc
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              formQuestionsId
            }
            option {
              __typename
              id
              label
              value
              questions {
                __typename
                items {
                  __typename
                  id
                  questionId
                  optionId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              order
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      questionId,
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
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
    return <QuestionOptionsByQuestionIdQuery>(
      response.data.questionOptionsByQuestionId
    );
  }
  async QuestionOptionsByOptionId(
    optionId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelQuestionOptionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<QuestionOptionsByOptionIdQuery> {
    const statement = `query QuestionOptionsByOptionId($optionId: ID!, $sortDirection: ModelSortDirection, $filter: ModelQuestionOptionFilterInput, $limit: Int, $nextToken: String) {
        questionOptionsByOptionId(optionId: $optionId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            questionId
            optionId
            question {
              __typename
              id
              title
              options {
                __typename
                items {
                  __typename
                  id
                  questionId
                  optionId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              order
              optionOrderDesc
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              formQuestionsId
            }
            option {
              __typename
              id
              label
              value
              questions {
                __typename
                items {
                  __typename
                  id
                  questionId
                  optionId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              order
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      optionId,
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
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
    return <QuestionOptionsByOptionIdQuery>(
      response.data.questionOptionsByOptionId
    );
  }
  OnCreateSceeningListener(
    filter?: ModelSubscriptionSceeningFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSceening">>
  > {
    const statement = `subscription OnCreateSceening($filter: ModelSubscriptionSceeningFilterInput) {
        onCreateSceening(filter: $filter) {
          __typename
          id
          jobId
          jobName
          crewId
          crewName
          crewPhoneNumber
          result
          method
          staffId
          staffName
          processed
          location
          processedAt
          submittedAt
          answeredQuestions {
            __typename
            items {
              __typename
              id
              question
              answer
              sceening {
                __typename
                id
                jobId
                jobName
                crewId
                crewName
                crewPhoneNumber
                result
                method
                staffId
                staffName
                processed
                location
                processedAt
                submittedAt
                answeredQuestions {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              order
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              sceeningAnsweredQuestionsId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSceening">>
    >;
  }

  OnUpdateSceeningListener(
    filter?: ModelSubscriptionSceeningFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSceening">>
  > {
    const statement = `subscription OnUpdateSceening($filter: ModelSubscriptionSceeningFilterInput) {
        onUpdateSceening(filter: $filter) {
          __typename
          id
          jobId
          jobName
          crewId
          crewName
          crewPhoneNumber
          result
          method
          staffId
          staffName
          processed
          location
          processedAt
          submittedAt
          answeredQuestions {
            __typename
            items {
              __typename
              id
              question
              answer
              sceening {
                __typename
                id
                jobId
                jobName
                crewId
                crewName
                crewPhoneNumber
                result
                method
                staffId
                staffName
                processed
                location
                processedAt
                submittedAt
                answeredQuestions {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              order
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              sceeningAnsweredQuestionsId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSceening">>
    >;
  }

  OnDeleteSceeningListener(
    filter?: ModelSubscriptionSceeningFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSceening">>
  > {
    const statement = `subscription OnDeleteSceening($filter: ModelSubscriptionSceeningFilterInput) {
        onDeleteSceening(filter: $filter) {
          __typename
          id
          jobId
          jobName
          crewId
          crewName
          crewPhoneNumber
          result
          method
          staffId
          staffName
          processed
          location
          processedAt
          submittedAt
          answeredQuestions {
            __typename
            items {
              __typename
              id
              question
              answer
              sceening {
                __typename
                id
                jobId
                jobName
                crewId
                crewName
                crewPhoneNumber
                result
                method
                staffId
                staffName
                processed
                location
                processedAt
                submittedAt
                answeredQuestions {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              order
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              sceeningAnsweredQuestionsId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSceening">>
    >;
  }

  OnCreateAnsweredQuestionListener(
    filter?: ModelSubscriptionAnsweredQuestionFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateAnsweredQuestion">
    >
  > {
    const statement = `subscription OnCreateAnsweredQuestion($filter: ModelSubscriptionAnsweredQuestionFilterInput) {
        onCreateAnsweredQuestion(filter: $filter) {
          __typename
          id
          question
          answer
          sceening {
            __typename
            id
            jobId
            jobName
            crewId
            crewName
            crewPhoneNumber
            result
            method
            staffId
            staffName
            processed
            location
            processedAt
            submittedAt
            answeredQuestions {
              __typename
              items {
                __typename
                id
                question
                answer
                sceening {
                  __typename
                  id
                  jobId
                  jobName
                  crewId
                  crewName
                  crewPhoneNumber
                  result
                  method
                  staffId
                  staffName
                  processed
                  location
                  processedAt
                  submittedAt
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                sceeningAnsweredQuestionsId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sceeningAnsweredQuestionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateAnsweredQuestion">
      >
    >;
  }

  OnUpdateAnsweredQuestionListener(
    filter?: ModelSubscriptionAnsweredQuestionFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateAnsweredQuestion">
    >
  > {
    const statement = `subscription OnUpdateAnsweredQuestion($filter: ModelSubscriptionAnsweredQuestionFilterInput) {
        onUpdateAnsweredQuestion(filter: $filter) {
          __typename
          id
          question
          answer
          sceening {
            __typename
            id
            jobId
            jobName
            crewId
            crewName
            crewPhoneNumber
            result
            method
            staffId
            staffName
            processed
            location
            processedAt
            submittedAt
            answeredQuestions {
              __typename
              items {
                __typename
                id
                question
                answer
                sceening {
                  __typename
                  id
                  jobId
                  jobName
                  crewId
                  crewName
                  crewPhoneNumber
                  result
                  method
                  staffId
                  staffName
                  processed
                  location
                  processedAt
                  submittedAt
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                sceeningAnsweredQuestionsId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sceeningAnsweredQuestionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateAnsweredQuestion">
      >
    >;
  }

  OnDeleteAnsweredQuestionListener(
    filter?: ModelSubscriptionAnsweredQuestionFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteAnsweredQuestion">
    >
  > {
    const statement = `subscription OnDeleteAnsweredQuestion($filter: ModelSubscriptionAnsweredQuestionFilterInput) {
        onDeleteAnsweredQuestion(filter: $filter) {
          __typename
          id
          question
          answer
          sceening {
            __typename
            id
            jobId
            jobName
            crewId
            crewName
            crewPhoneNumber
            result
            method
            staffId
            staffName
            processed
            location
            processedAt
            submittedAt
            answeredQuestions {
              __typename
              items {
                __typename
                id
                question
                answer
                sceening {
                  __typename
                  id
                  jobId
                  jobName
                  crewId
                  crewName
                  crewPhoneNumber
                  result
                  method
                  staffId
                  staffName
                  processed
                  location
                  processedAt
                  submittedAt
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                sceeningAnsweredQuestionsId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sceeningAnsweredQuestionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteAnsweredQuestion">
      >
    >;
  }

  OnCreateFormListener(
    filter?: ModelSubscriptionFormFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateForm">>
  > {
    const statement = `subscription OnCreateForm($filter: ModelSubscriptionFormFilterInput) {
        onCreateForm(filter: $filter) {
          __typename
          id
          name
          questions {
            __typename
            items {
              __typename
              id
              title
              options {
                __typename
                items {
                  __typename
                  id
                  questionId
                  optionId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              order
              optionOrderDesc
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              formQuestionsId
            }
            nextToken
            startedAt
          }
          jobs {
            __typename
            items {
              __typename
              id
              formId
              jobId
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateForm">>
    >;
  }

  OnUpdateFormListener(
    filter?: ModelSubscriptionFormFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateForm">>
  > {
    const statement = `subscription OnUpdateForm($filter: ModelSubscriptionFormFilterInput) {
        onUpdateForm(filter: $filter) {
          __typename
          id
          name
          questions {
            __typename
            items {
              __typename
              id
              title
              options {
                __typename
                items {
                  __typename
                  id
                  questionId
                  optionId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              order
              optionOrderDesc
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              formQuestionsId
            }
            nextToken
            startedAt
          }
          jobs {
            __typename
            items {
              __typename
              id
              formId
              jobId
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateForm">>
    >;
  }

  OnDeleteFormListener(
    filter?: ModelSubscriptionFormFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteForm">>
  > {
    const statement = `subscription OnDeleteForm($filter: ModelSubscriptionFormFilterInput) {
        onDeleteForm(filter: $filter) {
          __typename
          id
          name
          questions {
            __typename
            items {
              __typename
              id
              title
              options {
                __typename
                items {
                  __typename
                  id
                  questionId
                  optionId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              order
              optionOrderDesc
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              formQuestionsId
            }
            nextToken
            startedAt
          }
          jobs {
            __typename
            items {
              __typename
              id
              formId
              jobId
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteForm">>
    >;
  }

  OnCreateJobListener(
    filter?: ModelSubscriptionJobFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateJob">>
  > {
    const statement = `subscription OnCreateJob($filter: ModelSubscriptionJobFilterInput) {
        onCreateJob(filter: $filter) {
          __typename
          id
          code
          location
          startDate
          endDate
          forms {
            __typename
            items {
              __typename
              id
              formId
              jobId
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          crews {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              crew {
                __typename
                id
                userName
                role
                DOB
                healthCardNumber
                vaxxStatus
                userAgreement
                companyName
                address
                phonenumber
                name
                email
                defaultJobId
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateJob">>
    >;
  }

  OnUpdateJobListener(
    filter?: ModelSubscriptionJobFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateJob">>
  > {
    const statement = `subscription OnUpdateJob($filter: ModelSubscriptionJobFilterInput) {
        onUpdateJob(filter: $filter) {
          __typename
          id
          code
          location
          startDate
          endDate
          forms {
            __typename
            items {
              __typename
              id
              formId
              jobId
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          crews {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              crew {
                __typename
                id
                userName
                role
                DOB
                healthCardNumber
                vaxxStatus
                userAgreement
                companyName
                address
                phonenumber
                name
                email
                defaultJobId
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateJob">>
    >;
  }

  OnDeleteJobListener(
    filter?: ModelSubscriptionJobFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteJob">>
  > {
    const statement = `subscription OnDeleteJob($filter: ModelSubscriptionJobFilterInput) {
        onDeleteJob(filter: $filter) {
          __typename
          id
          code
          location
          startDate
          endDate
          forms {
            __typename
            items {
              __typename
              id
              formId
              jobId
              form {
                __typename
                id
                name
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          crews {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              crew {
                __typename
                id
                userName
                role
                DOB
                healthCardNumber
                vaxxStatus
                userAgreement
                companyName
                address
                phonenumber
                name
                email
                defaultJobId
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteJob">>
    >;
  }

  OnCreateLocationListener(
    filter?: ModelSubscriptionLocationFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLocation">>
  > {
    const statement = `subscription OnCreateLocation($filter: ModelSubscriptionLocationFilterInput) {
        onCreateLocation(filter: $filter) {
          __typename
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLocation">>
    >;
  }

  OnUpdateLocationListener(
    filter?: ModelSubscriptionLocationFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLocation">>
  > {
    const statement = `subscription OnUpdateLocation($filter: ModelSubscriptionLocationFilterInput) {
        onUpdateLocation(filter: $filter) {
          __typename
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLocation">>
    >;
  }

  OnDeleteLocationListener(
    filter?: ModelSubscriptionLocationFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLocation">>
  > {
    const statement = `subscription OnDeleteLocation($filter: ModelSubscriptionLocationFilterInput) {
        onDeleteLocation(filter: $filter) {
          __typename
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLocation">>
    >;
  }

  OnCreateQuestionListener(
    filter?: ModelSubscriptionQuestionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateQuestion">>
  > {
    const statement = `subscription OnCreateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
        onCreateQuestion(filter: $filter) {
          __typename
          id
          title
          options {
            __typename
            items {
              __typename
              id
              questionId
              optionId
              question {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              option {
                __typename
                id
                label
                value
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          form {
            __typename
            id
            name
            questions {
              __typename
              items {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              nextToken
              startedAt
            }
            jobs {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          order
          optionOrderDesc
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          formQuestionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateQuestion">>
    >;
  }

  OnUpdateQuestionListener(
    filter?: ModelSubscriptionQuestionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateQuestion">>
  > {
    const statement = `subscription OnUpdateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
        onUpdateQuestion(filter: $filter) {
          __typename
          id
          title
          options {
            __typename
            items {
              __typename
              id
              questionId
              optionId
              question {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              option {
                __typename
                id
                label
                value
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          form {
            __typename
            id
            name
            questions {
              __typename
              items {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              nextToken
              startedAt
            }
            jobs {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          order
          optionOrderDesc
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          formQuestionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateQuestion">>
    >;
  }

  OnDeleteQuestionListener(
    filter?: ModelSubscriptionQuestionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteQuestion">>
  > {
    const statement = `subscription OnDeleteQuestion($filter: ModelSubscriptionQuestionFilterInput) {
        onDeleteQuestion(filter: $filter) {
          __typename
          id
          title
          options {
            __typename
            items {
              __typename
              id
              questionId
              optionId
              question {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              option {
                __typename
                id
                label
                value
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          form {
            __typename
            id
            name
            questions {
              __typename
              items {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              nextToken
              startedAt
            }
            jobs {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          order
          optionOrderDesc
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          formQuestionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteQuestion">>
    >;
  }

  OnCreateOptionListener(
    filter?: ModelSubscriptionOptionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateOption">>
  > {
    const statement = `subscription OnCreateOption($filter: ModelSubscriptionOptionFilterInput) {
        onCreateOption(filter: $filter) {
          __typename
          id
          label
          value
          questions {
            __typename
            items {
              __typename
              id
              questionId
              optionId
              question {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              option {
                __typename
                id
                label
                value
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateOption">>
    >;
  }

  OnUpdateOptionListener(
    filter?: ModelSubscriptionOptionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateOption">>
  > {
    const statement = `subscription OnUpdateOption($filter: ModelSubscriptionOptionFilterInput) {
        onUpdateOption(filter: $filter) {
          __typename
          id
          label
          value
          questions {
            __typename
            items {
              __typename
              id
              questionId
              optionId
              question {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              option {
                __typename
                id
                label
                value
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateOption">>
    >;
  }

  OnDeleteOptionListener(
    filter?: ModelSubscriptionOptionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteOption">>
  > {
    const statement = `subscription OnDeleteOption($filter: ModelSubscriptionOptionFilterInput) {
        onDeleteOption(filter: $filter) {
          __typename
          id
          label
          value
          questions {
            __typename
            items {
              __typename
              id
              questionId
              optionId
              question {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              option {
                __typename
                id
                label
                value
                questions {
                  __typename
                  nextToken
                  startedAt
                }
                order
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteOption">>
    >;
  }

  OnCreateCrewListener(
    filter?: ModelSubscriptionCrewFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCrew">>
  > {
    const statement = `subscription OnCreateCrew($filter: ModelSubscriptionCrewFilterInput) {
        onCreateCrew(filter: $filter) {
          __typename
          id
          userName
          role
          DOB
          healthCardNumber
          vaxxStatus
          userAgreement
          companyName
          address
          phonenumber
          name
          email
          defaultJobId
          jobs {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              crew {
                __typename
                id
                userName
                role
                DOB
                healthCardNumber
                vaxxStatus
                userAgreement
                companyName
                address
                phonenumber
                name
                email
                defaultJobId
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCrew">>
    >;
  }

  OnUpdateCrewListener(
    filter?: ModelSubscriptionCrewFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCrew">>
  > {
    const statement = `subscription OnUpdateCrew($filter: ModelSubscriptionCrewFilterInput) {
        onUpdateCrew(filter: $filter) {
          __typename
          id
          userName
          role
          DOB
          healthCardNumber
          vaxxStatus
          userAgreement
          companyName
          address
          phonenumber
          name
          email
          defaultJobId
          jobs {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              crew {
                __typename
                id
                userName
                role
                DOB
                healthCardNumber
                vaxxStatus
                userAgreement
                companyName
                address
                phonenumber
                name
                email
                defaultJobId
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCrew">>
    >;
  }

  OnDeleteCrewListener(
    filter?: ModelSubscriptionCrewFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCrew">>
  > {
    const statement = `subscription OnDeleteCrew($filter: ModelSubscriptionCrewFilterInput) {
        onDeleteCrew(filter: $filter) {
          __typename
          id
          userName
          role
          DOB
          healthCardNumber
          vaxxStatus
          userAgreement
          companyName
          address
          phonenumber
          name
          email
          defaultJobId
          jobs {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              job {
                __typename
                id
                code
                location
                startDate
                endDate
                forms {
                  __typename
                  nextToken
                  startedAt
                }
                crews {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              crew {
                __typename
                id
                userName
                role
                DOB
                healthCardNumber
                vaxxStatus
                userAgreement
                companyName
                address
                phonenumber
                name
                email
                defaultJobId
                jobs {
                  __typename
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCrew">>
    >;
  }

  OnCreateFormJobListener(
    filter?: ModelSubscriptionFormJobFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFormJob">>
  > {
    const statement = `subscription OnCreateFormJob($filter: ModelSubscriptionFormJobFilterInput) {
        onCreateFormJob(filter: $filter) {
          __typename
          id
          formId
          jobId
          form {
            __typename
            id
            name
            questions {
              __typename
              items {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              nextToken
              startedAt
            }
            jobs {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          job {
            __typename
            id
            code
            location
            startDate
            endDate
            forms {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            crews {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFormJob">>
    >;
  }

  OnUpdateFormJobListener(
    filter?: ModelSubscriptionFormJobFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFormJob">>
  > {
    const statement = `subscription OnUpdateFormJob($filter: ModelSubscriptionFormJobFilterInput) {
        onUpdateFormJob(filter: $filter) {
          __typename
          id
          formId
          jobId
          form {
            __typename
            id
            name
            questions {
              __typename
              items {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              nextToken
              startedAt
            }
            jobs {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          job {
            __typename
            id
            code
            location
            startDate
            endDate
            forms {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            crews {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFormJob">>
    >;
  }

  OnDeleteFormJobListener(
    filter?: ModelSubscriptionFormJobFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFormJob">>
  > {
    const statement = `subscription OnDeleteFormJob($filter: ModelSubscriptionFormJobFilterInput) {
        onDeleteFormJob(filter: $filter) {
          __typename
          id
          formId
          jobId
          form {
            __typename
            id
            name
            questions {
              __typename
              items {
                __typename
                id
                title
                options {
                  __typename
                  nextToken
                  startedAt
                }
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                order
                optionOrderDesc
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                formQuestionsId
              }
              nextToken
              startedAt
            }
            jobs {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          job {
            __typename
            id
            code
            location
            startDate
            endDate
            forms {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            crews {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFormJob">>
    >;
  }

  OnCreateCrewJobListener(
    filter?: ModelSubscriptionCrewJobFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCrewJob">>
  > {
    const statement = `subscription OnCreateCrewJob($filter: ModelSubscriptionCrewJobFilterInput) {
        onCreateCrewJob(filter: $filter) {
          __typename
          id
          jobId
          crewId
          job {
            __typename
            id
            code
            location
            startDate
            endDate
            forms {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            crews {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          crew {
            __typename
            id
            userName
            role
            DOB
            healthCardNumber
            vaxxStatus
            userAgreement
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            jobs {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCrewJob">>
    >;
  }

  OnUpdateCrewJobListener(
    filter?: ModelSubscriptionCrewJobFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCrewJob">>
  > {
    const statement = `subscription OnUpdateCrewJob($filter: ModelSubscriptionCrewJobFilterInput) {
        onUpdateCrewJob(filter: $filter) {
          __typename
          id
          jobId
          crewId
          job {
            __typename
            id
            code
            location
            startDate
            endDate
            forms {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            crews {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          crew {
            __typename
            id
            userName
            role
            DOB
            healthCardNumber
            vaxxStatus
            userAgreement
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            jobs {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCrewJob">>
    >;
  }

  OnDeleteCrewJobListener(
    filter?: ModelSubscriptionCrewJobFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCrewJob">>
  > {
    const statement = `subscription OnDeleteCrewJob($filter: ModelSubscriptionCrewJobFilterInput) {
        onDeleteCrewJob(filter: $filter) {
          __typename
          id
          jobId
          crewId
          job {
            __typename
            id
            code
            location
            startDate
            endDate
            forms {
              __typename
              items {
                __typename
                id
                formId
                jobId
                form {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            crews {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          crew {
            __typename
            id
            userName
            role
            DOB
            healthCardNumber
            vaxxStatus
            userAgreement
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            jobs {
              __typename
              items {
                __typename
                id
                jobId
                crewId
                job {
                  __typename
                  id
                  code
                  location
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                crew {
                  __typename
                  id
                  userName
                  role
                  DOB
                  healthCardNumber
                  vaxxStatus
                  userAgreement
                  companyName
                  address
                  phonenumber
                  name
                  email
                  defaultJobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCrewJob">>
    >;
  }

  OnCreateQuestionOptionListener(
    filter?: ModelSubscriptionQuestionOptionFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuestionOption">
    >
  > {
    const statement = `subscription OnCreateQuestionOption($filter: ModelSubscriptionQuestionOptionFilterInput) {
        onCreateQuestionOption(filter: $filter) {
          __typename
          id
          questionId
          optionId
          question {
            __typename
            id
            title
            options {
              __typename
              items {
                __typename
                id
                questionId
                optionId
                question {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                option {
                  __typename
                  id
                  label
                  value
                  order
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            form {
              __typename
              id
              name
              questions {
                __typename
                items {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                nextToken
                startedAt
              }
              jobs {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            formQuestionsId
          }
          option {
            __typename
            id
            label
            value
            questions {
              __typename
              items {
                __typename
                id
                questionId
                optionId
                question {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                option {
                  __typename
                  id
                  label
                  value
                  order
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            order
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateQuestionOption">
      >
    >;
  }

  OnUpdateQuestionOptionListener(
    filter?: ModelSubscriptionQuestionOptionFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuestionOption">
    >
  > {
    const statement = `subscription OnUpdateQuestionOption($filter: ModelSubscriptionQuestionOptionFilterInput) {
        onUpdateQuestionOption(filter: $filter) {
          __typename
          id
          questionId
          optionId
          question {
            __typename
            id
            title
            options {
              __typename
              items {
                __typename
                id
                questionId
                optionId
                question {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                option {
                  __typename
                  id
                  label
                  value
                  order
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            form {
              __typename
              id
              name
              questions {
                __typename
                items {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                nextToken
                startedAt
              }
              jobs {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            formQuestionsId
          }
          option {
            __typename
            id
            label
            value
            questions {
              __typename
              items {
                __typename
                id
                questionId
                optionId
                question {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                option {
                  __typename
                  id
                  label
                  value
                  order
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            order
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateQuestionOption">
      >
    >;
  }

  OnDeleteQuestionOptionListener(
    filter?: ModelSubscriptionQuestionOptionFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuestionOption">
    >
  > {
    const statement = `subscription OnDeleteQuestionOption($filter: ModelSubscriptionQuestionOptionFilterInput) {
        onDeleteQuestionOption(filter: $filter) {
          __typename
          id
          questionId
          optionId
          question {
            __typename
            id
            title
            options {
              __typename
              items {
                __typename
                id
                questionId
                optionId
                question {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                option {
                  __typename
                  id
                  label
                  value
                  order
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            form {
              __typename
              id
              name
              questions {
                __typename
                items {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                nextToken
                startedAt
              }
              jobs {
                __typename
                items {
                  __typename
                  id
                  formId
                  jobId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            formQuestionsId
          }
          option {
            __typename
            id
            label
            value
            questions {
              __typename
              items {
                __typename
                id
                questionId
                optionId
                question {
                  __typename
                  id
                  title
                  order
                  optionOrderDesc
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  formQuestionsId
                }
                option {
                  __typename
                  id
                  label
                  value
                  order
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            order
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteQuestionOption">
      >
    >;
  }
}
