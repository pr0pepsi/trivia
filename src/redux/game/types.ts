export interface Question {
    category:string;
    type:string;
    difficulty:"easy" | "hard",
    question:string;
    correct_answer: string;
    incorrect_answers:string[];
}

export interface GameState {
    questions: Question[],
    results: Boolean[]
}

export const SET_QUESTIONS = 'SET_QUESTIONS'

interface SetQuestionsAction {
    type: typeof SET_QUESTIONS;
    payload: {
        questions: Question[],
    }
}

export const ADD_QUESTION_RESULT = 'ADD_QUESTION_RESULT'

interface AddQuestionResultAction {
    type: typeof ADD_QUESTION_RESULT;
    payload: {
        result: boolean,
    }
}


export type GameActionTypes = SetQuestionsAction | AddQuestionResultAction;