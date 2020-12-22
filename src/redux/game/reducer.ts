import { GameActionTypes, GameState } from "./types"

const initialState: GameState = {
    questions: []
}

export function gameReducer(
    state = initialState,
    action: GameActionTypes
): GameState {
    switch (action.type) {
        case 'SET_QUESTIONS':
            return { 
                ...state, 
                questions: action.payload.questions
            };
        default:
            return state
    }
}