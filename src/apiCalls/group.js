import axios from 'axios';
import {
    fetchGroupsFailure,
    fetchGroupsRequest,
    fetchGroupsSuccess,
} from '../reduxStore/actions/groupsActions';
import {
    fetchGroupByIdFailure,
    fetchGroupByIdRequest,
    fetchGroupByIdSuccess,
} from '../reduxStore/actions/groupByIdActions';
import {
    fetchGroupsByIdsRequest,
    fetchGroupsByIdsSuccess,
    fetchGroupsByIdsFailure,
} from '../reduxStore/actions/groupsByIdsActions';

import {
    LIST_GROUPS_URL,
    LIST_GROUP_DETAIL_URL
} from './constants/index'

const vaultToken = process.env.REACT_APP_VAULT_TOKEN

export const fetchGroups = () => async (dispatch) => {
    dispatch(fetchGroupsRequest());
    try {
        const response = await axios.get(LIST_GROUPS_URL, {
            headers: {
                'X-Vault-Token': vaultToken
            }
        });
        const groupsData = response.data;
        dispatch(fetchGroupsSuccess(groupsData));
    } catch (error) {
        const errorMsg = error.message;
        dispatch(fetchGroupsFailure(errorMsg));
    }
};

export const fetchGroupById = (id) => (dispatch) => {
    dispatch(fetchGroupByIdRequest());
    axios.get(LIST_GROUP_DETAIL_URL + id, {
        headers: {
            'X-Vault-Token': vaultToken
        }
    })
        .then(response => {
            const groupByIdData = response.data
            dispatch(fetchGroupByIdSuccess(groupByIdData))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchGroupByIdFailure(errorMsg))
        })
};

export const fetchGroupsByIds = (idList) => (dispatch) => {

    let groupDetails = []
    dispatch(fetchGroupsByIdsRequest());

    idList.forEach(id => {
       axios.get(LIST_GROUP_DETAIL_URL + id, {
            headers: {
                'X-Vault-Token': vaultToken
            }
        })
            .then(response => {
                const groupByIdData = response.data
                if (groupByIdData) {
                    groupDetails.push({
                        name: groupByIdData.data.name,
                        policies: groupByIdData.data.policies
                    })
                }
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchGroupsByIdsFailure(errorMsg))
            })
    });

    dispatch(fetchGroupsByIdsSuccess(groupDetails))

}