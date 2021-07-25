import { combineReducers } from 'redux';
import { BreweryListReducer, SelectedBreweryReducer } from './BreweryReducer';

const RootReducer = combineReducers({
    Breweries: BreweryListReducer,
    Brewery: SelectedBreweryReducer,
});

export default RootReducer;