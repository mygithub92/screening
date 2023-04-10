import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerSceening = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sceening, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly jobId?: string | null;
  readonly jobName?: string | null;
  readonly crewId?: string | null;
  readonly crewName?: string | null;
  readonly crewPhoneNumber?: string | null;
  readonly result?: string | null;
  readonly method?: string | null;
  readonly staffId?: string | null;
  readonly staffName?: string | null;
  readonly processed?: boolean | null;
  readonly location?: string | null;
  readonly processedAt?: string | null;
  readonly submittedAt?: string | null;
  readonly answeredQuestions?: (AnsweredQuestion | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySceening = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sceening, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly jobId?: string | null;
  readonly jobName?: string | null;
  readonly crewId?: string | null;
  readonly crewName?: string | null;
  readonly crewPhoneNumber?: string | null;
  readonly result?: string | null;
  readonly method?: string | null;
  readonly staffId?: string | null;
  readonly staffName?: string | null;
  readonly processed?: boolean | null;
  readonly location?: string | null;
  readonly processedAt?: string | null;
  readonly submittedAt?: string | null;
  readonly answeredQuestions: AsyncCollection<AnsweredQuestion>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sceening = LazyLoading extends LazyLoadingDisabled ? EagerSceening : LazySceening

export declare const Sceening: (new (init: ModelInit<Sceening>) => Sceening) & {
  copyOf(source: Sceening, mutator: (draft: MutableModel<Sceening>) => MutableModel<Sceening> | void): Sceening;
}

type EagerAnsweredQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AnsweredQuestion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question?: string | null;
  readonly answer?: string | null;
  readonly sceening?: Sceening | null;
  readonly order?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly sceeningAnsweredQuestionsId?: string | null;
}

type LazyAnsweredQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AnsweredQuestion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question?: string | null;
  readonly answer?: string | null;
  readonly sceening: AsyncItem<Sceening | undefined>;
  readonly order?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly sceeningAnsweredQuestionsId?: string | null;
}

export declare type AnsweredQuestion = LazyLoading extends LazyLoadingDisabled ? EagerAnsweredQuestion : LazyAnsweredQuestion

export declare const AnsweredQuestion: (new (init: ModelInit<AnsweredQuestion>) => AnsweredQuestion) & {
  copyOf(source: AnsweredQuestion, mutator: (draft: MutableModel<AnsweredQuestion>) => MutableModel<AnsweredQuestion> | void): AnsweredQuestion;
}

type EagerForm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Form, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly questions?: (Question | null)[] | null;
  readonly jobs?: (FormJob | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyForm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Form, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly questions: AsyncCollection<Question>;
  readonly jobs: AsyncCollection<FormJob>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Form = LazyLoading extends LazyLoadingDisabled ? EagerForm : LazyForm

export declare const Form: (new (init: ModelInit<Form>) => Form) & {
  copyOf(source: Form, mutator: (draft: MutableModel<Form>) => MutableModel<Form> | void): Form;
}

type EagerQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly options?: (QuestionOption | null)[] | null;
  readonly form?: Form | null;
  readonly order?: number | null;
  readonly optionOrderDesc?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly formQuestionsId?: string | null;
}

type LazyQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly options: AsyncCollection<QuestionOption>;
  readonly form: AsyncItem<Form | undefined>;
  readonly order?: number | null;
  readonly optionOrderDesc?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly formQuestionsId?: string | null;
}

export declare type Question = LazyLoading extends LazyLoadingDisabled ? EagerQuestion : LazyQuestion

