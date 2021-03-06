import { ActionTypes } from '../Constants/Action.type';

const initialState = {
    breweries: [],
};

export const BreweryListReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_BREWERIES:
            return { ...state, Breweries: payload};
        default:
            return state
    }
};

export const StateListReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_STATE_BREWERIES:
            return { ...state, StateBreweries: payload};
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
