import { combineReducers } from 'redux';
import { BreweryListReducer, SelectedBreweryReducer, StateListReducer } from './BreweryReducer';

const RootReducer = combineReducers({
    Breweries: BreweryListReducer,
    Brewery: SelectedBreweryReducer,
    StateBreweries: StateListReducer,
});

export default RootReducer;