export declare const Question: (new (init: ModelInit<Question>) => Question) & {
  copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

type EagerOption = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Option, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly label?: string | null;
  readonly value?: string | null;
  readonly questions?: (QuestionOption | null)[] | null;
  readonly order?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOption = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Option, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly label?: string | null;
  readonly value?: string | null;
  readonly questions: AsyncCollection<QuestionOption>;
  readonly order?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Option = LazyLoading extends LazyLoadingDisabled ? EagerOption : LazyOption

export declare const Option: (new (init: ModelInit<Option>) => Option) & {
  copyOf(source: Option, mutator: (draft: MutableModel<Option>) => MutableModel<Option> | void): Option;
}

type EagerJob = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Job, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code?: string | null;
  readonly location?: string | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly forms?: (FormJob | null)[] | null;
  readonly crews?: (CrewJob | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJob = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Job, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code?: string | null;
  readonly location?: string | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly forms: AsyncCollection<FormJob>;
  readonly crews: AsyncCollection<CrewJob>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Job = LazyLoading extends LazyLoadingDisabled ? EagerJob : LazyJob

export declare const Job: (new (init: ModelInit<Job>) => Job) & {
  copyOf(source: Job, mutator: (draft: MutableModel<Job>) => MutableModel<Job> | void): Job;
}

type EagerCrew = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Crew, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userName?: string | null;
  readonly role?: string | null;
  readonly DOB?: string | null;
  readonly healthCardNumber?: string | null;
  readonly vaxxStatus?: string | null;
  readonly userAgreement?: string | null;
  readonly companyName?: string | null;
  readonly address?: string | null;
  readonly phonenumber?: string | null;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly defaultJobId?: string | null;
  readonly jobs?: (CrewJob | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCrew = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Crew, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userName?: string | null;
  readonly role?: string | null;
  readonly DOB?: string | null;
  readonly healthCardNumber?: string | null;
  readonly vaxxStatus?: string | null;
  readonly userAgreement?: string | null;
  readonly companyName?: string | null;
  readonly address?: string | null;
  readonly phonenumber?: string | null;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly defaultJobId?: string | null;
  readonly jobs: AsyncCollection<CrewJob>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Crew = LazyLoading extends LazyLoadingDisabled ? EagerCrew : LazyCrew

export declare const Crew: (new (init: ModelInit<Crew>) => Crew) & {
  copyOf(source: Crew, mutator: (draft: MutableModel<Crew>) => MutableModel<Crew> | void): Crew;
}

type EagerLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location) & {
  copyOf(source: Location, mutator: (draft: MutableModel<Location>) => MutableModel<Location> | void): Location;
}

type EagerFormJob = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FormJob, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly formId?: string | null;
  readonly jobId?: string | null;
  readonly form: Form;
  readonly job: Job;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFormJob = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FormJob, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly formId?: string | null;
  readonly jobId?: string | null;
  readonly form: AsyncItem<Form>;
  readonly job: AsyncItem<Job>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FormJob = LazyLoading extends LazyLoadingDisabled ? EagerFormJob : LazyFormJob

export declare const FormJob: (new (init: ModelInit<FormJob>) => FormJob) & {
  copyOf(source: FormJob, mutator: (draft: MutableModel<FormJob>) => MutableModel<FormJob> | void): FormJob;
}

type EagerQuestionOption = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QuestionOption, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questionId?: string | null;
  readonly optionId?: string | null;
  readonly question: Question;
  readonly option: Option;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuestionOption = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QuestionOption, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questionId?: string | null;
  readonly optionId?: string | null;
  readonly question: AsyncItem<Question>;
  readonly option: AsyncItem<Option>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type QuestionOption = LazyLoading extends LazyLoadingDisabled ? EagerQuestionOption : LazyQuestionOption

export declare const QuestionOption: (new (init: ModelInit<QuestionOption>) => QuestionOption) & {
  copyOf(source: QuestionOption, mutator: (draft: MutableModel<QuestionOption>) => MutableModel<QuestionOption> | void): QuestionOption;
}

type EagerCrewJob = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CrewJob, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly jobId?: string | null;
  readonly crewId?: string | null;
  readonly job: Job;
  readonly crew: Crew;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCrewJob = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CrewJob, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly jobId?: string | null;
  readonly crewId?: string | null;
  readonly job: AsyncItem<Job>;
  readonly crew: AsyncItem<Crew>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CrewJob = LazyLoading extends LazyLoadingDisabled ? EagerCrewJob : LazyCrewJob

export declare const CrewJob: (new (init: ModelInit<CrewJob>) => CrewJob) & {
  copyOf(source: CrewJob, mutator: (draft: MutableModel<CrewJob>) => MutableModel<CrewJob> | void): CrewJob;
}