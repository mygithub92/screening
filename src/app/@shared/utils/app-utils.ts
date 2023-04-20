export function sortQuestions(questions) {
  return questions.sort((q1, q2) => q1.order - q2.order);
}
