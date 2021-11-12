import {
  FETCH_GROUP_BY_ID_FAILURE,
  FETCH_GROUP_BY_ID_SUCCESS,
  FETCH_GROUP_BY_ID_REQUEST
} from '../constants/groupByIdTypes';

const initialState = {
  loading: false,
  data: {},
  name: '',
  policies: [],
  members: [],
  error: ''
};

export default function GroupByIdReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_GROUP_BY_ID_REQUEST:
      return {
        ...state,
        loading: true
      };

    case FETCH_GROUP_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        name: action.payload.data.name,
        members: action.payload.data.member_entity_ids,
        policies: action.payload.data.policies,
      };

    case FETCH_GROUP_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        data: {},
        name: '',
        policies: [],
        members: [],
        error: action.payload
      };

    default:
      return state;
  }
}
