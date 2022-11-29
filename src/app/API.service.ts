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
  onCreateSceening: OnCreateSceeningSubscription;
  onUpdateSceening: OnUpdateSceeningSubscription;
  onDeleteSceening: OnDeleteSceeningSubscription;
  onCreateForm: OnCreateFormSubscription;
  onUpdateForm: OnUpdateFormSubscription;
  onDeleteForm: OnDeleteFormSubscription;
  onCreateJob: OnCreateJobSubscription;
  onUpdateJob: OnUpdateJobSubscription;
  onDeleteJob: OnDeleteJobSubscription;
  onCreateQuestion: OnCreateQuestionSubscription;
  onUpdateQuestion: OnUpdateQuestionSubscription;
  onDeleteQuestion: OnDeleteQuestionSubscription;
  onCreateOption: OnCreateOptionSubscription;
  onUpdateOption: OnUpdateOptionSubscription;
  onDeleteOption: OnDeleteOptionSubscription;
  onCreateCrew: OnCreateCrewSubscription;
  onUpdateCrew: OnUpdateCrewSubscription;
  onDeleteCrew: OnDeleteCrewSubscription;
  onCreateSceeningJob: OnCreateSceeningJobSubscription;
  onUpdateSceeningJob: OnUpdateSceeningJobSubscription;
  onDeleteSceeningJob: OnDeleteSceeningJobSubscription;
  onCreateSceeningCrew: OnCreateSceeningCrewSubscription;
  onUpdateSceeningCrew: OnUpdateSceeningCrewSubscription;
  onDeleteSceeningCrew: OnDeleteSceeningCrewSubscription;
  onCreateSceeningOption: OnCreateSceeningOptionSubscription;
  onUpdateSceeningOption: OnUpdateSceeningOptionSubscription;
  onDeleteSceeningOption: OnDeleteSceeningOptionSubscription;
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
};

export type ModelSceeningConditionInput = {
  and?: Array<ModelSceeningConditionInput | null> | null;
  or?: Array<ModelSceeningConditionInput | null> | null;
  not?: ModelSceeningConditionInput | null;
};

