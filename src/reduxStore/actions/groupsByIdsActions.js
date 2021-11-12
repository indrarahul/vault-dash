import {
    FETCH_GROUPS_BY_IDS_FAILURE,
    FETCH_GROUPS_BY_IDS_REQUEST,
    FETCH_GROUPS_BY_IDS_SUCCESS,
} from '../constants/groupsByIdsTypes'

export const fetchGroupsByIdsRequest = () => {
    return {
        type: FETCH_GROUPS_BY_IDS_REQUEST
    }
}

export const fetchGroupsByIdsSuccess = groupsByIdsData => {
    return {
        type: FETCH_GROUPS_BY_IDS_SUCCESS,
        payload: groupsByIdsData
    }
}

export const fetchGroupsByIdsFailure = error => {
    return {
        type: FETCH_GROUPS_BY_IDS_FAILURE,
        payload: error
    }
}