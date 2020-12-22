
import {  GameActionTypes, Question } from "./types"

export function setQuestions(questions: Question[]): GameActionTypes {
    return {
        type: 'SET_QUESTIONS',
        payload: {
            questions
        }
    }
}