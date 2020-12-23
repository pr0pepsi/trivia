import { combineReducers } from 'redux';
import { gameReducer } from './game/reducer';
import { GameState } from './game/types';

export interface StoreState {
  game: GameState;
}

const rootReducer = combineReducers({
  game: gameReducer
});

export default rootReducer;