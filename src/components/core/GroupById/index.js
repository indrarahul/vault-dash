import React, { useEffect } from 'react'

import ListBox from '../ListBox';
import { connect } from 'react-redux';
import { fetchGroupById } from '../../../apiCalls/group';
import { fetchEntities } from '../../../apiCalls/entity';
import './style.scss'

function GroupById({ groupId, groupByIdData, fetchGroupById, entitiesData, fetchEntities }) {

    let entityKeyList = []
    let entityNamesList = []


    useEffect(() => {
        fetchEntities()
        fetchGroupById(groupId)
    }, [fetchGroupById, fetchEntities, groupId])

    if (groupByIdData.members) {
        entityKeyList = groupByIdData.members

        for (const key in entityKeyList) {
            if (entitiesData.data && entitiesData.data.data && entitiesData.data.data.key_info) {
                if (entitiesData.data.data.key_info[entityKeyList[key]]) {
                    if (entitiesData.data.data.key_info[entityKeyList[key]].aliases) {
                        entitiesData.data.data.key_info[entityKeyList[key]].aliases.map(alias => {
                            let entityType = alias.mount_type
                            let entityName = ''
                            if (entityType === 'ldap') {
                                entityName = alias.name
                            } else if (entityType === 'approle') {
                                entityName = alias.name
                                // TO BE IMPLEMENTED
                            }
                            return entityNamesList.push(entityName)
                        })
                    }
                }
            }
        }

    }

    return (
        <div className="container">
            {groupByIdData.loading ? (
                <h1>Loading</h1>
            ) : groupByIdData.error ? (
                <h2>{groupByIdData.error}</h2>
            ) : (
                <div className="container__box">
                    <h1 className="container__groupText">{groupByIdData.name}</h1>

                    <div className="container__details">
                        <div className="container__policies">
                            <p className="container__polText">Policies</p>
                            {groupByIdData.policies &&
                                groupByIdData.policies.map(policy =>
                                    <ListBox key={policy} name={policy} />)}
                        </div>

                        <div className="container__members">
                            <p className="container__memText">Members</p>
                            {entityNamesList &&
                                entityNamesList.map(member =>
                                    <ListBox key={member} type={"member"} name={member} />)}
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        groupByIdData: state.GroupByIdReducer,
        entitiesData: state.EntitiesReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGroupById: (id) => dispatch(fetchGroupById(id)),
        fetchEntities: () => dispatch(fetchEntities()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupById);
