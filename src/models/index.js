// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Sceening, AnsweredQuestion, Form, Question, Option, Job, Crew, FormJob, QuestionOption, CrewJob } = initSchema(schema);

export {
  Sceening,
  AnsweredQuestion,
  Form,
  Question,
  Option,
  Job,
  Crew,
  FormJob,
  QuestionOption,
  CrewJob
};