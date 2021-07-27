import { ActionTypes } from '../Constants/Action.type';
export const setBreweries = (breweries) => {
    return {
        type: ActionTypes.SET_BREWERIES,
        payload: breweries,
    }
}

export const stateBreweries = (statebreweries) => {
    return {
        type: ActionTypes.SET_STATE_BREWERIES,
        payload: statebreweries,
    }
}


export const selectedBrewery = (brewery) => {
    return {
        type: ActionTypes.SELECTED_BREWERY,
        payload: brewery
    }
}

export const deleteBrewery = (brewery) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_BREWERY,
        payload: brewery
    }
}