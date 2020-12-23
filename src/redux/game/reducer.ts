import { GameActionTypes, GameState } from "./types"

const initialState: GameState = {
    questions: [],
    results: []
}

export function gameReducer(
    state = initialState,
    action: GameActionTypes
): GameState {
    switch (action.type) {
        case 'SET_QUESTIONS':
            return { 
                ...state,
                results: [],
                questions: action.payload.questions
            };
        case 'ADD_QUESTION_RESULT':
            return {
                ...state,
                results: [...state.results, action.payload.result]
            };
        default:
            return state
    }
}