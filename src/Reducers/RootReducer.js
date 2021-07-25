import { combineReducers } from 'redux';
import { BreweryListReducer, SelectedBreweryReducer } from './IndexReducer';

const RootReducer = combineReducers({
    Index: BreweryListReducer,
    entry: SelectedBreweryReducer,
});

export default RootReducer;