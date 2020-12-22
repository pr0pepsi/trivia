export interface Question {
    category:string;
    type:string;
    difficulty:"easy" | "hard",
    question:string;
    correct_answer: string;
    incorrect_answers:string[];
}

export interface GameState {
    questions: Question[]
}

export const SET_QUESTIONS = 'SET_QUESTIONS'

interface SetQuestionsAction {
    type: typeof SET_QUESTIONS;
    payload: {
        questions: Question[],
    }
}


export type GameActionTypes = SetQuestionsAction;