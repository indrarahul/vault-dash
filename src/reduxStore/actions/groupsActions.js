import {
    FETCH_GROUPS_REQUEST,
    FETCH_GROUPS_FAILURE,
    FETCH_GROUPS_SUCCESS,
} from '../constants/groupsTypes'

export const fetchGroupsRequest = () => {
    return {
        type: FETCH_GROUPS_REQUEST
    }
}

export const fetchGroupsSuccess = groups => {
    return {
        type: FETCH_GROUPS_SUCCESS,
        payload: groups
    }
}

export const fetchGroupsFailure = error => {
    return {
        type: FETCH_GROUPS_FAILURE,
        payload: error
    }
}

