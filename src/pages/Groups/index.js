import React, { useEffect, useState } from 'react'
import Header from '../../components/common/Header'
import { connect } from 'react-redux';
import { fetchGroups } from '../../apiCalls/group';
import GroupById from '../../components/core/GroupById';
import './style.scss'

function Groups({ groupsData, fetchGroups, }) {

    const [groupId, setGroupId] = useState('');
    let groupKeyList = []
    let groupsDetailsList = []

    useEffect(() => {
        fetchGroups()
    }, [fetchGroups])

    const changeGroupId = (groupId) => {
        setGroupId(groupId)
    }

    if (groupsData.keys) {
        groupKeyList = groupsData.keys
    }

    for (const key in groupKeyList) {
        if (groupsData.data && groupsData.data.data && groupsData.data.data.key_info) {
            if (groupsData.data.data.key_info[groupKeyList[key]]) {
                let groupDetails = {
                    name: groupsData.data.data.key_info[groupKeyList[key]].name,
                    key: groupKeyList[key]
                }
                groupsDetailsList.push(groupDetails)
            }
        }
    }

    return (
        <div className="mainContainer">
            <div className="mainContainer__headerContainer">
                <Header />
            </div>

            <div className="mainContainer__container">
                <div className="mainContainer__groupListContainer">
                    {groupsData.loading ? (
                        <h1>Loading</h1>
                    ) : groupsData.error ? (
                        <h2>{groupsData.error}</h2>
                    ) : (
                        <div>
                            {groupsDetailsList && groupsDetailsList.map(detail =>
                                <h1 className="mainContainer__groupNames" style={{ cursor: 'pointer' }} onClick={() =>
                                    changeGroupId(detail.key)}
                                    key={detail.name}>{detail.name}</h1>)}
                        </div>
                    )}
                </div>

                <div className="mainContainer__groupDetailsContainer">
                    {groupId && <GroupById groupId={groupId} />}
                </div>

            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        groupsData: state.GroupsReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGroups: () => dispatch(fetchGroups()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
