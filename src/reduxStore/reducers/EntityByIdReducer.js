import {
    FETCH_ENTITY_BY_ID_FAILURE,
    FETCH_ENTITY_BY_ID_SUCCESS,
    FETCH_ENTITY_BY_ID_REQUEST
  } from '../constants/entityByIdTypes';
  
  const initialState = {
    loading: false,
    data: {},
    name: '',
    policies: [],
    groups: [],
    type: '',
    error: ''
  };
  
  export default function EntityByIdReducer(state = initialState, action) {
    switch (action.type) {
  
      case FETCH_ENTITY_BY_ID_REQUEST:
        return {
          ...state,
          loading: true
        };
  
      case FETCH_ENTITY_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          name: action.payload.data.aliases[0].name,
          type: action.payload.data.aliases[0].mount_type,
          groups: action.payload.data.group_ids,
          policies: action.payload.data.policies,
        };
  
      case FETCH_ENTITY_BY_ID_FAILURE:
        return {
          ...state,
          loading: false,
          data: {},
          name: '',
          type: '',
          policies: [],
          groups: [],
          aliases: [],
          error: action.payload
        };
  
      default:
        return state;
    }
  }
  