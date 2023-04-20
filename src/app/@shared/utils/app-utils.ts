import * as moment from "moment";

export function sortQuestions(questions) {
  return questions.sort((q1, q2) => q1.order - q2.order);
}

export function getDOBYearRange() {
  const hundredYearAgo = moment().add(-100, "years").get("year");
  const thisYear = moment().get("year");
  return `${hundredYearAgo}:${thisYear}`;
}
