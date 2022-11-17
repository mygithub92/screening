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
  onCreateSceeningQuestion: OnCreateSceeningQuestionSubscription;
  onUpdateSceeningQuestion: OnUpdateSceeningQuestionSubscription;
  onDeleteSceeningQuestion: OnDeleteSceeningQuestionSubscription;
  onCreateSceeningOption: OnCreateSceeningOptionSubscription;
  onUpdateSceeningOption: OnUpdateSceeningOptionSubscription;
  onDeleteSceeningOption: OnDeleteSceeningOptionSubscription;
  onCreateFormQuestion: OnCreateFormQuestionSubscription;
  onUpdateFormQuestion: OnUpdateFormQuestionSubscription;
  onDeleteFormQuestion: OnDeleteFormQuestionSubscription;
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
  _version?: number | null;
};

export type ModelSceeningConditionInput = {
  and?: Array<ModelSceeningConditionInput | null> | null;
  or?: Array<ModelSceeningConditionInput | null> | null;
  not?: ModelSceeningConditionInput | null;
};

export type Sceening = {
  __typename: "Sceening";
  id: string;
  Jobs?: ModelSceeningJobConnection | null;
  Crews?: ModelSceeningCrewConnection | null;
  Questions?: ModelSceeningQuestionConnection | null;
  Options?: ModelSceeningOptionConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelSceeningJobConnection = {
  __typename: "ModelSceeningJobConnection";
  items: Array<SceeningJob | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SceeningJob = {
  __typename: "SceeningJob";
  id: string;
  sceeningID: string;
  jobID: string;
  sceening: Sceening;
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
  sceenings?: ModelSceeningJobConnection | null;
  forms?: ModelFormJobConnection | null;
  crews?: ModelCrewJobConnection | null;
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
  formID: string;
  jobID: string;
  form: Form;
  job: Job;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type Form = {
  __typename: "Form";
  id: string;
  name?: string | null;
  Questions?: ModelFormQuestionConnection | null;
  Jobs?: ModelFormJobConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelFormQuestionConnection = {
  __typename: "ModelFormQuestionConnection";
  items: Array<FormQuestion | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type FormQuestion = {
  __typename: "FormQuestion";
  id: string;
  formID: string;
  questionID: string;
  form: Form;
  question: Question;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type Question = {
  __typename: "Question";
  id: string;
  title?: string | null;
  Options?: ModelQuestionOptionConnection | null;
  forms?: ModelFormQuestionConnection | null;
  sceenings?: ModelSceeningQuestionConnection | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
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
  questionID: string;
  optionID: string;
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
  sceenings?: ModelSceeningOptionConnection | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelSceeningOptionConnection = {
  __typename: "ModelSceeningOptionConnection";
  items: Array<SceeningOption | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SceeningOption = {
  __typename: "SceeningOption";
  id: string;
  sceeningID: string;
  optionID: string;
  sceening: Sceening;
  option: Option;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelSceeningQuestionConnection = {
  __typename: "ModelSceeningQuestionConnection";
  items: Array<SceeningQuestion | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SceeningQuestion = {
  __typename: "SceeningQuestion";
  id: string;
  sceeningID: string;
  questionID: string;
  sceening: Sceening;
  question: Question;
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
  jobID: string;
  crewID: string;
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
  sceenings?: ModelSceeningCrewConnection | null;
  Jobs?: ModelCrewJobConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelSceeningCrewConnection = {
  __typename: "ModelSceeningCrewConnection";
  items: Array<SceeningCrew | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SceeningCrew = {
  __typename: "SceeningCrew";
  id: string;
  sceeningID: string;
  crewID: string;
  sceening: Sceening;
  crew: Crew;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateSceeningInput = {
  id: string;
  _version?: number | null;
};

export type DeleteSceeningInput = {
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
  _version?: number | null;
};

export type DeleteFormInput = {
  id: string;
  _version?: number | null;
};

export type CreateJobInput = {
  id?: string | null;
  code?: string | null;
  _version?: number | null;
};

export type ModelJobConditionInput = {
  code?: ModelStringInput | null;
  and?: Array<ModelJobConditionInput | null> | null;
  or?: Array<ModelJobConditionInput | null> | null;
  not?: ModelJobConditionInput | null;
};

export type UpdateJobInput = {
  id: string;
  code?: string | null;
  _version?: number | null;
};

export type DeleteJobInput = {
  id: string;
  _version?: number | null;
};

export type CreateQuestionInput = {
  id?: string | null;
  title?: string | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  _version?: number | null;
};

export type ModelQuestionConditionInput = {
  title?: ModelStringInput | null;
  order?: ModelIntInput | null;
  optionOrderDesc?: ModelBooleanInput | null;
  and?: Array<ModelQuestionConditionInput | null> | null;
  or?: Array<ModelQuestionConditionInput | null> | null;
  not?: ModelQuestionConditionInput | null;
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

export type UpdateQuestionInput = {
  id: string;
  title?: string | null;
  order?: number | null;
  optionOrderDesc?: boolean | null;
  _version?: number | null;
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
  _version?: number | null;
};

export type ModelCrewConditionInput = {
  userName?: ModelStringInput | null;
  and?: Array<ModelCrewConditionInput | null> | null;
  or?: Array<ModelCrewConditionInput | null> | null;
  not?: ModelCrewConditionInput | null;
};

export type UpdateCrewInput = {
  id: string;
  userName?: string | null;
  _version?: number | null;
};

export type DeleteCrewInput = {
  id: string;
  _version?: number | null;
};

export type CreateSceeningJobInput = {
  id?: string | null;
  sceeningID: string;
  jobID: string;
  _version?: number | null;
};

export type ModelSceeningJobConditionInput = {
  sceeningID?: ModelIDInput | null;
  jobID?: ModelIDInput | null;
  and?: Array<ModelSceeningJobConditionInput | null> | null;
  or?: Array<ModelSceeningJobConditionInput | null> | null;
  not?: ModelSceeningJobConditionInput | null;
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

export type UpdateSceeningJobInput = {
  id: string;
  sceeningID?: string | null;
  jobID?: string | null;
  _version?: number | null;
};

export type DeleteSceeningJobInput = {
  id: string;
  _version?: number | null;
};

export type CreateSceeningCrewInput = {
  id?: string | null;
  sceeningID: string;
  crewID: string;
  _version?: number | null;
};

export type ModelSceeningCrewConditionInput = {
  sceeningID?: ModelIDInput | null;
  crewID?: ModelIDInput | null;
  and?: Array<ModelSceeningCrewConditionInput | null> | null;
  or?: Array<ModelSceeningCrewConditionInput | null> | null;
  not?: ModelSceeningCrewConditionInput | null;
};

export type UpdateSceeningCrewInput = {
  id: string;
  sceeningID?: string | null;
  crewID?: string | null;
  _version?: number | null;
};

export type DeleteSceeningCrewInput = {
  id: string;
  _version?: number | null;
};

export type CreateSceeningQuestionInput = {
  id?: string | null;
  sceeningID: string;
  questionID: string;
  _version?: number | null;
};

export type ModelSceeningQuestionConditionInput = {
  sceeningID?: ModelIDInput | null;
  questionID?: ModelIDInput | null;
  and?: Array<ModelSceeningQuestionConditionInput | null> | null;
  or?: Array<ModelSceeningQuestionConditionInput | null> | null;
  not?: ModelSceeningQuestionConditionInput | null;
};

export type UpdateSceeningQuestionInput = {
  id: string;
  sceeningID?: string | null;
  questionID?: string | null;
  _version?: number | null;
};

export type DeleteSceeningQuestionInput = {
  id: string;
  _version?: number | null;
};

export type CreateSceeningOptionInput = {
  id?: string | null;
  sceeningID: string;
  optionID: string;
  _version?: number | null;
};

export type ModelSceeningOptionConditionInput = {
  sceeningID?: ModelIDInput | null;
  optionID?: ModelIDInput | null;
  and?: Array<ModelSceeningOptionConditionInput | null> | null;
  or?: Array<ModelSceeningOptionConditionInput | null> | null;
  not?: ModelSceeningOptionConditionInput | null;
};

export type UpdateSceeningOptionInput = {
  id: string;
  sceeningID?: string | null;
  optionID?: string | null;
  _version?: number | null;
};

export type DeleteSceeningOptionInput = {
  id: string;
  _version?: number | null;
};

export type CreateFormQuestionInput = {
  id?: string | null;
  formID: string;
  questionID: string;
  _version?: number | null;
};

export type ModelFormQuestionConditionInput = {
  formID?: ModelIDInput | null;
  questionID?: ModelIDInput | null;
  and?: Array<ModelFormQuestionConditionInput | null> | null;
  or?: Array<ModelFormQuestionConditionInput | null> | null;
  not?: ModelFormQuestionConditionInput | null;
};

export type UpdateFormQuestionInput = {
  id: string;
  formID?: string | null;
  questionID?: string | null;
  _version?: number | null;
};

export type DeleteFormQuestionInput = {
  id: string;
  _version?: number | null;
};

export type CreateFormJobInput = {
  id?: string | null;
  formID: string;
  jobID: string;
  _version?: number | null;
};

export type ModelFormJobConditionInput = {
  formID?: ModelIDInput | null;
  jobID?: ModelIDInput | null;
  and?: Array<ModelFormJobConditionInput | null> | null;
  or?: Array<ModelFormJobConditionInput | null> | null;
  not?: ModelFormJobConditionInput | null;
};

export type UpdateFormJobInput = {
  id: string;
  formID?: string | null;
  jobID?: string | null;
  _version?: number | null;
};

export type DeleteFormJobInput = {
  id: string;
  _version?: number | null;
};

export type CreateCrewJobInput = {
  id?: string | null;
  jobID: string;
  crewID: string;
  _version?: number | null;
};

export type ModelCrewJobConditionInput = {
  jobID?: ModelIDInput | null;
  crewID?: ModelIDInput | null;
  and?: Array<ModelCrewJobConditionInput | null> | null;
  or?: Array<ModelCrewJobConditionInput | null> | null;
  not?: ModelCrewJobConditionInput | null;
};

export type UpdateCrewJobInput = {
  id: string;
  jobID?: string | null;
  crewID?: string | null;
  _version?: number | null;
};

export type DeleteCrewJobInput = {
  id: string;
  _version?: number | null;
};

export type CreateQuestionOptionInput = {
  id?: string | null;
  questionID: string;
  optionID: string;
  _version?: number | null;
};

export type ModelQuestionOptionConditionInput = {
  questionID?: ModelIDInput | null;
  optionID?: ModelIDInput | null;
  and?: Array<ModelQuestionOptionConditionInput | null> | null;
  or?: Array<ModelQuestionOptionConditionInput | null> | null;
  not?: ModelQuestionOptionConditionInput | null;
};

export type UpdateQuestionOptionInput = {
  id: string;
  questionID?: string | null;
  optionID?: string | null;
  _version?: number | null;
};

export type DeleteQuestionOptionInput = {
  id: string;
  _version?: number | null;
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
  startedAt?: number | null;
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

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  order?: ModelIntInput | null;
  optionOrderDesc?: ModelBooleanInput | null;
  and?: Array<ModelQuestionFilterInput | null> | null;
  or?: Array<ModelQuestionFilterInput | null> | null;
  not?: ModelQuestionFilterInput | null;
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection";
  items: Array<Question | null>;
  nextToken?: string | null;
  startedAt?: number | null;
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

export type ModelSceeningJobFilterInput = {
  id?: ModelIDInput | null;
  sceeningID?: ModelIDInput | null;
  jobID?: ModelIDInput | null;
  and?: Array<ModelSceeningJobFilterInput | null> | null;
  or?: Array<ModelSceeningJobFilterInput | null> | null;
  not?: ModelSceeningJobFilterInput | null;
};

export type ModelSceeningCrewFilterInput = {
  id?: ModelIDInput | null;
  sceeningID?: ModelIDInput | null;
  crewID?: ModelIDInput | null;
  and?: Array<ModelSceeningCrewFilterInput | null> | null;
  or?: Array<ModelSceeningCrewFilterInput | null> | null;
  not?: ModelSceeningCrewFilterInput | null;
};

export type ModelSceeningQuestionFilterInput = {
  id?: ModelIDInput | null;
  sceeningID?: ModelIDInput | null;
  questionID?: ModelIDInput | null;
  and?: Array<ModelSceeningQuestionFilterInput | null> | null;
  or?: Array<ModelSceeningQuestionFilterInput | null> | null;
  not?: ModelSceeningQuestionFilterInput | null;
};

export type ModelSceeningOptionFilterInput = {
  id?: ModelIDInput | null;
  sceeningID?: ModelIDInput | null;
  optionID?: ModelIDInput | null;
  and?: Array<ModelSceeningOptionFilterInput | null> | null;
  or?: Array<ModelSceeningOptionFilterInput | null> | null;
  not?: ModelSceeningOptionFilterInput | null;
};

export type ModelFormQuestionFilterInput = {
  id?: ModelIDInput | null;
  formID?: ModelIDInput | null;
  questionID?: ModelIDInput | null;
  and?: Array<ModelFormQuestionFilterInput | null> | null;
  or?: Array<ModelFormQuestionFilterInput | null> | null;
  not?: ModelFormQuestionFilterInput | null;
};

export type ModelFormJobFilterInput = {
  id?: ModelIDInput | null;
  formID?: ModelIDInput | null;
  jobID?: ModelIDInput | null;
  and?: Array<ModelFormJobFilterInput | null> | null;
  or?: Array<ModelFormJobFilterInput | null> | null;
  not?: ModelFormJobFilterInput | null;
};

export type ModelCrewJobFilterInput = {
  id?: ModelIDInput | null;
  jobID?: ModelIDInput | null;
  crewID?: ModelIDInput | null;
  and?: Array<ModelCrewJobFilterInput | null> | null;
  or?: Array<ModelCrewJobFilterInput | null> | null;
  not?: ModelCrewJobFilterInput | null;
};

export type ModelQuestionOptionFilterInput = {
  id?: ModelIDInput | null;
  questionID?: ModelIDInput | null;
  optionID?: ModelIDInput | null;
  and?: Array<ModelQuestionOptionFilterInput | null> | null;
  or?: Array<ModelQuestionOptionFilterInput | null> | null;
  not?: ModelQuestionOptionFilterInput | null;
};

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
  and?: Array<ModelSubscriptionCrewFilterInput | null> | null;
  or?: Array<ModelSubscriptionCrewFilterInput | null> | null;
};

export type ModelSubscriptionSceeningJobFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  sceeningID?: ModelSubscriptionIDInput | null;
  jobID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionSceeningJobFilterInput | null> | null;
  or?: Array<ModelSubscriptionSceeningJobFilterInput | null> | null;
};

export type ModelSubscriptionSceeningCrewFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  sceeningID?: ModelSubscriptionIDInput | null;
  crewID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionSceeningCrewFilterInput | null> | null;
  or?: Array<ModelSubscriptionSceeningCrewFilterInput | null> | null;
};

export type ModelSubscriptionSceeningQuestionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  sceeningID?: ModelSubscriptionIDInput | null;
  questionID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionSceeningQuestionFilterInput | null> | null;
  or?: Array<ModelSubscriptionSceeningQuestionFilterInput | null> | null;
};

export type ModelSubscriptionSceeningOptionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  sceeningID?: ModelSubscriptionIDInput | null;
  optionID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionSceeningOptionFilterInput | null> | null;
  or?: Array<ModelSubscriptionSceeningOptionFilterInput | null> | null;
};

export type ModelSubscriptionFormQuestionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  formID?: ModelSubscriptionIDInput | null;
  questionID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionFormQuestionFilterInput | null> | null;
  or?: Array<ModelSubscriptionFormQuestionFilterInput | null> | null;
};

export type ModelSubscriptionFormJobFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  formID?: ModelSubscriptionIDInput | null;
  jobID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionFormJobFilterInput | null> | null;
  or?: Array<ModelSubscriptionFormJobFilterInput | null> | null;
};

export type ModelSubscriptionCrewJobFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  jobID?: ModelSubscriptionIDInput | null;
  crewID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionCrewJobFilterInput | null> | null;
  or?: Array<ModelSubscriptionCrewJobFilterInput | null> | null;
};

export type ModelSubscriptionQuestionOptionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  questionID?: ModelSubscriptionIDInput | null;
  optionID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionQuestionOptionFilterInput | null> | null;
  or?: Array<ModelSubscriptionQuestionOptionFilterInput | null> | null;
};

export type CreateSceeningMutation = {
  __typename: "Sceening";
  id: string;
  Jobs?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningID: string;
      jobID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Crews?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningID: string;
      crewID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Questions?: {
    __typename: "ModelSceeningQuestionConnection";
    items: Array<{
      __typename: "SceeningQuestion";
      id: string;
      sceeningID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Options?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningID: string;
      optionID: string;
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

export type UpdateSceeningMutation = {
  __typename: "Sceening";
  id: string;
  Jobs?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningID: string;
      jobID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Crews?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningID: string;
      crewID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Questions?: {
    __typename: "ModelSceeningQuestionConnection";
    items: Array<{
      __typename: "SceeningQuestion";
      id: string;
      sceeningID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Options?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningID: string;
      optionID: string;
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

export type DeleteSceeningMutation = {
  __typename: "Sceening";
  id: string;
  Jobs?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningID: string;
      jobID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Crews?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningID: string;
      crewID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Questions?: {
    __typename: "ModelSceeningQuestionConnection";
    items: Array<{
      __typename: "SceeningQuestion";
      id: string;
      sceeningID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Options?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningID: string;
      optionID: string;
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

export type CreateFormMutation = {
  __typename: "Form";
  id: string;
  name?: string | null;
  Questions?: {
    __typename: "ModelFormQuestionConnection";
    items: Array<{
      __typename: "FormQuestion";
      id: string;
      formID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Jobs?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formID: string;
      jobID: string;
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
  Questions?: {
    __typename: "ModelFormQuestionConnection";
    items: Array<{
      __typename: "FormQuestion";
      id: string;
      formID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Jobs?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formID: string;
      jobID: string;
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
  Questions?: {
    __typename: "ModelFormQuestionConnection";
    items: Array<{
      __typename: "FormQuestion";
      id: string;
      formID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Jobs?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formID: string;
      jobID: string;
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
  sceenings?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningID: string;
      jobID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formID: string;
      jobID: string;
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
      jobID: string;
      crewID: string;
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
  sceenings?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningID: string;
      jobID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formID: string;
      jobID: string;
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
      jobID: string;
      crewID: string;
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
  sceenings?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningID: string;
      jobID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formID: string;
      jobID: string;
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
      jobID: string;
      crewID: string;
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

export type CreateQuestionMutation = {
  __typename: "Question";
  id: string;
  title?: string | null;
  Options?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionID: string;
      optionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  forms?: {
    __typename: "ModelFormQuestionConnection";
    items: Array<{
      __typename: "FormQuestion";
      id: string;
      formID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningQuestionConnection";
    items: Array<{
      __typename: "SceeningQuestion";
      id: string;
      sceeningID: string;
      questionID: string;
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
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateQuestionMutation = {
  __typename: "Question";
  id: string;
  title?: string | null;
  Options?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionID: string;
      optionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  forms?: {
    __typename: "ModelFormQuestionConnection";
    items: Array<{
      __typename: "FormQuestion";
      id: string;
      formID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningQuestionConnection";
    items: Array<{
      __typename: "SceeningQuestion";
      id: string;
      sceeningID: string;
      questionID: string;
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
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteQuestionMutation = {
  __typename: "Question";
  id: string;
  title?: string | null;
  Options?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionID: string;
      optionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  forms?: {
    __typename: "ModelFormQuestionConnection";
    items: Array<{
      __typename: "FormQuestion";
      id: string;
      formID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningQuestionConnection";
    items: Array<{
      __typename: "SceeningQuestion";
      id: string;
      sceeningID: string;
      questionID: string;
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
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
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
      questionID: string;
      optionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningID: string;
      optionID: string;
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
      questionID: string;
      optionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningID: string;
      optionID: string;
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
      questionID: string;
      optionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningID: string;
      optionID: string;
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
  sceenings?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningID: string;
      crewID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobID: string;
      crewID: string;
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
  sceenings?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningID: string;
      crewID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobID: string;
      crewID: string;
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
  sceenings?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningID: string;
      crewID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobID: string;
      crewID: string;
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

export type CreateSceeningJobMutation = {
  __typename: "SceeningJob";
  id: string;
  sceeningID: string;
  jobID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
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
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
};

export type UpdateSceeningJobMutation = {
  __typename: "SceeningJob";
  id: string;
  sceeningID: string;
  jobID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
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
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
};

export type DeleteSceeningJobMutation = {
  __typename: "SceeningJob";
  id: string;
  sceeningID: string;
  jobID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
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
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
};

export type CreateSceeningCrewMutation = {
  __typename: "SceeningCrew";
  id: string;
  sceeningID: string;
  crewID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
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
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
};

export type UpdateSceeningCrewMutation = {
  __typename: "SceeningCrew";
  id: string;
  sceeningID: string;
  crewID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
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
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
};

export type DeleteSceeningCrewMutation = {
  __typename: "SceeningCrew";
  id: string;
  sceeningID: string;
  crewID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
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
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
};

export type CreateSceeningQuestionMutation = {
  __typename: "SceeningQuestion";
  id: string;
  sceeningID: string;
  questionID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
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

export type UpdateSceeningQuestionMutation = {
  __typename: "SceeningQuestion";
  id: string;
  sceeningID: string;
  questionID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
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

export type DeleteSceeningQuestionMutation = {
  __typename: "SceeningQuestion";
  id: string;
  sceeningID: string;
  questionID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
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

export type CreateSceeningOptionMutation = {
  __typename: "SceeningOption";
  id: string;
  sceeningID: string;
  optionID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
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

export type UpdateSceeningOptionMutation = {
  __typename: "SceeningOption";
  id: string;
  sceeningID: string;
  optionID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
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

export type DeleteSceeningOptionMutation = {
  __typename: "SceeningOption";
  id: string;
  sceeningID: string;
  optionID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
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

export type CreateFormQuestionMutation = {
  __typename: "FormQuestion";
  id: string;
  formID: string;
  questionID: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    Questions?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
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

export type UpdateFormQuestionMutation = {
  __typename: "FormQuestion";
  id: string;
  formID: string;
  questionID: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    Questions?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
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

export type DeleteFormQuestionMutation = {
  __typename: "FormQuestion";
  id: string;
  formID: string;
  questionID: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    Questions?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
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

export type CreateFormJobMutation = {
  __typename: "FormJob";
  id: string;
  formID: string;
  jobID: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    Questions?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
};

export type UpdateFormJobMutation = {
  __typename: "FormJob";
  id: string;
  formID: string;
  jobID: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    Questions?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
};

export type DeleteFormJobMutation = {
  __typename: "FormJob";
  id: string;
  formID: string;
  jobID: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    Questions?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
};

export type CreateCrewJobMutation = {
  __typename: "CrewJob";
  id: string;
  jobID: string;
  crewID: string;
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
};

export type UpdateCrewJobMutation = {
  __typename: "CrewJob";
  id: string;
  jobID: string;
  crewID: string;
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
};

export type DeleteCrewJobMutation = {
  __typename: "CrewJob";
  id: string;
  jobID: string;
  crewID: string;
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
};

export type CreateQuestionOptionMutation = {
  __typename: "QuestionOption";
  id: string;
  questionID: string;
  optionID: string;
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
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
  questionID: string;
  optionID: string;
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
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
  questionID: string;
  optionID: string;
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
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
  Jobs?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningID: string;
      jobID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Crews?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningID: string;
      crewID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Questions?: {
    __typename: "ModelSceeningQuestionConnection";
    items: Array<{
      __typename: "SceeningQuestion";
      id: string;
      sceeningID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Options?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningID: string;
      optionID: string;
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

export type ListSceeningsQuery = {
  __typename: "ModelSceeningConnection";
  items: Array<{
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
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
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
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

export type GetFormQuery = {
  __typename: "Form";
  id: string;
  name?: string | null;
  Questions?: {
    __typename: "ModelFormQuestionConnection";
    items: Array<{
      __typename: "FormQuestion";
      id: string;
      formID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Jobs?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formID: string;
      jobID: string;
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
    Questions?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
      __typename: "ModelFormJobConnection";
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
    Questions?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
      __typename: "ModelFormJobConnection";
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
  sceenings?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningID: string;
      jobID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formID: string;
      jobID: string;
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
      jobID: string;
      crewID: string;
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
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetQuestionQuery = {
  __typename: "Question";
  id: string;
  title?: string | null;
  Options?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionID: string;
      optionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  forms?: {
    __typename: "ModelFormQuestionConnection";
    items: Array<{
      __typename: "FormQuestion";
      id: string;
      formID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningQuestionConnection";
    items: Array<{
      __typename: "SceeningQuestion";
      id: string;
      sceeningID: string;
      questionID: string;
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
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListQuestionsQuery = {
  __typename: "ModelQuestionConnection";
  items: Array<{
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
      questionID: string;
      optionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningID: string;
      optionID: string;
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
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
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
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
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
  sceenings?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningID: string;
      crewID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobID: string;
      crewID: string;
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
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
      __typename: "ModelCrewJobConnection";
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
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
      __typename: "ModelCrewJobConnection";
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

export type GetSceeningJobQuery = {
  __typename: "SceeningJob";
  id: string;
  sceeningID: string;
  jobID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
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
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
};

export type ListSceeningJobsQuery = {
  __typename: "ModelSceeningJobConnection";
  items: Array<{
    __typename: "SceeningJob";
    id: string;
    sceeningID: string;
    jobID: string;
    sceening: {
      __typename: "Sceening";
      id: string;
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

export type SyncSceeningJobsQuery = {
  __typename: "ModelSceeningJobConnection";
  items: Array<{
    __typename: "SceeningJob";
    id: string;
    sceeningID: string;
    jobID: string;
    sceening: {
      __typename: "Sceening";
      id: string;
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

export type GetSceeningCrewQuery = {
  __typename: "SceeningCrew";
  id: string;
  sceeningID: string;
  crewID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
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
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
};

export type ListSceeningCrewsQuery = {
  __typename: "ModelSceeningCrewConnection";
  items: Array<{
    __typename: "SceeningCrew";
    id: string;
    sceeningID: string;
    crewID: string;
    sceening: {
      __typename: "Sceening";
      id: string;
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

export type SyncSceeningCrewsQuery = {
  __typename: "ModelSceeningCrewConnection";
  items: Array<{
    __typename: "SceeningCrew";
    id: string;
    sceeningID: string;
    crewID: string;
    sceening: {
      __typename: "Sceening";
      id: string;
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

export type GetSceeningQuestionQuery = {
  __typename: "SceeningQuestion";
  id: string;
  sceeningID: string;
  questionID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
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

export type ListSceeningQuestionsQuery = {
  __typename: "ModelSceeningQuestionConnection";
  items: Array<{
    __typename: "SceeningQuestion";
    id: string;
    sceeningID: string;
    questionID: string;
    sceening: {
      __typename: "Sceening";
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
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

export type SyncSceeningQuestionsQuery = {
  __typename: "ModelSceeningQuestionConnection";
  items: Array<{
    __typename: "SceeningQuestion";
    id: string;
    sceeningID: string;
    questionID: string;
    sceening: {
      __typename: "Sceening";
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
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

export type GetSceeningOptionQuery = {
  __typename: "SceeningOption";
  id: string;
  sceeningID: string;
  optionID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
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

export type ListSceeningOptionsQuery = {
  __typename: "ModelSceeningOptionConnection";
  items: Array<{
    __typename: "SceeningOption";
    id: string;
    sceeningID: string;
    optionID: string;
    sceening: {
      __typename: "Sceening";
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
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
};

export type SyncSceeningOptionsQuery = {
  __typename: "ModelSceeningOptionConnection";
  items: Array<{
    __typename: "SceeningOption";
    id: string;
    sceeningID: string;
    optionID: string;
    sceening: {
      __typename: "Sceening";
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
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
};

export type GetFormQuestionQuery = {
  __typename: "FormQuestion";
  id: string;
  formID: string;
  questionID: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    Questions?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
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

export type ListFormQuestionsQuery = {
  __typename: "ModelFormQuestionConnection";
  items: Array<{
    __typename: "FormQuestion";
    id: string;
    formID: string;
    questionID: string;
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

export type SyncFormQuestionsQuery = {
  __typename: "ModelFormQuestionConnection";
  items: Array<{
    __typename: "FormQuestion";
    id: string;
    formID: string;
    questionID: string;
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

export type GetFormJobQuery = {
  __typename: "FormJob";
  id: string;
  formID: string;
  jobID: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    Questions?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
};

export type ListFormJobsQuery = {
  __typename: "ModelFormJobConnection";
  items: Array<{
    __typename: "FormJob";
    id: string;
    formID: string;
    jobID: string;
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
    formID: string;
    jobID: string;
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
  jobID: string;
  crewID: string;
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
};

export type ListCrewJobsQuery = {
  __typename: "ModelCrewJobConnection";
  items: Array<{
    __typename: "CrewJob";
    id: string;
    jobID: string;
    crewID: string;
    job: {
      __typename: "Job";
      id: string;
      code?: string | null;
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
    jobID: string;
    crewID: string;
    job: {
      __typename: "Job";
      id: string;
      code?: string | null;
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
  questionID: string;
  optionID: string;
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
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
    questionID: string;
    optionID: string;
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
};

export type SyncQuestionOptionsQuery = {
  __typename: "ModelQuestionOptionConnection";
  items: Array<{
    __typename: "QuestionOption";
    id: string;
    questionID: string;
    optionID: string;
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
};

export type OnCreateSceeningSubscription = {
  __typename: "Sceening";
  id: string;
  Jobs?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningID: string;
      jobID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Crews?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningID: string;
      crewID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Questions?: {
    __typename: "ModelSceeningQuestionConnection";
    items: Array<{
      __typename: "SceeningQuestion";
      id: string;
      sceeningID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Options?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningID: string;
      optionID: string;
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

export type OnUpdateSceeningSubscription = {
  __typename: "Sceening";
  id: string;
  Jobs?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningID: string;
      jobID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Crews?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningID: string;
      crewID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Questions?: {
    __typename: "ModelSceeningQuestionConnection";
    items: Array<{
      __typename: "SceeningQuestion";
      id: string;
      sceeningID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Options?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningID: string;
      optionID: string;
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

export type OnDeleteSceeningSubscription = {
  __typename: "Sceening";
  id: string;
  Jobs?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningID: string;
      jobID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Crews?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningID: string;
      crewID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Questions?: {
    __typename: "ModelSceeningQuestionConnection";
    items: Array<{
      __typename: "SceeningQuestion";
      id: string;
      sceeningID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Options?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningID: string;
      optionID: string;
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

export type OnCreateFormSubscription = {
  __typename: "Form";
  id: string;
  name?: string | null;
  Questions?: {
    __typename: "ModelFormQuestionConnection";
    items: Array<{
      __typename: "FormQuestion";
      id: string;
      formID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Jobs?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formID: string;
      jobID: string;
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
  Questions?: {
    __typename: "ModelFormQuestionConnection";
    items: Array<{
      __typename: "FormQuestion";
      id: string;
      formID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Jobs?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formID: string;
      jobID: string;
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
  Questions?: {
    __typename: "ModelFormQuestionConnection";
    items: Array<{
      __typename: "FormQuestion";
      id: string;
      formID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Jobs?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formID: string;
      jobID: string;
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
  sceenings?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningID: string;
      jobID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formID: string;
      jobID: string;
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
      jobID: string;
      crewID: string;
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
  sceenings?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningID: string;
      jobID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formID: string;
      jobID: string;
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
      jobID: string;
      crewID: string;
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
  sceenings?: {
    __typename: "ModelSceeningJobConnection";
    items: Array<{
      __typename: "SceeningJob";
      id: string;
      sceeningID: string;
      jobID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  forms?: {
    __typename: "ModelFormJobConnection";
    items: Array<{
      __typename: "FormJob";
      id: string;
      formID: string;
      jobID: string;
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
      jobID: string;
      crewID: string;
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

export type OnCreateQuestionSubscription = {
  __typename: "Question";
  id: string;
  title?: string | null;
  Options?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionID: string;
      optionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  forms?: {
    __typename: "ModelFormQuestionConnection";
    items: Array<{
      __typename: "FormQuestion";
      id: string;
      formID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningQuestionConnection";
    items: Array<{
      __typename: "SceeningQuestion";
      id: string;
      sceeningID: string;
      questionID: string;
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
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateQuestionSubscription = {
  __typename: "Question";
  id: string;
  title?: string | null;
  Options?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionID: string;
      optionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  forms?: {
    __typename: "ModelFormQuestionConnection";
    items: Array<{
      __typename: "FormQuestion";
      id: string;
      formID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningQuestionConnection";
    items: Array<{
      __typename: "SceeningQuestion";
      id: string;
      sceeningID: string;
      questionID: string;
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
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteQuestionSubscription = {
  __typename: "Question";
  id: string;
  title?: string | null;
  Options?: {
    __typename: "ModelQuestionOptionConnection";
    items: Array<{
      __typename: "QuestionOption";
      id: string;
      questionID: string;
      optionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  forms?: {
    __typename: "ModelFormQuestionConnection";
    items: Array<{
      __typename: "FormQuestion";
      id: string;
      formID: string;
      questionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningQuestionConnection";
    items: Array<{
      __typename: "SceeningQuestion";
      id: string;
      sceeningID: string;
      questionID: string;
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
  optionOrderDesc?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
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
      questionID: string;
      optionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningID: string;
      optionID: string;
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
      questionID: string;
      optionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningID: string;
      optionID: string;
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
      questionID: string;
      optionID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  sceenings?: {
    __typename: "ModelSceeningOptionConnection";
    items: Array<{
      __typename: "SceeningOption";
      id: string;
      sceeningID: string;
      optionID: string;
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
  sceenings?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningID: string;
      crewID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobID: string;
      crewID: string;
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
  sceenings?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningID: string;
      crewID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobID: string;
      crewID: string;
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
  sceenings?: {
    __typename: "ModelSceeningCrewConnection";
    items: Array<{
      __typename: "SceeningCrew";
      id: string;
      sceeningID: string;
      crewID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Jobs?: {
    __typename: "ModelCrewJobConnection";
    items: Array<{
      __typename: "CrewJob";
      id: string;
      jobID: string;
      crewID: string;
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

export type OnCreateSceeningJobSubscription = {
  __typename: "SceeningJob";
  id: string;
  sceeningID: string;
  jobID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
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
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
};

export type OnUpdateSceeningJobSubscription = {
  __typename: "SceeningJob";
  id: string;
  sceeningID: string;
  jobID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
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
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
};

export type OnDeleteSceeningJobSubscription = {
  __typename: "SceeningJob";
  id: string;
  sceeningID: string;
  jobID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
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
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
};

export type OnCreateSceeningCrewSubscription = {
  __typename: "SceeningCrew";
  id: string;
  sceeningID: string;
  crewID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
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
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
};

export type OnUpdateSceeningCrewSubscription = {
  __typename: "SceeningCrew";
  id: string;
  sceeningID: string;
  crewID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
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
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
};

export type OnDeleteSceeningCrewSubscription = {
  __typename: "SceeningCrew";
  id: string;
  sceeningID: string;
  crewID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
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
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
};

export type OnCreateSceeningQuestionSubscription = {
  __typename: "SceeningQuestion";
  id: string;
  sceeningID: string;
  questionID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
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

export type OnUpdateSceeningQuestionSubscription = {
  __typename: "SceeningQuestion";
  id: string;
  sceeningID: string;
  questionID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
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

export type OnDeleteSceeningQuestionSubscription = {
  __typename: "SceeningQuestion";
  id: string;
  sceeningID: string;
  questionID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  };
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
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

export type OnCreateSceeningOptionSubscription = {
  __typename: "SceeningOption";
  id: string;
  sceeningID: string;
  optionID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
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

export type OnUpdateSceeningOptionSubscription = {
  __typename: "SceeningOption";
  id: string;
  sceeningID: string;
  optionID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
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

export type OnDeleteSceeningOptionSubscription = {
  __typename: "SceeningOption";
  id: string;
  sceeningID: string;
  optionID: string;
  sceening: {
    __typename: "Sceening";
    id: string;
    Jobs?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Crews?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Questions?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Options?: {
      __typename: "ModelSceeningOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
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

export type OnCreateFormQuestionSubscription = {
  __typename: "FormQuestion";
  id: string;
  formID: string;
  questionID: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    Questions?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
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

export type OnUpdateFormQuestionSubscription = {
  __typename: "FormQuestion";
  id: string;
  formID: string;
  questionID: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    Questions?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
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

export type OnDeleteFormQuestionSubscription = {
  __typename: "FormQuestion";
  id: string;
  formID: string;
  questionID: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    Questions?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
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

export type OnCreateFormJobSubscription = {
  __typename: "FormJob";
  id: string;
  formID: string;
  jobID: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    Questions?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
};

export type OnUpdateFormJobSubscription = {
  __typename: "FormJob";
  id: string;
  formID: string;
  jobID: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    Questions?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
};

export type OnDeleteFormJobSubscription = {
  __typename: "FormJob";
  id: string;
  formID: string;
  jobID: string;
  form: {
    __typename: "Form";
    id: string;
    name?: string | null;
    Questions?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
};

export type OnCreateCrewJobSubscription = {
  __typename: "CrewJob";
  id: string;
  jobID: string;
  crewID: string;
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
};

export type OnUpdateCrewJobSubscription = {
  __typename: "CrewJob";
  id: string;
  jobID: string;
  crewID: string;
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
};

export type OnDeleteCrewJobSubscription = {
  __typename: "CrewJob";
  id: string;
  jobID: string;
  crewID: string;
  job: {
    __typename: "Job";
    id: string;
    code?: string | null;
    sceenings?: {
      __typename: "ModelSceeningJobConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
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
    sceenings?: {
      __typename: "ModelSceeningCrewConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Jobs?: {
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
};

export type OnCreateQuestionOptionSubscription = {
  __typename: "QuestionOption";
  id: string;
  questionID: string;
  optionID: string;
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
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
  questionID: string;
  optionID: string;
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
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
  questionID: string;
  optionID: string;
  question: {
    __typename: "Question";
    id: string;
    title?: string | null;
    Options?: {
      __typename: "ModelQuestionOptionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    forms?: {
      __typename: "ModelFormQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    sceenings?: {
      __typename: "ModelSceeningQuestionConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    order?: number | null;
    optionOrderDesc?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    sceenings?: {
      __typename: "ModelSceeningOptionConnection";
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
          Jobs {
            __typename
            items {
              __typename
              id
              sceeningID
              jobID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Crews {
            __typename
            items {
              __typename
              id
              sceeningID
              crewID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Questions {
            __typename
            items {
              __typename
              id
              sceeningID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Options {
            __typename
            items {
              __typename
              id
              sceeningID
              optionID
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
          Jobs {
            __typename
            items {
              __typename
              id
              sceeningID
              jobID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Crews {
            __typename
            items {
              __typename
              id
              sceeningID
              crewID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Questions {
            __typename
            items {
              __typename
              id
              sceeningID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Options {
            __typename
            items {
              __typename
              id
              sceeningID
              optionID
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
          Jobs {
            __typename
            items {
              __typename
              id
              sceeningID
              jobID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Crews {
            __typename
            items {
              __typename
              id
              sceeningID
              crewID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Questions {
            __typename
            items {
              __typename
              id
              sceeningID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Options {
            __typename
            items {
              __typename
              id
              sceeningID
              optionID
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
          Questions {
            __typename
            items {
              __typename
              id
              formID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Jobs {
            __typename
            items {
              __typename
              id
              formID
              jobID
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
          Questions {
            __typename
            items {
              __typename
              id
              formID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Jobs {
            __typename
            items {
              __typename
              id
              formID
              jobID
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
          Questions {
            __typename
            items {
              __typename
              id
              formID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Jobs {
            __typename
            items {
              __typename
              id
              formID
              jobID
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
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              jobID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          forms {
            __typename
            items {
              __typename
              id
              formID
              jobID
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
              jobID
              crewID
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
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              jobID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          forms {
            __typename
            items {
              __typename
              id
              formID
              jobID
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
              jobID
              crewID
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
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              jobID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          forms {
            __typename
            items {
              __typename
              id
              formID
              jobID
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
              jobID
              crewID
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
          Options {
            __typename
            items {
              __typename
              id
              questionID
              optionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          forms {
            __typename
            items {
              __typename
              id
              formID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              questionID
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
          optionOrderDesc
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          Options {
            __typename
            items {
              __typename
              id
              questionID
              optionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          forms {
            __typename
            items {
              __typename
              id
              formID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              questionID
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
          optionOrderDesc
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          Options {
            __typename
            items {
              __typename
              id
              questionID
              optionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          forms {
            __typename
            items {
              __typename
              id
              formID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              questionID
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
          optionOrderDesc
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
              questionID
              optionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              optionID
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
              questionID
              optionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              optionID
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
              questionID
              optionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              optionID
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
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              crewID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Jobs {
            __typename
            items {
              __typename
              id
              jobID
              crewID
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
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              crewID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Jobs {
            __typename
            items {
              __typename
              id
              jobID
              crewID
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
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              crewID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Jobs {
            __typename
            items {
              __typename
              id
              jobID
              crewID
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
          sceeningID
          jobID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
          sceeningID
          jobID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
          sceeningID
          jobID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
          sceeningID
          crewID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
          sceeningID
          crewID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
          sceeningID
          crewID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
  async CreateSceeningQuestion(
    input: CreateSceeningQuestionInput,
    condition?: ModelSceeningQuestionConditionInput
  ): Promise<CreateSceeningQuestionMutation> {
    const statement = `mutation CreateSceeningQuestion($input: CreateSceeningQuestionInput!, $condition: ModelSceeningQuestionConditionInput) {
        createSceeningQuestion(input: $input, condition: $condition) {
          __typename
          id
          sceeningID
          questionID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
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
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSceeningQuestionMutation>response.data.createSceeningQuestion;
  }
  async UpdateSceeningQuestion(
    input: UpdateSceeningQuestionInput,
    condition?: ModelSceeningQuestionConditionInput
  ): Promise<UpdateSceeningQuestionMutation> {
    const statement = `mutation UpdateSceeningQuestion($input: UpdateSceeningQuestionInput!, $condition: ModelSceeningQuestionConditionInput) {
        updateSceeningQuestion(input: $input, condition: $condition) {
          __typename
          id
          sceeningID
          questionID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
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
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSceeningQuestionMutation>response.data.updateSceeningQuestion;
  }
  async DeleteSceeningQuestion(
    input: DeleteSceeningQuestionInput,
    condition?: ModelSceeningQuestionConditionInput
  ): Promise<DeleteSceeningQuestionMutation> {
    const statement = `mutation DeleteSceeningQuestion($input: DeleteSceeningQuestionInput!, $condition: ModelSceeningQuestionConditionInput) {
        deleteSceeningQuestion(input: $input, condition: $condition) {
          __typename
          id
          sceeningID
          questionID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
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
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSceeningQuestionMutation>response.data.deleteSceeningQuestion;
  }
  async CreateSceeningOption(
    input: CreateSceeningOptionInput,
    condition?: ModelSceeningOptionConditionInput
  ): Promise<CreateSceeningOptionMutation> {
    const statement = `mutation CreateSceeningOption($input: CreateSceeningOptionInput!, $condition: ModelSceeningOptionConditionInput) {
        createSceeningOption(input: $input, condition: $condition) {
          __typename
          id
          sceeningID
          optionID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
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
          sceeningID
          optionID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
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
          sceeningID
          optionID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
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
  async CreateFormQuestion(
    input: CreateFormQuestionInput,
    condition?: ModelFormQuestionConditionInput
  ): Promise<CreateFormQuestionMutation> {
    const statement = `mutation CreateFormQuestion($input: CreateFormQuestionInput!, $condition: ModelFormQuestionConditionInput) {
        createFormQuestion(input: $input, condition: $condition) {
          __typename
          id
          formID
          questionID
          form {
            __typename
            id
            name
            Questions {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
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
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFormQuestionMutation>response.data.createFormQuestion;
  }
  async UpdateFormQuestion(
    input: UpdateFormQuestionInput,
    condition?: ModelFormQuestionConditionInput
  ): Promise<UpdateFormQuestionMutation> {
    const statement = `mutation UpdateFormQuestion($input: UpdateFormQuestionInput!, $condition: ModelFormQuestionConditionInput) {
        updateFormQuestion(input: $input, condition: $condition) {
          __typename
          id
          formID
          questionID
          form {
            __typename
            id
            name
            Questions {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
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
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFormQuestionMutation>response.data.updateFormQuestion;
  }
  async DeleteFormQuestion(
    input: DeleteFormQuestionInput,
    condition?: ModelFormQuestionConditionInput
  ): Promise<DeleteFormQuestionMutation> {
    const statement = `mutation DeleteFormQuestion($input: DeleteFormQuestionInput!, $condition: ModelFormQuestionConditionInput) {
        deleteFormQuestion(input: $input, condition: $condition) {
          __typename
          id
          formID
          questionID
          form {
            __typename
            id
            name
            Questions {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
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
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFormQuestionMutation>response.data.deleteFormQuestion;
  }
  async CreateFormJob(
    input: CreateFormJobInput,
    condition?: ModelFormJobConditionInput
  ): Promise<CreateFormJobMutation> {
    const statement = `mutation CreateFormJob($input: CreateFormJobInput!, $condition: ModelFormJobConditionInput) {
        createFormJob(input: $input, condition: $condition) {
          __typename
          id
          formID
          jobID
          form {
            __typename
            id
            name
            Questions {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
          formID
          jobID
          form {
            __typename
            id
            name
            Questions {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
          formID
          jobID
          form {
            __typename
            id
            name
            Questions {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
          jobID
          crewID
          job {
            __typename
            id
            code
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
          jobID
          crewID
          job {
            __typename
            id
            code
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
          jobID
          crewID
          job {
            __typename
            id
            code
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
          questionID
          optionID
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
            sceenings {
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
          questionID
          optionID
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
            sceenings {
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
          questionID
          optionID
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
            sceenings {
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
          Jobs {
            __typename
            items {
              __typename
              id
              sceeningID
              jobID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Crews {
            __typename
            items {
              __typename
              id
              sceeningID
              crewID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Questions {
            __typename
            items {
              __typename
              id
              sceeningID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Options {
            __typename
            items {
              __typename
              id
              sceeningID
              optionID
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
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
  async GetForm(id: string): Promise<GetFormQuery> {
    const statement = `query GetForm($id: ID!) {
        getForm(id: $id) {
          __typename
          id
          name
          Questions {
            __typename
            items {
              __typename
              id
              formID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Jobs {
            __typename
            items {
              __typename
              id
              formID
              jobID
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
            Questions {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
            Questions {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              jobID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          forms {
            __typename
            items {
              __typename
              id
              formID
              jobID
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
              jobID
              crewID
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
  async GetQuestion(id: string): Promise<GetQuestionQuery> {
    const statement = `query GetQuestion($id: ID!) {
        getQuestion(id: $id) {
          __typename
          id
          title
          Options {
            __typename
            items {
              __typename
              id
              questionID
              optionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          forms {
            __typename
            items {
              __typename
              id
              formID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              questionID
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
          optionOrderDesc
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
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
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
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
              questionID
              optionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              optionID
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
              startedAt
            }
            sceenings {
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
              nextToken
              startedAt
            }
            sceenings {
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
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              crewID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Jobs {
            __typename
            items {
              __typename
              id
              jobID
              crewID
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
  async GetSceeningJob(id: string): Promise<GetSceeningJobQuery> {
    const statement = `query GetSceeningJob($id: ID!) {
        getSceeningJob(id: $id) {
          __typename
          id
          sceeningID
          jobID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
            sceeningID
            jobID
            sceening {
              __typename
              id
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
    return <ListSceeningJobsQuery>response.data.listSceeningJobs;
  }
  async SyncSceeningJobs(
    filter?: ModelSceeningJobFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncSceeningJobsQuery> {
    const statement = `query SyncSceeningJobs($filter: ModelSceeningJobFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncSceeningJobs(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            sceeningID
            jobID
            sceening {
              __typename
              id
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
    return <SyncSceeningJobsQuery>response.data.syncSceeningJobs;
  }
  async GetSceeningCrew(id: string): Promise<GetSceeningCrewQuery> {
    const statement = `query GetSceeningCrew($id: ID!) {
        getSceeningCrew(id: $id) {
          __typename
          id
          sceeningID
          crewID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
            sceeningID
            crewID
            sceening {
              __typename
              id
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
    return <ListSceeningCrewsQuery>response.data.listSceeningCrews;
  }
  async SyncSceeningCrews(
    filter?: ModelSceeningCrewFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncSceeningCrewsQuery> {
    const statement = `query SyncSceeningCrews($filter: ModelSceeningCrewFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncSceeningCrews(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            sceeningID
            crewID
            sceening {
              __typename
              id
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
    return <SyncSceeningCrewsQuery>response.data.syncSceeningCrews;
  }
  async GetSceeningQuestion(id: string): Promise<GetSceeningQuestionQuery> {
    const statement = `query GetSceeningQuestion($id: ID!) {
        getSceeningQuestion(id: $id) {
          __typename
          id
          sceeningID
          questionID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
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
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSceeningQuestionQuery>response.data.getSceeningQuestion;
  }
  async ListSceeningQuestions(
    filter?: ModelSceeningQuestionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSceeningQuestionsQuery> {
    const statement = `query ListSceeningQuestions($filter: ModelSceeningQuestionFilterInput, $limit: Int, $nextToken: String) {
        listSceeningQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            sceeningID
            questionID
            sceening {
              __typename
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
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
    return <ListSceeningQuestionsQuery>response.data.listSceeningQuestions;
  }
  async SyncSceeningQuestions(
    filter?: ModelSceeningQuestionFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncSceeningQuestionsQuery> {
    const statement = `query SyncSceeningQuestions($filter: ModelSceeningQuestionFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncSceeningQuestions(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            sceeningID
            questionID
            sceening {
              __typename
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
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
    return <SyncSceeningQuestionsQuery>response.data.syncSceeningQuestions;
  }
  async GetSceeningOption(id: string): Promise<GetSceeningOptionQuery> {
    const statement = `query GetSceeningOption($id: ID!) {
        getSceeningOption(id: $id) {
          __typename
          id
          sceeningID
          optionID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
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
            sceeningID
            optionID
            sceening {
              __typename
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
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
  async SyncSceeningOptions(
    filter?: ModelSceeningOptionFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncSceeningOptionsQuery> {
    const statement = `query SyncSceeningOptions($filter: ModelSceeningOptionFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncSceeningOptions(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            sceeningID
            optionID
            sceening {
              __typename
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
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
    return <SyncSceeningOptionsQuery>response.data.syncSceeningOptions;
  }
  async GetFormQuestion(id: string): Promise<GetFormQuestionQuery> {
    const statement = `query GetFormQuestion($id: ID!) {
        getFormQuestion(id: $id) {
          __typename
          id
          formID
          questionID
          form {
            __typename
            id
            name
            Questions {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
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
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFormQuestionQuery>response.data.getFormQuestion;
  }
  async ListFormQuestions(
    filter?: ModelFormQuestionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFormQuestionsQuery> {
    const statement = `query ListFormQuestions($filter: ModelFormQuestionFilterInput, $limit: Int, $nextToken: String) {
        listFormQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            formID
            questionID
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
    return <ListFormQuestionsQuery>response.data.listFormQuestions;
  }
  async SyncFormQuestions(
    filter?: ModelFormQuestionFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncFormQuestionsQuery> {
    const statement = `query SyncFormQuestions($filter: ModelFormQuestionFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncFormQuestions(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            formID
            questionID
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
    return <SyncFormQuestionsQuery>response.data.syncFormQuestions;
  }
  async GetFormJob(id: string): Promise<GetFormJobQuery> {
    const statement = `query GetFormJob($id: ID!) {
        getFormJob(id: $id) {
          __typename
          id
          formID
          jobID
          form {
            __typename
            id
            name
            Questions {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
            formID
            jobID
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
            formID
            jobID
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
  async GetCrewJob(id: string): Promise<GetCrewJobQuery> {
    const statement = `query GetCrewJob($id: ID!) {
        getCrewJob(id: $id) {
          __typename
          id
          jobID
          crewID
          job {
            __typename
            id
            code
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
            jobID
            crewID
            job {
              __typename
              id
              code
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
            jobID
            crewID
            job {
              __typename
              id
              code
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
  async GetQuestionOption(id: string): Promise<GetQuestionOptionQuery> {
    const statement = `query GetQuestionOption($id: ID!) {
        getQuestionOption(id: $id) {
          __typename
          id
          questionID
          optionID
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
            sceenings {
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
            questionID
            optionID
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
            questionID
            optionID
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
  OnCreateSceeningListener(
    filter?: ModelSubscriptionSceeningFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSceening">>
  > {
    const statement = `subscription OnCreateSceening($filter: ModelSubscriptionSceeningFilterInput) {
        onCreateSceening(filter: $filter) {
          __typename
          id
          Jobs {
            __typename
            items {
              __typename
              id
              sceeningID
              jobID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Crews {
            __typename
            items {
              __typename
              id
              sceeningID
              crewID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Questions {
            __typename
            items {
              __typename
              id
              sceeningID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Options {
            __typename
            items {
              __typename
              id
              sceeningID
              optionID
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
          Jobs {
            __typename
            items {
              __typename
              id
              sceeningID
              jobID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Crews {
            __typename
            items {
              __typename
              id
              sceeningID
              crewID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Questions {
            __typename
            items {
              __typename
              id
              sceeningID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Options {
            __typename
            items {
              __typename
              id
              sceeningID
              optionID
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
          Jobs {
            __typename
            items {
              __typename
              id
              sceeningID
              jobID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Crews {
            __typename
            items {
              __typename
              id
              sceeningID
              crewID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Questions {
            __typename
            items {
              __typename
              id
              sceeningID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Options {
            __typename
            items {
              __typename
              id
              sceeningID
              optionID
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
          Questions {
            __typename
            items {
              __typename
              id
              formID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Jobs {
            __typename
            items {
              __typename
              id
              formID
              jobID
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
          Questions {
            __typename
            items {
              __typename
              id
              formID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Jobs {
            __typename
            items {
              __typename
              id
              formID
              jobID
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
          Questions {
            __typename
            items {
              __typename
              id
              formID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Jobs {
            __typename
            items {
              __typename
              id
              formID
              jobID
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
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              jobID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          forms {
            __typename
            items {
              __typename
              id
              formID
              jobID
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
              jobID
              crewID
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
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              jobID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          forms {
            __typename
            items {
              __typename
              id
              formID
              jobID
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
              jobID
              crewID
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
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              jobID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          forms {
            __typename
            items {
              __typename
              id
              formID
              jobID
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
              jobID
              crewID
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
          Options {
            __typename
            items {
              __typename
              id
              questionID
              optionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          forms {
            __typename
            items {
              __typename
              id
              formID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              questionID
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
          optionOrderDesc
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
          Options {
            __typename
            items {
              __typename
              id
              questionID
              optionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          forms {
            __typename
            items {
              __typename
              id
              formID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              questionID
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
          optionOrderDesc
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
          Options {
            __typename
            items {
              __typename
              id
              questionID
              optionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          forms {
            __typename
            items {
              __typename
              id
              formID
              questionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              questionID
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
          optionOrderDesc
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
              questionID
              optionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              optionID
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
              questionID
              optionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              optionID
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
              questionID
              optionID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              optionID
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
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              crewID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Jobs {
            __typename
            items {
              __typename
              id
              jobID
              crewID
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
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              crewID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Jobs {
            __typename
            items {
              __typename
              id
              jobID
              crewID
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
          sceenings {
            __typename
            items {
              __typename
              id
              sceeningID
              crewID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Jobs {
            __typename
            items {
              __typename
              id
              jobID
              crewID
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

  OnCreateSceeningJobListener(
    filter?: ModelSubscriptionSceeningJobFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSceeningJob">>
  > {
    const statement = `subscription OnCreateSceeningJob($filter: ModelSubscriptionSceeningJobFilterInput) {
        onCreateSceeningJob(filter: $filter) {
          __typename
          id
          sceeningID
          jobID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
          sceeningID
          jobID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
          sceeningID
          jobID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
          sceeningID
          crewID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
          sceeningID
          crewID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
          sceeningID
          crewID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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

  OnCreateSceeningQuestionListener(
    filter?: ModelSubscriptionSceeningQuestionFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateSceeningQuestion">
    >
  > {
    const statement = `subscription OnCreateSceeningQuestion($filter: ModelSubscriptionSceeningQuestionFilterInput) {
        onCreateSceeningQuestion(filter: $filter) {
          __typename
          id
          sceeningID
          questionID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
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
        Pick<__SubscriptionContainer, "onCreateSceeningQuestion">
      >
    >;
  }

  OnUpdateSceeningQuestionListener(
    filter?: ModelSubscriptionSceeningQuestionFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateSceeningQuestion">
    >
  > {
    const statement = `subscription OnUpdateSceeningQuestion($filter: ModelSubscriptionSceeningQuestionFilterInput) {
        onUpdateSceeningQuestion(filter: $filter) {
          __typename
          id
          sceeningID
          questionID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
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
        Pick<__SubscriptionContainer, "onUpdateSceeningQuestion">
      >
    >;
  }

  OnDeleteSceeningQuestionListener(
    filter?: ModelSubscriptionSceeningQuestionFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteSceeningQuestion">
    >
  > {
    const statement = `subscription OnDeleteSceeningQuestion($filter: ModelSubscriptionSceeningQuestionFilterInput) {
        onDeleteSceeningQuestion(filter: $filter) {
          __typename
          id
          sceeningID
          questionID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
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
        Pick<__SubscriptionContainer, "onDeleteSceeningQuestion">
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
          sceeningID
          optionID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
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
          sceeningID
          optionID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
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
          sceeningID
          optionID
          sceening {
            __typename
            id
            Jobs {
              __typename
              nextToken
              startedAt
            }
            Crews {
              __typename
              nextToken
              startedAt
            }
            Questions {
              __typename
              nextToken
              startedAt
            }
            Options {
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
            sceenings {
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

  OnCreateFormQuestionListener(
    filter?: ModelSubscriptionFormQuestionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFormQuestion">>
  > {
    const statement = `subscription OnCreateFormQuestion($filter: ModelSubscriptionFormQuestionFilterInput) {
        onCreateFormQuestion(filter: $filter) {
          __typename
          id
          formID
          questionID
          form {
            __typename
            id
            name
            Questions {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
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
        Pick<__SubscriptionContainer, "onCreateFormQuestion">
      >
    >;
  }

  OnUpdateFormQuestionListener(
    filter?: ModelSubscriptionFormQuestionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFormQuestion">>
  > {
    const statement = `subscription OnUpdateFormQuestion($filter: ModelSubscriptionFormQuestionFilterInput) {
        onUpdateFormQuestion(filter: $filter) {
          __typename
          id
          formID
          questionID
          form {
            __typename
            id
            name
            Questions {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
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
        Pick<__SubscriptionContainer, "onUpdateFormQuestion">
      >
    >;
  }

  OnDeleteFormQuestionListener(
    filter?: ModelSubscriptionFormQuestionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFormQuestion">>
  > {
    const statement = `subscription OnDeleteFormQuestion($filter: ModelSubscriptionFormQuestionFilterInput) {
        onDeleteFormQuestion(filter: $filter) {
          __typename
          id
          formID
          questionID
          form {
            __typename
            id
            name
            Questions {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
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
        Pick<__SubscriptionContainer, "onDeleteFormQuestion">
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
          formID
          jobID
          form {
            __typename
            id
            name
            Questions {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
          formID
          jobID
          form {
            __typename
            id
            name
            Questions {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
          formID
          jobID
          form {
            __typename
            id
            name
            Questions {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
          jobID
          crewID
          job {
            __typename
            id
            code
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
          jobID
          crewID
          job {
            __typename
            id
            code
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
          jobID
          crewID
          job {
            __typename
            id
            code
            sceenings {
              __typename
              nextToken
              startedAt
            }
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
            sceenings {
              __typename
              nextToken
              startedAt
            }
            Jobs {
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
          questionID
          optionID
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
            sceenings {
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
          questionID
          optionID
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
            sceenings {
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
          questionID
          optionID
          question {
            __typename
            id
            title
            Options {
              __typename
              nextToken
              startedAt
            }
            forms {
              __typename
              nextToken
              startedAt
            }
            sceenings {
              __typename
              nextToken
              startedAt
            }
            order
            optionOrderDesc
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
            sceenings {
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
