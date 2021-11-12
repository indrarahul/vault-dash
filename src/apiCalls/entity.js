import axios from 'axios';
import {
    fetchEntitiesFailure,
    fetchEntitiesRequest,
    fetchEntitiesSuccess,
} from '../reduxStore/actions/entitiesActions';
import {
    fetchEntityByIdFailure,
    fetchEntityByIdRequest,
    fetchEntityByIdSuccess,
} from '../reduxStore/actions/entityByIdActions';

import {
    LIST_ENTITIES_URL,
    LIST_ENTITY_DETAIL_URL
} from './constants/index'

const vaultToken = process.env.REACT_APP_VAULT_TOKEN

export const fetchEntities = () => (dispatch) => {
    dispatch(fetchEntitiesRequest());
    return axios.get(LIST_ENTITIES_URL, {
        headers: {
            'X-Vault-Token': vaultToken
        }
    })
        .then(response => {
            const entities = response.data
            dispatch(fetchEntitiesSuccess(entities))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchEntitiesFailure(errorMsg))
        })
};

export const fetchEntityById = (id) => (dispatch) => {
    dispatch(fetchEntityByIdRequest());
    return axios.get(LIST_ENTITY_DETAIL_URL+id, {
        headers: {
            'X-Vault-Token': vaultToken
        }
    })
        .then(response => {
            const entityById = response.data
            dispatch(fetchEntityByIdSuccess(entityById))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchEntityByIdFailure(errorMsg))
        })
};