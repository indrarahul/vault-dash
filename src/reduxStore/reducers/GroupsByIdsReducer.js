import {
    FETCH_GROUPS_BY_IDS_FAILURE,
    FETCH_GROUPS_BY_IDS_SUCCESS,
    FETCH_GROUPS_BY_IDS_REQUEST
} from '../constants/groupsByIdsTypes';

const initialState = {
    loading: false,
    data: [],
    error: ''
};

export default function GroupsByIdsReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_GROUPS_BY_IDS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_GROUPS_BY_IDS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };

        case FETCH_GROUPS_BY_IDS_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            };

        default:
            return state;
    }
}
