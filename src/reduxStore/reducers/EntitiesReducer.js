import {
    FETCH_ENTITIES_REQUEST,
    FETCH_ENTITIES_SUCCESS,
    FETCH_ENTITIES_FAILURE,
  } from '../constants/entitiesTypes';
  
  const initialState = {
    loading: false,
    data: {},
    keys: [],
    error: ''
  };
  
  export default function EntitiesReducer(state = initialState, action) {
    switch (action.type) {
  
      case FETCH_ENTITIES_REQUEST:
        return {
          ...state,
          loading: true
        };
  
      case FETCH_ENTITIES_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          keys: action.payload.data.keys,
        };
  
      case FETCH_ENTITIES_FAILURE:
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
  