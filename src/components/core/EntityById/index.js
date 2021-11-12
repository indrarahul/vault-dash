import React, { useEffect } from 'react'

import ListBox from '../ListBox';
import { connect } from 'react-redux';
import { fetchGroupById, fetchGroupsByIds } from '../../../apiCalls/group';
import { fetchEntityById } from '../../../apiCalls/entity';
import './style.scss'

function EntityById({ entityId, groupsByIdsData, entityByIdData, fetchGroupsByIds, fetchEntityById }) {

    let groupNames = []

    useEffect(() => {
        fetchEntityById(entityId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [entityId,])


    return (
        <div className="container">
            {entityByIdData.loading ? (
                <h1>Loading</h1>
            ) : entityByIdData.error ? (
                <h2>{entityByIdData.error}</h2>
            ) : (
                <div className="container__box">
                    {entityByIdData && entityByIdData.name && entityByIdData.type &&
                        <h1 className="container__groupText">
                            {entityByIdData.name} : {entityByIdData.type}
                        </h1>}

                    <div className="container__details">
                        <div className="container__policies">
                            <p className="container__polText">Policies</p>
                            {groupNames &&
                                groupNames.map(name =>
                                    <ListBox key={name} name={name} />)}
                        </div>

                        <div className="container__members">
                            <p className="container__memText">Groups</p>
                            {/* {groupNamesList &&
                                groupNamesList.map(groups =>
                                    <ListBox key={groups} type={"groups"} name={groups} />)} */}
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
        groupsByIdsData: state.GroupsByIdsReducer,
        entityByIdData: state.EntityByIdReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGroupById: (id) => dispatch(fetchGroupById(id)),
        fetchGroupsByIds: (idList) => dispatch(fetchGroupsByIds(idList)),
        fetchEntityById: (id) => dispatch(fetchEntityById(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EntityById);
