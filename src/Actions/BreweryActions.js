import { ActionTypes } from '../Constants/Action.type';
export const setBreweries = (breweries) => {
    return {
        type: ActionTypes.SET_BREWERIES,
        payload: breweries,
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
        payload: newEntry
    }
}