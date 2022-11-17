import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type SceeningMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type JobMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FormMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuestionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OptionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CrewMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SceeningJobMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SceeningCrewMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SceeningQuestionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SceeningOptionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FormJobMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CrewJobMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FormQuestionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuestionOptionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerSceening = {
  readonly id: string;
  readonly Jobs?: (SceeningJob | null)[] | null;
  readonly Crews?: (SceeningCrew | null)[] | null;
  readonly Questions?: (SceeningQuestion | null)[] | null;
  readonly Options?: (SceeningOption | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySceening = {
  readonly id: string;
  readonly Jobs: AsyncCollection<SceeningJob>;
  readonly Crews: AsyncCollection<SceeningCrew>;
  readonly Questions: AsyncCollection<SceeningQuestion>;
  readonly Options: AsyncCollection<SceeningOption>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sceening = LazyLoading extends LazyLoadingDisabled ? EagerSceening : LazySceening

export declare const Sceening: (new (init: ModelInit<Sceening, SceeningMetaData>) => Sceening) & {
  copyOf(source: Sceening, mutator: (draft: MutableModel<Sceening, SceeningMetaData>) => MutableModel<Sceening, SceeningMetaData> | void): Sceening;
}

type EagerJob = {
  readonly id: string;
  readonly code?: string | null;
  readonly sceenings?: (SceeningJob | null)[] | null;
  readonly forms?: (FormJob | null)[] | null;
  readonly crews?: (CrewJob | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJob = {
  readonly id: string;
  readonly code?: string | null;
  readonly sceenings: AsyncCollection<SceeningJob>;
  readonly forms: AsyncCollection<FormJob>;
  readonly crews: AsyncCollection<CrewJob>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Job = LazyLoading extends LazyLoadingDisabled ? EagerJob : LazyJob

export declare const Job: (new (init: ModelInit<Job, JobMetaData>) => Job) & {
  copyOf(source: Job, mutator: (draft: MutableModel<Job, JobMetaData>) => MutableModel<Job, JobMetaData> | void): Job;
}

type EagerForm = {
  readonly id: string;
  readonly name?: string | null;
  readonly Questions?: (FormQuestion | null)[] | null;
  readonly Jobs?: (FormJob | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyForm = {
  readonly id: string;
  readonly name?: string | null;
  readonly Questions: AsyncCollection<FormQuestion>;
  readonly Jobs: AsyncCollection<FormJob>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Form = LazyLoading extends LazyLoadingDisabled ? EagerForm : LazyForm

export declare const Form: (new (init: ModelInit<Form, FormMetaData>) => Form) & {
  copyOf(source: Form, mutator: (draft: MutableModel<Form, FormMetaData>) => MutableModel<Form, FormMetaData> | void): Form;
}

type EagerQuestion = {
  readonly id: string;
  readonly title?: string | null;
  readonly Options?: (QuestionOption | null)[] | null;
  readonly forms?: (FormQuestion | null)[] | null;
  readonly sceenings?: (SceeningQuestion | null)[] | null;
  readonly order?: number | null;
  readonly optionOrderDesc?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuestion = {
  readonly id: string;
  readonly title?: string | null;
  readonly Options: AsyncCollection<QuestionOption>;
  readonly forms: AsyncCollection<FormQuestion>;
  readonly sceenings: AsyncCollection<SceeningQuestion>;
  readonly order?: number | null;
  readonly optionOrderDesc?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Question = LazyLoading extends LazyLoadingDisabled ? EagerQuestion : LazyQuestion

export declare const Question: (new (init: ModelInit<Question, QuestionMetaData>) => Question) & {
  copyOf(source: Question, mutator: (draft: MutableModel<Question, QuestionMetaData>) => MutableModel<Question, QuestionMetaData> | void): Question;
}

type EagerOption = {
  readonly id: string;
  readonly label?: string | null;
  readonly value?: string | null;
  readonly questions?: (QuestionOption | null)[] | null;
  readonly sceenings?: (SceeningOption | null)[] | null;
  readonly order?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOption = {
  readonly id: string;
  readonly label?: string | null;
  readonly value?: string | null;
  readonly questions: AsyncCollection<QuestionOption>;
  readonly sceenings: AsyncCollection<SceeningOption>;
  readonly order?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Option = LazyLoading extends LazyLoadingDisabled ? EagerOption : LazyOption

export declare const Option: (new (init: ModelInit<Option, OptionMetaData>) => Option) & {
  copyOf(source: Option, mutator: (draft: MutableModel<Option, OptionMetaData>) => MutableModel<Option, OptionMetaData> | void): Option;
}

type EagerCrew = {
  readonly id: string;
  readonly userName?: string | null;
  readonly sceenings?: (SceeningCrew | null)[] | null;
  readonly Jobs?: (CrewJob | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCrew = {
  readonly id: string;
  readonly userName?: string | null;
  readonly sceenings: AsyncCollection<SceeningCrew>;
  readonly Jobs: AsyncCollection<CrewJob>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Crew = LazyLoading extends LazyLoadingDisabled ? EagerCrew : LazyCrew

export declare const Crew: (new (init: ModelInit<Crew, CrewMetaData>) => Crew) & {
  copyOf(source: Crew, mutator: (draft: MutableModel<Crew, CrewMetaData>) => MutableModel<Crew, CrewMetaData> | void): Crew;
}

type EagerSceeningJob = {
  readonly id: string;
  readonly sceening: Sceening;
  readonly job: Job;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySceeningJob = {
  readonly id: string;
  readonly sceening: AsyncItem<Sceening>;
  readonly job: AsyncItem<Job>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SceeningJob = LazyLoading extends LazyLoadingDisabled ? EagerSceeningJob : LazySceeningJob

export declare const SceeningJob: (new (init: ModelInit<SceeningJob, SceeningJobMetaData>) => SceeningJob) & {
  copyOf(source: SceeningJob, mutator: (draft: MutableModel<SceeningJob, SceeningJobMetaData>) => MutableModel<SceeningJob, SceeningJobMetaData> | void): SceeningJob;
}

type EagerSceeningCrew = {
  readonly id: string;
  readonly sceening: Sceening;
  readonly crew: Crew;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySceeningCrew = {
  readonly id: string;
  readonly sceening: AsyncItem<Sceening>;
  readonly crew: AsyncItem<Crew>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SceeningCrew = LazyLoading extends LazyLoadingDisabled ? EagerSceeningCrew : LazySceeningCrew

export declare const SceeningCrew: (new (init: ModelInit<SceeningCrew, SceeningCrewMetaData>) => SceeningCrew) & {
  copyOf(source: SceeningCrew, mutator: (draft: MutableModel<SceeningCrew, SceeningCrewMetaData>) => MutableModel<SceeningCrew, SceeningCrewMetaData> | void): SceeningCrew;
}

type EagerSceeningQuestion = {
  readonly id: string;
  readonly sceening: Sceening;
  readonly question: Question;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySceeningQuestion = {
  readonly id: string;
  readonly sceening: AsyncItem<Sceening>;
  readonly question: AsyncItem<Question>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SceeningQuestion = LazyLoading extends LazyLoadingDisabled ? EagerSceeningQuestion : LazySceeningQuestion

export declare const SceeningQuestion: (new (init: ModelInit<SceeningQuestion, SceeningQuestionMetaData>) => SceeningQuestion) & {
  copyOf(source: SceeningQuestion, mutator: (draft: MutableModel<SceeningQuestion, SceeningQuestionMetaData>) => MutableModel<SceeningQuestion, SceeningQuestionMetaData> | void): SceeningQuestion;
}

type EagerSceeningOption = {
  readonly id: string;
  readonly sceening: Sceening;
  readonly option: Option;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySceeningOption = {
  readonly id: string;
  readonly sceening: AsyncItem<Sceening>;
  readonly option: AsyncItem<Option>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SceeningOption = LazyLoading extends LazyLoadingDisabled ? EagerSceeningOption : LazySceeningOption

export declare const SceeningOption: (new (init: ModelInit<SceeningOption, SceeningOptionMetaData>) => SceeningOption) & {
  copyOf(source: SceeningOption, mutator: (draft: MutableModel<SceeningOption, SceeningOptionMetaData>) => MutableModel<SceeningOption, SceeningOptionMetaData> | void): SceeningOption;
}

type EagerFormJob = {
  readonly id: string;
  readonly job: Job;
  readonly form: Form;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFormJob = {
  readonly id: string;
  readonly job: AsyncItem<Job>;
  readonly form: AsyncItem<Form>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FormJob = LazyLoading extends LazyLoadingDisabled ? EagerFormJob : LazyFormJob

export declare const FormJob: (new (init: ModelInit<FormJob, FormJobMetaData>) => FormJob) & {
  copyOf(source: FormJob, mutator: (draft: MutableModel<FormJob, FormJobMetaData>) => MutableModel<FormJob, FormJobMetaData> | void): FormJob;
}

type EagerCrewJob = {
  readonly id: string;
  readonly job: Job;
  readonly crew: Crew;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCrewJob = {
  readonly id: string;
  readonly job: AsyncItem<Job>;
  readonly crew: AsyncItem<Crew>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CrewJob = LazyLoading extends LazyLoadingDisabled ? EagerCrewJob : LazyCrewJob

export declare const CrewJob: (new (init: ModelInit<CrewJob, CrewJobMetaData>) => CrewJob) & {
  copyOf(source: CrewJob, mutator: (draft: MutableModel<CrewJob, CrewJobMetaData>) => MutableModel<CrewJob, CrewJobMetaData> | void): CrewJob;
}

type EagerFormQuestion = {
  readonly id: string;
  readonly form: Form;
  readonly question: Question;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFormQuestion = {
  readonly id: string;
  readonly form: AsyncItem<Form>;
  readonly question: AsyncItem<Question>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FormQuestion = LazyLoading extends LazyLoadingDisabled ? EagerFormQuestion : LazyFormQuestion

export declare const FormQuestion: (new (init: ModelInit<FormQuestion, FormQuestionMetaData>) => FormQuestion) & {
  copyOf(source: FormQuestion, mutator: (draft: MutableModel<FormQuestion, FormQuestionMetaData>) => MutableModel<FormQuestion, FormQuestionMetaData> | void): FormQuestion;
}

type EagerQuestionOption = {
  readonly id: string;
  readonly question: Question;
  readonly option: Option;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuestionOption = {
  readonly id: string;
  readonly question: AsyncItem<Question>;
  readonly option: AsyncItem<Option>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type QuestionOption = LazyLoading extends LazyLoadingDisabled ? EagerQuestionOption : LazyQuestionOption

export declare const QuestionOption: (new (init: ModelInit<QuestionOption, QuestionOptionMetaData>) => QuestionOption) & {
  copyOf(source: QuestionOption, mutator: (draft: MutableModel<QuestionOption, QuestionOptionMetaData>) => MutableModel<QuestionOption, QuestionOptionMetaData> | void): QuestionOption;
}