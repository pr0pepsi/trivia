import { GameActionTypes, Question } from "./types";

export function setQuestions(questions: Question[]): GameActionTypes {
  return {
    type: "SET_QUESTIONS",
    payload: {
      questions,
    },
  };
}

export function addQuestionResult(result: boolean): GameActionTypes {
  return {
    type: "ADD_QUESTION_RESULT",
    payload: {
      result,
    },
  };
}
