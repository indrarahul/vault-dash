import {
  FETCH_GROUPS_REQUEST,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_FAILURE,
} from '../constants/groupsTypes';

const initialState = {
  loading: false,
  data: {},
  keys: [],
  error: ''
};

export default function GroupsReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_GROUPS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case FETCH_GROUPS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        keys: action.payload.data.keys,
      };

    case FETCH_GROUPS_FAILURE:
      return {
        ...state,
        loading: false,
        data: {},
        keys: [],
        error: action.payload
      };

    default:
      return state;
  }
}
