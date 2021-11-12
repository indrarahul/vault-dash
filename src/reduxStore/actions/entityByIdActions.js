import {
    FETCH_ENTITY_BY_ID_FAILURE,
    FETCH_ENTITY_BY_ID_REQUEST,
    FETCH_ENTITY_BY_ID_SUCCESS,
} from '../constants/entityByIdTypes'

export const fetchEntityByIdRequest = () => {
    return {
        type: FETCH_ENTITY_BY_ID_REQUEST
    }
}

export const fetchEntityByIdSuccess = entity => {
    return {
        type: FETCH_ENTITY_BY_ID_SUCCESS,
        payload: entity
    }
}

export const fetchEntityByIdFailure = error => {
    return {
        type: FETCH_ENTITY_BY_ID_FAILURE,
        payload: error
    }
}