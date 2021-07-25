import { ActionTypes } from '../Constants/Action.type';
import concatenateReducers from 'redux-concatenate-reducers';

const initialState = {
    breweries: [],
};

export const BreweryListReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_BREWERIES:
            return { ...state, breweries: payload};
        default:
            return state
    }
};

export const SelectedBreweryReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_BREWERY:
            return { ...state, ...payload};
        default:
            return state;
    }
}