export type Sceening = {
  __typename: "Sceening";
  id: string;
  jobs?: ModelSceeningJobConnection | null;
  crews?: ModelSceeningCrewConnection | null;
  options?: ModelSceeningOptionConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelSceeningJobConnection = {
  __typename: "ModelSceeningJobConnection";
  items: Array<SceeningJob | null>;
  nextToken?: string | null;
};

export type SceeningJob = {
  __typename: "SceeningJob";
  id: string;
  sceeningId: string;
  jobId: string;
  sceening: Sceening;
  job: Job;
  createdAt: string;
  updatedAt: string;
};

export type Job = {
  __typename: "Job";
  id: string;
  code?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  sceenings?: ModelSceeningJobConnection | null;
  forms?: ModelFormJobConnection | null;
  crews?: ModelCrewJobConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelFormJobConnection = {
  __typename: "ModelFormJobConnection";
  items: Array<FormJob | null>;
  nextToken?: string | null;
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
};

export type Form = {
  __typename: "Form";
  id: string;
  name?: string | null;
  questions?: ModelQuestionConnection | null;
  jobs?: ModelFormJobConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection";
  items: Array<Question | null>;
  nextToken?: string | null;
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
  formQuestionsId?: string | null;
};

export type ModelQuestionOptionConnection = {
  __typename: "ModelQuestionOptionConnection";
  items: Array<QuestionOption | null>;
  nextToken?: string | null;
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
};

export type Option = {
  __typename: "Option";
  id: string;
  label?: string | null;
  value?: string | null;
  questions?: ModelQuestionOptionConnection | null;
  sceenings?: ModelSceeningOptionConnection | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelSceeningOptionConnection = {
  __typename: "ModelSceeningOptionConnection";
  items: Array<SceeningOption | null>;
  nextToken?: string | null;
};

export type SceeningOption = {
  __typename: "SceeningOption";
  id: string;
  sceeningId: string;
  optionId: string;
  sceening: Sceening;
  option: Option;
  createdAt: string;
  updatedAt: string;
};

export type ModelCrewJobConnection = {
  __typename: "ModelCrewJobConnection";
  items: Array<CrewJob | null>;
  nextToken?: string | null;
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
};

export type Crew = {
  __typename: "Crew";
  id: string;
  userName?: string | null;
  companyName?: string | null;
  address?: string | null;
  phonenumber?: string | null;
  name?: string | null;
  email?: string | null;
  defaultJobId?: string | null;
  sceenings?: ModelSceeningCrewConnection | null;
  jobs?: ModelCrewJobConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelSceeningCrewConnection = {
  __typename: "ModelSceeningCrewConnection";
  items: Array<SceeningCrew | null>;
  nextToken?: string | null;
};

export type SceeningCrew = {
  __typename: "SceeningCrew";
  id: string;
  sceeningId: string;
  crewId: string;
  sceening: Sceening;
  crew: Crew;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSceeningInput = {
  id: string;
};

export type DeleteSceeningInput = {
  id: string;
};

export type CreateFormInput = {
  id?: string | null;
  name?: string | null;
};

export type ModelFormConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelFormConditionInput | null> | null;
  or?: Array<ModelFormConditionInput | null> | null;
  not?: ModelFormConditionInput | null;
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

export type UpdateFormInput = {
  id: string;
  name?: string | null;
};

export type DeleteFormInput = {
  id: string;
};

export type CreateJobInput = {
  id?: string | null;
  code?: string | null;
  startDate?: string | null;
  endDate?: string | null;
};

export type ModelJobConditionInput = {
  code?: ModelStringInput | null;
  startDate?: ModelStringInput | null;
  endDate?: ModelStringInput | null;
  and?: Array<ModelJobConditionInput | null> | null;
  or?: Array<ModelJobConditionInput | null> | null;
  not?: ModelJobConditionInput | null;
};

export type UpdateJobInput = {
  id: string;
  code?: string | null;
  startDate?: string | null;
  endDate?: string | null;
};

export type DeleteJobInput = {
  id: string;
};

export type CreateQuestionInput = {
  id?: string | null;
  title?: string | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
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

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
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

export type UpdateQuestionInput = {
  id: string;
  title?: string | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  formQuestionsId?: string | null;
};

export type DeleteQuestionInput = {
  id: string;
};

export type CreateOptionInput = {
  id?: string | null;
  label?: string | null;
  value?: string | null;
  order?: number | null;
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
};

export type DeleteOptionInput = {
  id: string;
};

export type CreateCrewInput = {
  id?: string | null;
  userName?: string | null;
  companyName?: string | null;
  address?: string | null;
  phonenumber?: string | null;
  name?: string | null;
  email?: string | null;
  defaultJobId?: string | null;
};

export type ModelCrewConditionInput = {
  userName?: ModelStringInput | null;
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
  companyName?: string | null;
  address?: string | null;
  phonenumber?: string | null;
  name?: string | null;
  email?: string | null;
  defaultJobId?: string | null;
};

export type DeleteCrewInput = {
  id: string;
};

export type CreateSceeningJobInput = {
  id?: string | null;
  sceeningId: string;
  jobId: string;
};

export type ModelSceeningJobConditionInput = {
  sceeningId?: ModelIDInput | null;
  jobId?: ModelIDInput | null;
  and?: Array<ModelSceeningJobConditionInput | null> | null;
  or?: Array<ModelSceeningJobConditionInput | null> | null;
  not?: ModelSceeningJobConditionInput | null;
};

export type UpdateSceeningJobInput = {
  id: string;
  sceeningId?: string | null;
  jobId?: string | null;
};

export type DeleteSceeningJobInput = {
  id: string;
};

export type CreateSceeningCrewInput = {
  id?: string | null;
  sceeningId: string;
  crewId: string;
};

export type ModelSceeningCrewConditionInput = {
  sceeningId?: ModelIDInput | null;
  crewId?: ModelIDInput | null;
  and?: Array<ModelSceeningCrewConditionInput | null> | null;
  or?: Array<ModelSceeningCrewConditionInput | null> | null;
  not?: ModelSceeningCrewConditionInput | null;
};

export type UpdateSceeningCrewInput = {
  id: string;
  sceeningId?: string | null;
  crewId?: string | null;
};

export type DeleteSceeningCrewInput = {
  id: string;
};

export type CreateSceeningOptionInput = {
  id?: string | null;
  sceeningId: string;
  optionId: string;
};

export type ModelSceeningOptionConditionInput = {
  sceeningId?: ModelIDInput | null;
  optionId?: ModelIDInput | null;
  and?: Array<ModelSceeningOptionConditionInput | null> | null;
  or?: Array<ModelSceeningOptionConditionInput | null> | null;
  not?: ModelSceeningOptionConditionInput | null;
};

export type UpdateSceeningOptionInput = {
  id: string;
  sceeningId?: string | null;
  optionId?: string | null;
};

export type DeleteSceeningOptionInput = {
  id: string;
};

export type CreateFormJobInput = {
  id?: string | null;
  formId: string;
  jobId: string;
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
};

export type DeleteFormJobInput = {
  id: string;
};

export type CreateCrewJobInput = {
  id?: string | null;
  jobId: string;
  crewId: string;
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
};

export type DeleteCrewJobInput = {
  id: string;
};

export type CreateQuestionOptionInput = {
  id?: string | null;
  questionId: string;
  optionId: string;
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
};

export type DeleteQuestionOptionInput = {
  id: string;
};

export type ModelSceeningFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelSceeningFilterInput | null> | null;
  or?: Array<ModelSceeningFilterInput | null> | null;
  not?: ModelSceeningFilterInput | null;
};

export type ModelSceeningConnection = {
  __typename: "ModelSceeningConnection";
  items: Array<Sceening | null>;
  nextToken?: string | null;
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
};

export type ModelJobFilterInput = {
  id?: ModelIDInput | null;
  code?: ModelStringInput | null;
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
};

export type ModelCrewFilterInput = {
  id?: ModelIDInput | null;
  userName?: ModelStringInput | null;
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
};

export type ModelSceeningJobFilterInput = {
  id?: ModelIDInput | null;
  sceeningId?: ModelIDInput | null;
  jobId?: ModelIDInput | null;
  and?: Array<ModelSceeningJobFilterInput | null> | null;
  or?: Array<ModelSceeningJobFilterInput | null> | null;
  not?: ModelSceeningJobFilterInput | null;
};

export type ModelSceeningCrewFilterInput = {
  id?: ModelIDInput | null;
  sceeningId?: ModelIDInput | null;
  crewId?: ModelIDInput | null;
  and?: Array<ModelSceeningCrewFilterInput | null> | null;
  or?: Array<ModelSceeningCrewFilterInput | null> | null;
  not?: ModelSceeningCrewFilterInput | null;
};

export type ModelSceeningOptionFilterInput = {
  id?: ModelIDInput | null;
  sceeningId?: ModelIDInput | null;
  optionId?: ModelIDInput | null;
  and?: Array<ModelSceeningOptionFilterInput | null> | null;
  or?: Array<ModelSceeningOptionFilterInput | null> | null;
  not?: ModelSceeningOptionFilterInput | null;
};

export type ModelFormJobFilterInput = {
  id?: ModelIDInput | null;
  formId?: ModelIDInput | null;
  jobId?: ModelIDInput | null;
  and?: Array<ModelFormJobFilterInput | null> | null;
  or?: Array<ModelFormJobFilterInput | null> | null;
  not?: ModelFormJobFilterInput | null;
};

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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelSubscriptionSceeningFilterInput = {
  id?: ModelSubscriptionIDInput | null;
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

export type ModelSubscriptionFormFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionFormFilterInput | null> | null;
  or?: Array<ModelSubscriptionFormFilterInput | null> | null;
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

export type ModelSubscriptionJobFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  code?: ModelSubscriptionStringInput | null;
  startDate?: ModelSubscriptionStringInput | null;
  endDate?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionJobFilterInput | null> | null;
  or?: Array<ModelSubscriptionJobFilterInput | null> | null;
};

export type ModelSubscriptionQuestionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  title?: ModelSubscriptionStringInput | null;
  order?: ModelSubscriptionIntInput | null;
  optionOrderDesc?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionQuestionFilterInput | null> | null;
  or?: Array<ModelSubscriptionQuestionFilterInput | null> | null;
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

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
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
  companyName?: ModelSubscriptionStringInput | null;
  address?: ModelSubscriptionStringInput | null;
  phonenumber?: ModelSubscriptionStringInput | null;
  name?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  defaultJobId?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCrewFilterInput | null> | null;
  or?: Array<ModelSubscriptionCrewFilterInput | null> | null;
};

export type ModelSubscriptionSceeningJobFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  sceeningId?: ModelSubscriptionIDInput | null;
  jobId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionSceeningJobFilterInput | null> | null;
  or?: Array<ModelSubscriptionSceeningJobFilterInput | null> | null;
};

export type ModelSubscriptionSceeningCrewFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  sceeningId?: ModelSubscriptionIDInput | null;
  crewId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionSceeningCrewFilterInput | null> | null;
  or?: Array<ModelSubscriptionSceeningCrewFilterInput | null> | null;
};

export type ModelSubscriptionSceeningOptionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  sceeningId?: ModelSubscriptionIDInput | null;
  optionId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionSceeningOptionFilterInput | null> | null;
  or?: Array<ModelSubscriptionSceeningOptionFilterInput | null> | null;
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
  jobs?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  crews?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  options?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningId: string;
      optionId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSceeningMutation = {
  __typename: "Sceening";
  id: string;
  jobs?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  crews?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  options?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningId: string;
      optionId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteSceeningMutation = {
  __typename: "Sceening";
  id: string;
  jobs?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  crews?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  options?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningId: string;
      optionId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
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
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
      formQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
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
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
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
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
      formQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
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
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
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
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
      formQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
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
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateJobMutation = {
  __typename: "Job";
  id: string;
  code?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  sceenings?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
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
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateJobMutation = {
  __typename: "Job";
  id: string;
  code?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  sceenings?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
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
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteJobMutation = {
  __typename: "Job";
  id: string;
  code?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  sceenings?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
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
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
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
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  form?: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
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
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  form?: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
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
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  form?: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
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
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningId: string;
      optionId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
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
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningId: string;
      optionId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
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
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningId: string;
      optionId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCrewMutation = {
  __typename: "Crew";
  id: string;
  userName?: string | null;
  companyName?: string | null;
  address?: string | null;
  phonenumber?: string | null;
  name?: string | null;
  email?: string | null;
  defaultJobId?: string | null;
  sceenings?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCrewMutation = {
  __typename: "Crew";
  id: string;
  userName?: string | null;
  companyName?: string | null;
  address?: string | null;
  phonenumber?: string | null;
  name?: string | null;
  email?: string | null;
  defaultJobId?: string | null;
  sceenings?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCrewMutation = {
  __typename: "Crew";
  id: string;
  userName?: string | null;
  companyName?: string | null;
  address?: string | null;
  phonenumber?: string | null;
  name?: string | null;
  email?: string | null;
  defaultJobId?: string | null;
  sceenings?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateSceeningJobMutation = {
  __typename: "SceeningJob";
  id: string;
  sceeningId: string;
  jobId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateSceeningJobMutation = {
  __typename: "SceeningJob";
  id: string;
  sceeningId: string;
  jobId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteSceeningJobMutation = {
  __typename: "SceeningJob";
  id: string;
  sceeningId: string;
  jobId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type CreateSceeningCrewMutation = {
  __typename: "SceeningCrew";
  id: string;
  sceeningId: string;
  crewId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateSceeningCrewMutation = {
  __typename: "SceeningCrew";
  id: string;
  sceeningId: string;
  crewId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteSceeningCrewMutation = {
  __typename: "SceeningCrew";
  id: string;
  sceeningId: string;
  crewId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type CreateSceeningOptionMutation = {
  __typename: "SceeningOption";
  id: string;
  sceeningId: string;
  optionId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  option: {
    __typename: "Option";
    id: string;
    label?: string | null;
    value?: string | null;
    questions?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateSceeningOptionMutation = {
  __typename: "SceeningOption";
  id: string;
  sceeningId: string;
  optionId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  option: {
    __typename: "Option";
    id: string;
    label?: string | null;
    value?: string | null;
    questions?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteSceeningOptionMutation = {
  __typename: "SceeningOption";
  id: string;
  sceeningId: string;
  optionId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  option: {
    __typename: "Option";
    id: string;
    label?: string | null;
    value?: string | null;
    questions?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
      nextToken?: string | null;
    } | null;
    form?: {
      __typename: "Form";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
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
    } | null;
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
      nextToken?: string | null;
    } | null;
    form?: {
      __typename: "Form";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
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
    } | null;
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
      nextToken?: string | null;
    } | null;
    form?: {
      __typename: "Form";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
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
    } | null;
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type GetSceeningQuery = {
  __typename: "Sceening";
  id: string;
  jobs?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  crews?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  options?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningId: string;
      optionId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListSceeningsQuery = {
  __typename: "ModelSceeningConnection";
  items: Array<{
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
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
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
      formQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
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
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListFormsQuery = {
  __typename: "ModelFormConnection";
  items: Array<{
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetJobQuery = {
  __typename: "Job";
  id: string;
  code?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  sceenings?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
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
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListJobsQuery = {
  __typename: "ModelJobConnection";
  items: Array<{
    __typename: "Job";
    id: string;
    code?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
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
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  form?: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
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
      nextToken?: string | null;
    } | null;
    form?: {
      __typename: "Form";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
    formQuestionsId?: string | null;
  } | null>;
  nextToken?: string | null;
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
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningId: string;
      optionId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
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
      nextToken?: string | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetCrewQuery = {
  __typename: "Crew";
  id: string;
  userName?: string | null;
  companyName?: string | null;
  address?: string | null;
  phonenumber?: string | null;
  name?: string | null;
  email?: string | null;
  defaultJobId?: string | null;
  sceenings?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCrewsQuery = {
  __typename: "ModelCrewConnection";
  items: Array<{
    __typename: "Crew";
    id: string;
    userName?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetSceeningJobQuery = {
  __typename: "SceeningJob";
  id: string;
  sceeningId: string;
  jobId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListSceeningJobsQuery = {
  __typename: "ModelSceeningJobConnection";
  items: Array<{
    __typename: "SceeningJob";
    id: string;
    sceeningId: string;
    jobId: string;
    sceening: {
      __typename: "Sceening";
      id: string;
      createdAt: string;
      updatedAt: string;
    };
    job: {
      __typename: "Job";
      id: string;
      code?: string | null;
      startDate?: string | null;
      endDate?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetSceeningCrewQuery = {
  __typename: "SceeningCrew";
  id: string;
  sceeningId: string;
  crewId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListSceeningCrewsQuery = {
  __typename: "ModelSceeningCrewConnection";
  items: Array<{
    __typename: "SceeningCrew";
    id: string;
    sceeningId: string;
    crewId: string;
    sceening: {
      __typename: "Sceening";
      id: string;
      createdAt: string;
      updatedAt: string;
    };
    crew: {
      __typename: "Crew";
      id: string;
      userName?: string | null;
      companyName?: string | null;
      address?: string | null;
      phonenumber?: string | null;
      name?: string | null;
      email?: string | null;
      defaultJobId?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetSceeningOptionQuery = {
  __typename: "SceeningOption";
  id: string;
  sceeningId: string;
  optionId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  option: {
    __typename: "Option";
    id: string;
    label?: string | null;
    value?: string | null;
    questions?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListSceeningOptionsQuery = {
  __typename: "ModelSceeningOptionConnection";
  items: Array<{
    __typename: "SceeningOption";
    id: string;
    sceeningId: string;
    optionId: string;
    sceening: {
      __typename: "Sceening";
      id: string;
      createdAt: string;
      updatedAt: string;
    };
    option: {
      __typename: "Option";
      id: string;
      label?: string | null;
      value?: string | null;
      order?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
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
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
      createdAt: string;
      updatedAt: string;
    };
    job: {
      __typename: "Job";
      id: string;
      code?: string | null;
      startDate?: string | null;
      endDate?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
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
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
      startDate?: string | null;
      endDate?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    crew: {
      __typename: "Crew";
      id: string;
      userName?: string | null;
      companyName?: string | null;
      address?: string | null;
      phonenumber?: string | null;
      name?: string | null;
      email?: string | null;
      defaultJobId?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
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
      nextToken?: string | null;
    } | null;
    form?: {
      __typename: "Form";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
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
    } | null;
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
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
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type QuestionsByOrderQuery = {
  __typename: "ModelQuestionConnection";
  items: Array<{
    __typename: "Question";
    id: string;
    title?: string | null;
    options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
    } | null;
    form?: {
      __typename: "Form";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
    formQuestionsId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OptionsByOrderQuery = {
  __typename: "ModelOptionConnection";
  items: Array<{
    __typename: "Option";
    id: string;
    label?: string | null;
    value?: string | null;
    questions?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type SceeningJobsBySceeningIdQuery = {
  __typename: "ModelSceeningJobConnection";
  items: Array<{
    __typename: "SceeningJob";
    id: string;
    sceeningId: string;
    jobId: string;
    sceening: {
      __typename: "Sceening";
      id: string;
      createdAt: string;
      updatedAt: string;
    };
    job: {
      __typename: "Job";
      id: string;
      code?: string | null;
      startDate?: string | null;
      endDate?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type SceeningJobsByJobIdQuery = {
  __typename: "ModelSceeningJobConnection";
  items: Array<{
    __typename: "SceeningJob";
    id: string;
    sceeningId: string;
    jobId: string;
    sceening: {
      __typename: "Sceening";
      id: string;
      createdAt: string;
      updatedAt: string;
    };
    job: {
      __typename: "Job";
      id: string;
      code?: string | null;
      startDate?: string | null;
      endDate?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type SceeningCrewsBySceeningIdQuery = {
  __typename: "ModelSceeningCrewConnection";
  items: Array<{
    __typename: "SceeningCrew";
    id: string;
    sceeningId: string;
    crewId: string;
    sceening: {
      __typename: "Sceening";
      id: string;
      createdAt: string;
      updatedAt: string;
    };
    crew: {
      __typename: "Crew";
      id: string;
      userName?: string | null;
      companyName?: string | null;
      address?: string | null;
      phonenumber?: string | null;
      name?: string | null;
      email?: string | null;
      defaultJobId?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type SceeningCrewsByCrewIdQuery = {
  __typename: "ModelSceeningCrewConnection";
  items: Array<{
    __typename: "SceeningCrew";
    id: string;
    sceeningId: string;
    crewId: string;
    sceening: {
      __typename: "Sceening";
      id: string;
      createdAt: string;
      updatedAt: string;
    };
    crew: {
      __typename: "Crew";
      id: string;
      userName?: string | null;
      companyName?: string | null;
      address?: string | null;
      phonenumber?: string | null;
      name?: string | null;
      email?: string | null;
      defaultJobId?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type SceeningOptionsBySceeningIdQuery = {
  __typename: "ModelSceeningOptionConnection";
  items: Array<{
    __typename: "SceeningOption";
    id: string;
    sceeningId: string;
    optionId: string;
    sceening: {
      __typename: "Sceening";
      id: string;
      createdAt: string;
      updatedAt: string;
    };
    option: {
      __typename: "Option";
      id: string;
      label?: string | null;
      value?: string | null;
      order?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type SceeningOptionsByOptionIdQuery = {
  __typename: "ModelSceeningOptionConnection";
  items: Array<{
    __typename: "SceeningOption";
    id: string;
    sceeningId: string;
    optionId: string;
    sceening: {
      __typename: "Sceening";
      id: string;
      createdAt: string;
      updatedAt: string;
    };
    option: {
      __typename: "Option";
      id: string;
      label?: string | null;
      value?: string | null;
      order?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
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
      createdAt: string;
      updatedAt: string;
    };
    job: {
      __typename: "Job";
      id: string;
      code?: string | null;
      startDate?: string | null;
      endDate?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
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
      createdAt: string;
      updatedAt: string;
    };
    job: {
      __typename: "Job";
      id: string;
      code?: string | null;
      startDate?: string | null;
      endDate?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
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
      startDate?: string | null;
      endDate?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    crew: {
      __typename: "Crew";
      id: string;
      userName?: string | null;
      companyName?: string | null;
      address?: string | null;
      phonenumber?: string | null;
      name?: string | null;
      email?: string | null;
      defaultJobId?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
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
      startDate?: string | null;
      endDate?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    crew: {
      __typename: "Crew";
      id: string;
      userName?: string | null;
      companyName?: string | null;
      address?: string | null;
      phonenumber?: string | null;
      name?: string | null;
      email?: string | null;
      defaultJobId?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
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
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
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
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
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
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
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
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateSceeningSubscription = {
  __typename: "Sceening";
  id: string;
  jobs?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  crews?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  options?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningId: string;
      optionId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSceeningSubscription = {
  __typename: "Sceening";
  id: string;
  jobs?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  crews?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  options?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningId: string;
      optionId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSceeningSubscription = {
  __typename: "Sceening";
  id: string;
  jobs?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  crews?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  options?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningId: string;
      optionId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
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
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
      formQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
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
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
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
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
      formQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
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
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
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
      order?: number | null;
      optionOrderDesc?: boolean | null;
      createdAt: string;
      updatedAt: string;
      formQuestionsId?: string | null;
    } | null>;
    nextToken?: string | null;
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
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateJobSubscription = {
  __typename: "Job";
  id: string;
  code?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  sceenings?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
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
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateJobSubscription = {
  __typename: "Job";
  id: string;
  code?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  sceenings?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
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
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteJobSubscription = {
  __typename: "Job";
  id: string;
  code?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  sceenings?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formId: string;
      jobId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
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
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
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
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  form?: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
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
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  form?: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
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
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  form?: {
    __typename: "Form";
    id: string;
    name?: string | null;
    questions?: {
      __typename: "ModelQuestionConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
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
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningId: string;
      optionId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
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
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningId: string;
      optionId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
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
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningId: string;
      optionId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCrewSubscription = {
  __typename: "Crew";
  id: string;
  userName?: string | null;
  companyName?: string | null;
  address?: string | null;
  phonenumber?: string | null;
  name?: string | null;
  email?: string | null;
  defaultJobId?: string | null;
  sceenings?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCrewSubscription = {
  __typename: "Crew";
  id: string;
  userName?: string | null;
  companyName?: string | null;
  address?: string | null;
  phonenumber?: string | null;
  name?: string | null;
  email?: string | null;
  defaultJobId?: string | null;
  sceenings?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCrewSubscription = {
  __typename: "Crew";
  id: string;
  userName?: string | null;
  companyName?: string | null;
  address?: string | null;
  phonenumber?: string | null;
  name?: string | null;
  email?: string | null;
  defaultJobId?: string | null;
  sceenings?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobId: string;
      crewId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateSceeningJobSubscription = {
  __typename: "SceeningJob";
  id: string;
  sceeningId: string;
  jobId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSceeningJobSubscription = {
  __typename: "SceeningJob";
  id: string;
  sceeningId: string;
  jobId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSceeningJobSubscription = {
  __typename: "SceeningJob";
  id: string;
  sceeningId: string;
  jobId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnCreateSceeningCrewSubscription = {
  __typename: "SceeningCrew";
  id: string;
  sceeningId: string;
  crewId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSceeningCrewSubscription = {
  __typename: "SceeningCrew";
  id: string;
  sceeningId: string;
  crewId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSceeningCrewSubscription = {
  __typename: "SceeningCrew";
  id: string;
  sceeningId: string;
  crewId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnCreateSceeningOptionSubscription = {
  __typename: "SceeningOption";
  id: string;
  sceeningId: string;
  optionId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  option: {
    __typename: "Option";
    id: string;
    label?: string | null;
    value?: string | null;
    questions?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSceeningOptionSubscription = {
  __typename: "SceeningOption";
  id: string;
  sceeningId: string;
  optionId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  option: {
    __typename: "Option";
    id: string;
    label?: string | null;
    value?: string | null;
    questions?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSceeningOptionSubscription = {
  __typename: "SceeningOption";
  id: string;
  sceeningId: string;
  optionId: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  option: {
    __typename: "Option";
    id: string;
    label?: string | null;
    value?: string | null;
    questions?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
    startDate?: string | null;
    endDate?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
    } | null;
    forms?: {
      __typename: "ModelFormJobConnection";
      nextToken?: string | null;
    } | null;
    crews?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  crew: {
    __typename: "Crew";
    id: string;
    userName?: string | null;
    companyName?: string | null;
    address?: string | null;
    phonenumber?: string | null;
    name?: string | null;
    email?: string | null;
    defaultJobId?: string | null;
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
    } | null;
    jobs?: {
      __typename: "ModelCrewJobConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
      nextToken?: string | null;
    } | null;
    form?: {
      __typename: "Form";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
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
    } | null;
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
      nextToken?: string | null;
    } | null;
    form?: {
      __typename: "Form";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
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
    } | null;
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
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
      nextToken?: string | null;
    } | null;
    form?: {
      __typename: "Form";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
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
    } | null;
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
    } | null;
    order?: number | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
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
          jobs {
            __typename
            items {
              __typename
              id
              sceeningId
              jobId
              createdAt
              updatedAt
            }
            nextToken
          }
          crews {
            __typename
            items {
              __typename
              id
              sceeningId
              crewId
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            __typename
            items {
              __typename
              id
              sceeningId
              optionId
              createdAt
              updatedAt
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
          jobs {
            __typename
            items {
              __typename
              id
              sceeningId
              jobId
              createdAt
              updatedAt
            }
            nextToken
          }
          crews {
            __typename
            items {
              __typename
              id
              sceeningId
              crewId
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            __typename
            items {
              __typename
              id
              sceeningId
              optionId
              createdAt
              updatedAt
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
          jobs {
            __typename
            items {
              __typename
              id
              sceeningId
              jobId
              createdAt
              updatedAt
            }
            nextToken
          }
          crews {
            __typename
            items {
              __typename
              id
              sceeningId
              crewId
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            __typename
            items {
              __typename
              id
              sceeningId
              optionId
              createdAt
              updatedAt
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
    return <DeleteSceeningMutation>response.data.deleteSceening;
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
              order
              optionOrderDesc
              createdAt
              updatedAt
              formQuestionsId
            }
            nextToken
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
              order
              optionOrderDesc
              createdAt
              updatedAt
              formQuestionsId
            }
            nextToken
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
              order
              optionOrderDesc
              createdAt
              updatedAt
              formQuestionsId
            }
            nextToken
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
          startDate
          endDate
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              jobId
              createdAt
              updatedAt
            }
            nextToken
          }
          forms {
            __typename
            items {
              __typename
              id
              formId
              jobId
              createdAt
              updatedAt
            }
            nextToken
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
          startDate
          endDate
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              jobId
              createdAt
              updatedAt
            }
            nextToken
          }
          forms {
            __typename
            items {
              __typename
              id
              formId
              jobId
              createdAt
              updatedAt
            }
            nextToken
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
          startDate
          endDate
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              jobId
              createdAt
              updatedAt
            }
            nextToken
          }
          forms {
            __typename
            items {
              __typename
              id
              formId
              jobId
              createdAt
              updatedAt
            }
            nextToken
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
    return <DeleteJobMutation>response.data.deleteJob;
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
              createdAt
              updatedAt
            }
            nextToken
          }
          form {
            __typename
            id
            name
            questions {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          order
          optionOrderDesc
          createdAt
          updatedAt
          formQuestionsId
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
              questionId
              optionId
              createdAt
              updatedAt
            }
            nextToken
          }
          form {
            __typename
            id
            name
            questions {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          order
          optionOrderDesc
          createdAt
          updatedAt
          formQuestionsId
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
              questionId
              optionId
              createdAt
              updatedAt
            }
            nextToken
          }
          form {
            __typename
            id
            name
            questions {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          order
          optionOrderDesc
          createdAt
          updatedAt
          formQuestionsId
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
          questions {
            __typename
            items {
              __typename
              id
              questionId
              optionId
              createdAt
              updatedAt
            }
            nextToken
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              optionId
              createdAt
              updatedAt
            }
            nextToken
          }
          order
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
              createdAt
              updatedAt
            }
            nextToken
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              optionId
              createdAt
              updatedAt
            }
            nextToken
          }
          order
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
              createdAt
              updatedAt
            }
            nextToken
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              optionId
              createdAt
              updatedAt
            }
            nextToken
          }
          order
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
          companyName
          address
          phonenumber
          name
          email
          defaultJobId
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              crewId
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              createdAt
              updatedAt
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
          companyName
          address
          phonenumber
          name
          email
          defaultJobId
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              crewId
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              createdAt
              updatedAt
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
          companyName
          address
          phonenumber
          name
          email
          defaultJobId
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              crewId
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              createdAt
              updatedAt
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
    return <DeleteCrewMutation>response.data.deleteCrew;
  }
  async CreateSceeningJob(
    input: CreateSceeningJobInput,
    condition?: ModelSceeningJobConditionInput
  ): Promise<CreateSceeningJobMutation> {
    const statement = `mutation CreateSceeningJob($input: CreateSceeningJobInput!, $condition: ModelSceeningJobConditionInput) {
        createSceeningJob(input: $input, condition: $condition) {
          __typename
          id
          sceeningId
          jobId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          job {
            __typename
            id
            code
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
    return <CreateSceeningJobMutation>response.data.createSceeningJob;
  }
  async UpdateSceeningJob(
    input: UpdateSceeningJobInput,
    condition?: ModelSceeningJobConditionInput
  ): Promise<UpdateSceeningJobMutation> {
    const statement = `mutation UpdateSceeningJob($input: UpdateSceeningJobInput!, $condition: ModelSceeningJobConditionInput) {
        updateSceeningJob(input: $input, condition: $condition) {
          __typename
          id
          sceeningId
          jobId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          job {
            __typename
            id
            code
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
    return <UpdateSceeningJobMutation>response.data.updateSceeningJob;
  }
  async DeleteSceeningJob(
    input: DeleteSceeningJobInput,
    condition?: ModelSceeningJobConditionInput
  ): Promise<DeleteSceeningJobMutation> {
    const statement = `mutation DeleteSceeningJob($input: DeleteSceeningJobInput!, $condition: ModelSceeningJobConditionInput) {
        deleteSceeningJob(input: $input, condition: $condition) {
          __typename
          id
          sceeningId
          jobId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          job {
            __typename
            id
            code
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
    return <DeleteSceeningJobMutation>response.data.deleteSceeningJob;
  }
  async CreateSceeningCrew(
    input: CreateSceeningCrewInput,
    condition?: ModelSceeningCrewConditionInput
  ): Promise<CreateSceeningCrewMutation> {
    const statement = `mutation CreateSceeningCrew($input: CreateSceeningCrewInput!, $condition: ModelSceeningCrewConditionInput) {
        createSceeningCrew(input: $input, condition: $condition) {
          __typename
          id
          sceeningId
          crewId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          crew {
            __typename
            id
            userName
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            sceenings {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
    return <CreateSceeningCrewMutation>response.data.createSceeningCrew;
  }
  async UpdateSceeningCrew(
    input: UpdateSceeningCrewInput,
    condition?: ModelSceeningCrewConditionInput
  ): Promise<UpdateSceeningCrewMutation> {
    const statement = `mutation UpdateSceeningCrew($input: UpdateSceeningCrewInput!, $condition: ModelSceeningCrewConditionInput) {
        updateSceeningCrew(input: $input, condition: $condition) {
          __typename
          id
          sceeningId
          crewId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          crew {
            __typename
            id
            userName
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            sceenings {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
    return <UpdateSceeningCrewMutation>response.data.updateSceeningCrew;
  }
  async DeleteSceeningCrew(
    input: DeleteSceeningCrewInput,
    condition?: ModelSceeningCrewConditionInput
  ): Promise<DeleteSceeningCrewMutation> {
    const statement = `mutation DeleteSceeningCrew($input: DeleteSceeningCrewInput!, $condition: ModelSceeningCrewConditionInput) {
        deleteSceeningCrew(input: $input, condition: $condition) {
          __typename
          id
          sceeningId
          crewId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          crew {
            __typename
            id
            userName
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            sceenings {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
    return <DeleteSceeningCrewMutation>response.data.deleteSceeningCrew;
  }
  async CreateSceeningOption(
    input: CreateSceeningOptionInput,
    condition?: ModelSceeningOptionConditionInput
  ): Promise<CreateSceeningOptionMutation> {
    const statement = `mutation CreateSceeningOption($input: CreateSceeningOptionInput!, $condition: ModelSceeningOptionConditionInput) {
        createSceeningOption(input: $input, condition: $condition) {
          __typename
          id
          sceeningId
          optionId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          option {
            __typename
            id
            label
            value
            questions {
              __typename
              nextToken
            }
            sceenings {
              __typename
              nextToken
            }
            order
            createdAt
            updatedAt
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
    return <CreateSceeningOptionMutation>response.data.createSceeningOption;
  }
  async UpdateSceeningOption(
    input: UpdateSceeningOptionInput,
    condition?: ModelSceeningOptionConditionInput
  ): Promise<UpdateSceeningOptionMutation> {
    const statement = `mutation UpdateSceeningOption($input: UpdateSceeningOptionInput!, $condition: ModelSceeningOptionConditionInput) {
        updateSceeningOption(input: $input, condition: $condition) {
          __typename
          id
          sceeningId
          optionId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          option {
            __typename
            id
            label
            value
            questions {
              __typename
              nextToken
            }
            sceenings {
              __typename
              nextToken
            }
            order
            createdAt
            updatedAt
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
    return <UpdateSceeningOptionMutation>response.data.updateSceeningOption;
  }
  async DeleteSceeningOption(
    input: DeleteSceeningOptionInput,
    condition?: ModelSceeningOptionConditionInput
  ): Promise<DeleteSceeningOptionMutation> {
    const statement = `mutation DeleteSceeningOption($input: DeleteSceeningOptionInput!, $condition: ModelSceeningOptionConditionInput) {
        deleteSceeningOption(input: $input, condition: $condition) {
          __typename
          id
          sceeningId
          optionId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          option {
            __typename
            id
            label
            value
            questions {
              __typename
              nextToken
            }
            sceenings {
              __typename
              nextToken
            }
            order
            createdAt
            updatedAt
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
    return <DeleteSceeningOptionMutation>response.data.deleteSceeningOption;
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
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          job {
            __typename
            id
            code
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
          form {
            __typename
            id
            name
            questions {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          job {
            __typename
            id
            code
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          job {
            __typename
            id
            code
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          crew {
            __typename
            id
            userName
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            sceenings {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          crew {
            __typename
            id
            userName
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            sceenings {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          crew {
            __typename
            id
            userName
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            sceenings {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
              nextToken
            }
            form {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
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
            }
            sceenings {
              __typename
              nextToken
            }
            order
            createdAt
            updatedAt
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
              nextToken
            }
            form {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
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
            }
            sceenings {
              __typename
              nextToken
            }
            order
            createdAt
            updatedAt
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
              nextToken
            }
            form {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
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
            }
            sceenings {
              __typename
              nextToken
            }
            order
            createdAt
            updatedAt
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
    return <DeleteQuestionOptionMutation>response.data.deleteQuestionOption;
  }
  async GetSceening(id: string): Promise<GetSceeningQuery> {
    const statement = `query GetSceening($id: ID!) {
        getSceening(id: $id) {
          __typename
          id
          jobs {
            __typename
            items {
              __typename
              id
              sceeningId
              jobId
              createdAt
              updatedAt
            }
            nextToken
          }
          crews {
            __typename
            items {
              __typename
              id
              sceeningId
              crewId
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            __typename
            items {
              __typename
              id
              sceeningId
              optionId
              createdAt
              updatedAt
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
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
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
    return <ListSceeningsQuery>response.data.listSceenings;
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
              order
              optionOrderDesc
              createdAt
              updatedAt
              formQuestionsId
            }
            nextToken
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
              nextToken
            }
            jobs {
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
    return <ListFormsQuery>response.data.listForms;
  }
  async GetJob(id: string): Promise<GetJobQuery> {
    const statement = `query GetJob($id: ID!) {
        getJob(id: $id) {
          __typename
          id
          code
          startDate
          endDate
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              jobId
              createdAt
              updatedAt
            }
            nextToken
          }
          forms {
            __typename
            items {
              __typename
              id
              formId
              jobId
              createdAt
              updatedAt
            }
            nextToken
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
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
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
    return <ListJobsQuery>response.data.listJobs;
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
              createdAt
              updatedAt
            }
            nextToken
          }
          form {
            __typename
            id
            name
            questions {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          order
          optionOrderDesc
          createdAt
          updatedAt
          formQuestionsId
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
            form {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
            formQuestionsId
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
          questions {
            __typename
            items {
              __typename
              id
              questionId
              optionId
              createdAt
              updatedAt
            }
            nextToken
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              optionId
              createdAt
              updatedAt
            }
            nextToken
          }
          order
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
              nextToken
            }
            sceenings {
              __typename
              nextToken
            }
            order
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
    return <ListOptionsQuery>response.data.listOptions;
  }
  async GetCrew(id: string): Promise<GetCrewQuery> {
    const statement = `query GetCrew($id: ID!) {
        getCrew(id: $id) {
          __typename
          id
          userName
          companyName
          address
          phonenumber
          name
          email
          defaultJobId
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              crewId
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              createdAt
              updatedAt
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
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            sceenings {
              __typename
              nextToken
            }
            jobs {
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
    return <ListCrewsQuery>response.data.listCrews;
  }
  async GetSceeningJob(id: string): Promise<GetSceeningJobQuery> {
    const statement = `query GetSceeningJob($id: ID!) {
        getSceeningJob(id: $id) {
          __typename
          id
          sceeningId
          jobId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          job {
            __typename
            id
            code
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
    return <GetSceeningJobQuery>response.data.getSceeningJob;
  }
  async ListSceeningJobs(
    filter?: ModelSceeningJobFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSceeningJobsQuery> {
    const statement = `query ListSceeningJobs($filter: ModelSceeningJobFilterInput, $limit: Int, $nextToken: String) {
        listSceeningJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            sceeningId
            jobId
            sceening {
              __typename
              id
              createdAt
              updatedAt
            }
            job {
              __typename
              id
              code
              startDate
              endDate
              createdAt
              updatedAt
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
    return <ListSceeningJobsQuery>response.data.listSceeningJobs;
  }
  async GetSceeningCrew(id: string): Promise<GetSceeningCrewQuery> {
    const statement = `query GetSceeningCrew($id: ID!) {
        getSceeningCrew(id: $id) {
          __typename
          id
          sceeningId
          crewId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          crew {
            __typename
            id
            userName
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            sceenings {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
    return <GetSceeningCrewQuery>response.data.getSceeningCrew;
  }
  async ListSceeningCrews(
    filter?: ModelSceeningCrewFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSceeningCrewsQuery> {
    const statement = `query ListSceeningCrews($filter: ModelSceeningCrewFilterInput, $limit: Int, $nextToken: String) {
        listSceeningCrews(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            sceeningId
            crewId
            sceening {
              __typename
              id
              createdAt
              updatedAt
            }
            crew {
              __typename
              id
              userName
              companyName
              address
              phonenumber
              name
              email
              defaultJobId
              createdAt
              updatedAt
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
    return <ListSceeningCrewsQuery>response.data.listSceeningCrews;
  }
  async GetSceeningOption(id: string): Promise<GetSceeningOptionQuery> {
    const statement = `query GetSceeningOption($id: ID!) {
        getSceeningOption(id: $id) {
          __typename
          id
          sceeningId
          optionId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          option {
            __typename
            id
            label
            value
            questions {
              __typename
              nextToken
            }
            sceenings {
              __typename
              nextToken
            }
            order
            createdAt
            updatedAt
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
    return <GetSceeningOptionQuery>response.data.getSceeningOption;
  }
  async ListSceeningOptions(
    filter?: ModelSceeningOptionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSceeningOptionsQuery> {
    const statement = `query ListSceeningOptions($filter: ModelSceeningOptionFilterInput, $limit: Int, $nextToken: String) {
        listSceeningOptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            sceeningId
            optionId
            sceening {
              __typename
              id
              createdAt
              updatedAt
            }
            option {
              __typename
              id
              label
              value
              order
              createdAt
              updatedAt
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
    return <ListSceeningOptionsQuery>response.data.listSceeningOptions;
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
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          job {
            __typename
            id
            code
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
              createdAt
              updatedAt
            }
            job {
              __typename
              id
              code
              startDate
              endDate
              createdAt
              updatedAt
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
    return <ListFormJobsQuery>response.data.listFormJobs;
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
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          crew {
            __typename
            id
            userName
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            sceenings {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
              startDate
              endDate
              createdAt
              updatedAt
            }
            crew {
              __typename
              id
              userName
              companyName
              address
              phonenumber
              name
              email
              defaultJobId
              createdAt
              updatedAt
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
    return <ListCrewJobsQuery>response.data.listCrewJobs;
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
              nextToken
            }
            form {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
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
            }
            sceenings {
              __typename
              nextToken
            }
            order
            createdAt
            updatedAt
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
              order
              optionOrderDesc
              createdAt
              updatedAt
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
    return <ListQuestionOptionsQuery>response.data.listQuestionOptions;
  }
  async QuestionsByOrder(
    order: number,
    sortDirection?: ModelSortDirection,
    filter?: ModelQuestionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<QuestionsByOrderQuery> {
    const statement = `query QuestionsByOrder($order: Int!, $sortDirection: ModelSortDirection, $filter: ModelQuestionFilterInput, $limit: Int, $nextToken: String) {
        questionsByOrder(order: $order, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            options {
              __typename
              nextToken
            }
            form {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
            formQuestionsId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      order
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
    return <QuestionsByOrderQuery>response.data.questionsByOrder;
  }
  async OptionsByOrder(
    order: number,
    sortDirection?: ModelSortDirection,
    filter?: ModelOptionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<OptionsByOrderQuery> {
    const statement = `query OptionsByOrder($order: Int!, $sortDirection: ModelSortDirection, $filter: ModelOptionFilterInput, $limit: Int, $nextToken: String) {
        optionsByOrder(order: $order, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            label
            value
            questions {
              __typename
              nextToken
            }
            sceenings {
              __typename
              nextToken
            }
            order
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      order
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
    return <OptionsByOrderQuery>response.data.optionsByOrder;
  }
  async SceeningJobsBySceeningId(
    sceeningId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelSceeningJobFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<SceeningJobsBySceeningIdQuery> {
    const statement = `query SceeningJobsBySceeningId($sceeningId: ID!, $sortDirection: ModelSortDirection, $filter: ModelSceeningJobFilterInput, $limit: Int, $nextToken: String) {
        sceeningJobsBySceeningId(sceeningId: $sceeningId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            sceeningId
            jobId
            sceening {
              __typename
              id
              createdAt
              updatedAt
            }
            job {
              __typename
              id
              code
              startDate
              endDate
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      sceeningId
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
    return <SceeningJobsBySceeningIdQuery>(
      response.data.sceeningJobsBySceeningId
    );
  }
  async SceeningJobsByJobId(
    jobId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelSceeningJobFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<SceeningJobsByJobIdQuery> {
    const statement = `query SceeningJobsByJobId($jobId: ID!, $sortDirection: ModelSortDirection, $filter: ModelSceeningJobFilterInput, $limit: Int, $nextToken: String) {
        sceeningJobsByJobId(jobId: $jobId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            sceeningId
            jobId
            sceening {
              __typename
              id
              createdAt
              updatedAt
            }
            job {
              __typename
              id
              code
              startDate
              endDate
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      jobId
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
    return <SceeningJobsByJobIdQuery>response.data.sceeningJobsByJobId;
  }
  async SceeningCrewsBySceeningId(
    sceeningId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelSceeningCrewFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<SceeningCrewsBySceeningIdQuery> {
    const statement = `query SceeningCrewsBySceeningId($sceeningId: ID!, $sortDirection: ModelSortDirection, $filter: ModelSceeningCrewFilterInput, $limit: Int, $nextToken: String) {
        sceeningCrewsBySceeningId(sceeningId: $sceeningId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            sceeningId
            crewId
            sceening {
              __typename
              id
              createdAt
              updatedAt
            }
            crew {
              __typename
              id
              userName
              companyName
              address
              phonenumber
              name
              email
              defaultJobId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      sceeningId
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
    return <SceeningCrewsBySceeningIdQuery>(
      response.data.sceeningCrewsBySceeningId
    );
  }
  async SceeningCrewsByCrewId(
    crewId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelSceeningCrewFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<SceeningCrewsByCrewIdQuery> {
    const statement = `query SceeningCrewsByCrewId($crewId: ID!, $sortDirection: ModelSortDirection, $filter: ModelSceeningCrewFilterInput, $limit: Int, $nextToken: String) {
        sceeningCrewsByCrewId(crewId: $crewId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            sceeningId
            crewId
            sceening {
              __typename
              id
              createdAt
              updatedAt
            }
            crew {
              __typename
              id
              userName
              companyName
              address
              phonenumber
              name
              email
              defaultJobId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      crewId
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
    return <SceeningCrewsByCrewIdQuery>response.data.sceeningCrewsByCrewId;
  }
  async SceeningOptionsBySceeningId(
    sceeningId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelSceeningOptionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<SceeningOptionsBySceeningIdQuery> {
    const statement = `query SceeningOptionsBySceeningId($sceeningId: ID!, $sortDirection: ModelSortDirection, $filter: ModelSceeningOptionFilterInput, $limit: Int, $nextToken: String) {
        sceeningOptionsBySceeningId(sceeningId: $sceeningId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            sceeningId
            optionId
            sceening {
              __typename
              id
              createdAt
              updatedAt
            }
            option {
              __typename
              id
              label
              value
              order
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      sceeningId
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
    return <SceeningOptionsBySceeningIdQuery>(
      response.data.sceeningOptionsBySceeningId
    );
  }
  async SceeningOptionsByOptionId(
    optionId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelSceeningOptionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<SceeningOptionsByOptionIdQuery> {
    const statement = `query SceeningOptionsByOptionId($optionId: ID!, $sortDirection: ModelSortDirection, $filter: ModelSceeningOptionFilterInput, $limit: Int, $nextToken: String) {
        sceeningOptionsByOptionId(optionId: $optionId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            sceeningId
            optionId
            sceening {
              __typename
              id
              createdAt
              updatedAt
            }
            option {
              __typename
              id
              label
              value
              order
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      optionId
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
    return <SceeningOptionsByOptionIdQuery>(
      response.data.sceeningOptionsByOptionId
    );
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
              createdAt
              updatedAt
            }
            job {
              __typename
              id
              code
              startDate
              endDate
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      formId
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
              createdAt
              updatedAt
            }
            job {
              __typename
              id
              code
              startDate
              endDate
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      jobId
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
              startDate
              endDate
              createdAt
              updatedAt
            }
            crew {
              __typename
              id
              userName
              companyName
              address
              phonenumber
              name
              email
              defaultJobId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      jobId
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
              startDate
              endDate
              createdAt
              updatedAt
            }
            crew {
              __typename
              id
              userName
              companyName
              address
              phonenumber
              name
              email
              defaultJobId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      crewId
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
              order
              optionOrderDesc
              createdAt
              updatedAt
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
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      questionId
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
              order
              optionOrderDesc
              createdAt
              updatedAt
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
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      optionId
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
          jobs {
            __typename
            items {
              __typename
              id
              sceeningId
              jobId
              createdAt
              updatedAt
            }
            nextToken
          }
          crews {
            __typename
            items {
              __typename
              id
              sceeningId
              crewId
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            __typename
            items {
              __typename
              id
              sceeningId
              optionId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
          jobs {
            __typename
            items {
              __typename
              id
              sceeningId
              jobId
              createdAt
              updatedAt
            }
            nextToken
          }
          crews {
            __typename
            items {
              __typename
              id
              sceeningId
              crewId
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            __typename
            items {
              __typename
              id
              sceeningId
              optionId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
          jobs {
            __typename
            items {
              __typename
              id
              sceeningId
              jobId
              createdAt
              updatedAt
            }
            nextToken
          }
          crews {
            __typename
            items {
              __typename
              id
              sceeningId
              crewId
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            __typename
            items {
              __typename
              id
              sceeningId
              optionId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
              order
              optionOrderDesc
              createdAt
              updatedAt
              formQuestionsId
            }
            nextToken
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
            }
            nextToken
          }
          createdAt
          updatedAt
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
              order
              optionOrderDesc
              createdAt
              updatedAt
              formQuestionsId
            }
            nextToken
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
            }
            nextToken
          }
          createdAt
          updatedAt
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
              order
              optionOrderDesc
              createdAt
              updatedAt
              formQuestionsId
            }
            nextToken
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
            }
            nextToken
          }
          createdAt
          updatedAt
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
          startDate
          endDate
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              jobId
              createdAt
              updatedAt
            }
            nextToken
          }
          forms {
            __typename
            items {
              __typename
              id
              formId
              jobId
              createdAt
              updatedAt
            }
            nextToken
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
            }
            nextToken
          }
          createdAt
          updatedAt
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
          startDate
          endDate
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              jobId
              createdAt
              updatedAt
            }
            nextToken
          }
          forms {
            __typename
            items {
              __typename
              id
              formId
              jobId
              createdAt
              updatedAt
            }
            nextToken
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
            }
            nextToken
          }
          createdAt
          updatedAt
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
          startDate
          endDate
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              jobId
              createdAt
              updatedAt
            }
            nextToken
          }
          forms {
            __typename
            items {
              __typename
              id
              formId
              jobId
              createdAt
              updatedAt
            }
            nextToken
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
            }
            nextToken
          }
          createdAt
          updatedAt
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
              createdAt
              updatedAt
            }
            nextToken
          }
          form {
            __typename
            id
            name
            questions {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          order
          optionOrderDesc
          createdAt
          updatedAt
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
              createdAt
              updatedAt
            }
            nextToken
          }
          form {
            __typename
            id
            name
            questions {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          order
          optionOrderDesc
          createdAt
          updatedAt
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
              createdAt
              updatedAt
            }
            nextToken
          }
          form {
            __typename
            id
            name
            questions {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          order
          optionOrderDesc
          createdAt
          updatedAt
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
              createdAt
              updatedAt
            }
            nextToken
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              optionId
              createdAt
              updatedAt
            }
            nextToken
          }
          order
          createdAt
          updatedAt
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
              createdAt
              updatedAt
            }
            nextToken
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              optionId
              createdAt
              updatedAt
            }
            nextToken
          }
          order
          createdAt
          updatedAt
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
              createdAt
              updatedAt
            }
            nextToken
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              optionId
              createdAt
              updatedAt
            }
            nextToken
          }
          order
          createdAt
          updatedAt
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
          companyName
          address
          phonenumber
          name
          email
          defaultJobId
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              crewId
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
          companyName
          address
          phonenumber
          name
          email
          defaultJobId
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              crewId
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
          companyName
          address
          phonenumber
          name
          email
          defaultJobId
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningId
              crewId
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              jobId
              crewId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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

  OnCreateSceeningJobListener(
    filter?: ModelSubscriptionSceeningJobFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSceeningJob">>
  > {
    const statement = `subscription OnCreateSceeningJob($filter: ModelSubscriptionSceeningJobFilterInput) {
        onCreateSceeningJob(filter: $filter) {
          __typename
          id
          sceeningId
          jobId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          job {
            __typename
            id
            code
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSceeningJob">>
    >;
  }

  OnUpdateSceeningJobListener(
    filter?: ModelSubscriptionSceeningJobFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSceeningJob">>
  > {
    const statement = `subscription OnUpdateSceeningJob($filter: ModelSubscriptionSceeningJobFilterInput) {
        onUpdateSceeningJob(filter: $filter) {
          __typename
          id
          sceeningId
          jobId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          job {
            __typename
            id
            code
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSceeningJob">>
    >;
  }

  OnDeleteSceeningJobListener(
    filter?: ModelSubscriptionSceeningJobFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSceeningJob">>
  > {
    const statement = `subscription OnDeleteSceeningJob($filter: ModelSubscriptionSceeningJobFilterInput) {
        onDeleteSceeningJob(filter: $filter) {
          __typename
          id
          sceeningId
          jobId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          job {
            __typename
            id
            code
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSceeningJob">>
    >;
  }

  OnCreateSceeningCrewListener(
    filter?: ModelSubscriptionSceeningCrewFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSceeningCrew">>
  > {
    const statement = `subscription OnCreateSceeningCrew($filter: ModelSubscriptionSceeningCrewFilterInput) {
        onCreateSceeningCrew(filter: $filter) {
          __typename
          id
          sceeningId
          crewId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          crew {
            __typename
            id
            userName
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            sceenings {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
        Pick<__SubscriptionContainer, "onCreateSceeningCrew">
      >
    >;
  }

  OnUpdateSceeningCrewListener(
    filter?: ModelSubscriptionSceeningCrewFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSceeningCrew">>
  > {
    const statement = `subscription OnUpdateSceeningCrew($filter: ModelSubscriptionSceeningCrewFilterInput) {
        onUpdateSceeningCrew(filter: $filter) {
          __typename
          id
          sceeningId
          crewId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          crew {
            __typename
            id
            userName
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            sceenings {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
        Pick<__SubscriptionContainer, "onUpdateSceeningCrew">
      >
    >;
  }

  OnDeleteSceeningCrewListener(
    filter?: ModelSubscriptionSceeningCrewFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSceeningCrew">>
  > {
    const statement = `subscription OnDeleteSceeningCrew($filter: ModelSubscriptionSceeningCrewFilterInput) {
        onDeleteSceeningCrew(filter: $filter) {
          __typename
          id
          sceeningId
          crewId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          crew {
            __typename
            id
            userName
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            sceenings {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
        Pick<__SubscriptionContainer, "onDeleteSceeningCrew">
      >
    >;
  }

  OnCreateSceeningOptionListener(
    filter?: ModelSubscriptionSceeningOptionFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateSceeningOption">
    >
  > {
    const statement = `subscription OnCreateSceeningOption($filter: ModelSubscriptionSceeningOptionFilterInput) {
        onCreateSceeningOption(filter: $filter) {
          __typename
          id
          sceeningId
          optionId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          option {
            __typename
            id
            label
            value
            questions {
              __typename
              nextToken
            }
            sceenings {
              __typename
              nextToken
            }
            order
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
        Pick<__SubscriptionContainer, "onCreateSceeningOption">
      >
    >;
  }

  OnUpdateSceeningOptionListener(
    filter?: ModelSubscriptionSceeningOptionFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateSceeningOption">
    >
  > {
    const statement = `subscription OnUpdateSceeningOption($filter: ModelSubscriptionSceeningOptionFilterInput) {
        onUpdateSceeningOption(filter: $filter) {
          __typename
          id
          sceeningId
          optionId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          option {
            __typename
            id
            label
            value
            questions {
              __typename
              nextToken
            }
            sceenings {
              __typename
              nextToken
            }
            order
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
        Pick<__SubscriptionContainer, "onUpdateSceeningOption">
      >
    >;
  }

  OnDeleteSceeningOptionListener(
    filter?: ModelSubscriptionSceeningOptionFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteSceeningOption">
    >
  > {
    const statement = `subscription OnDeleteSceeningOption($filter: ModelSubscriptionSceeningOptionFilterInput) {
        onDeleteSceeningOption(filter: $filter) {
          __typename
          id
          sceeningId
          optionId
          sceening {
            __typename
            id
            jobs {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            options {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          option {
            __typename
            id
            label
            value
            questions {
              __typename
              nextToken
            }
            sceenings {
              __typename
              nextToken
            }
            order
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
        Pick<__SubscriptionContainer, "onDeleteSceeningOption">
      >
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
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          job {
            __typename
            id
            code
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          job {
            __typename
            id
            code
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          job {
            __typename
            id
            code
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          crew {
            __typename
            id
            userName
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            sceenings {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          crew {
            __typename
            id
            userName
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            sceenings {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
            startDate
            endDate
            sceenings {
              __typename
              nextToken
            }
            forms {
              __typename
              nextToken
            }
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          crew {
            __typename
            id
            userName
            companyName
            address
            phonenumber
            name
            email
            defaultJobId
            sceenings {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
              nextToken
            }
            form {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
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
            }
            sceenings {
              __typename
              nextToken
            }
            order
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
              nextToken
            }
            form {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
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
            }
            sceenings {
              __typename
              nextToken
            }
            order
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
              nextToken
            }
            form {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
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
            }
            sceenings {
              __typename
              nextToken
            }
            order
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
