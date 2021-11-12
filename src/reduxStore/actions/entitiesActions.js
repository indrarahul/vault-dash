import {
    FETCH_ENTITIES_SUCCESS,
    FETCH_ENTITIES_REQUEST,
    FETCH_ENTITIES_FAILURE
} from '../constants/entitiesTypes'

export const fetchEntitiesRequest = () => {
    return {
        type: FETCH_ENTITIES_REQUEST
    }
}

export const fetchEntitiesSuccess = entities => {
    return {
        type: FETCH_ENTITIES_SUCCESS,
        payload: entities
    }
}

export const fetchEntitiesFailure = error => {
    return {
        type: FETCH_ENTITIES_FAILURE,
        payload: error
    }
}

