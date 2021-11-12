import {
    FETCH_GROUP_BY_ID_FAILURE,
    FETCH_GROUP_BY_ID_REQUEST,
    FETCH_GROUP_BY_ID_SUCCESS,
} from '../constants/groupByIdTypes'

export const fetchGroupByIdRequest = () => {
    return {
        type: FETCH_GROUP_BY_ID_REQUEST
    }
}

export const fetchGroupByIdSuccess = group => {
    return {
        type: FETCH_GROUP_BY_ID_SUCCESS,
        payload: group
    }
}

export const fetchGroupByIdFailure = error => {
    return {
        type: FETCH_GROUP_BY_ID_FAILURE,
        payload: error
    }
}