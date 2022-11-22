// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Sceening, Job, Form, Question, Option, Crew, SceeningJob, SceeningCrew, SceeningQuestion, SceeningOption, FormJob, CrewJob, FormQuestion, QuestionOption } = initSchema(schema);

export {
  Sceening,
  Job,
  Form,
  Question,
  Option,
  Crew,
  SceeningJob,
  SceeningCrew,
  SceeningQuestion,
  SceeningOption,
  FormJob,
  CrewJob,
  FormQuestion,
  QuestionOption
};