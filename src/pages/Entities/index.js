import React, { useEffect, useState } from 'react'
import Header from '../../components/common/Header'
import { connect } from 'react-redux';
import { fetchEntities } from '../../apiCalls/entity';
import './style.scss'
import EntityById from '../../components/core/EntityById';

function Entities({ entitiesData, fetchEntities, }) {

    const [entityId, setEntityId] = useState('');
    let entityKeyList = []
    let entitiesDetailsList = []

    useEffect(() => {
        fetchEntities()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const changeEntityId = (entityId) => {
        setEntityId(entityId)
    }

    if (entitiesData.keys) {
        entityKeyList = entitiesData.keys
    }

    for (const key in entityKeyList) {
        if (entitiesData.data && entitiesData.data.data && entitiesData.data.data.key_info) {
            if (entitiesData.data.data.key_info[entityKeyList[key]]) {
                if (entitiesData.data.data.key_info[entityKeyList[key]].aliases) {
                    let entityDetails = {
                        name: entitiesData.data.data.key_info[entityKeyList[key]].aliases[0].name,
                        key: entityKeyList[key]
                    }
                    entitiesDetailsList.push(entityDetails)
                }
            }
        }
    }
    console.log(entityId)
    return (
        <div className="mainContainer">
            <div className="mainContainer__headerContainer">
                <Header />
            </div>

            <div className="mainContainer__container">
                <div className="mainContainer__entityListContainer">
                    {entitiesData.loading ? (
                        <h1>Loading</h1>
                    ) : entitiesData.error ? (
                        <h2>{entitiesData.error}</h2>
                    ) : (
                        <div>
                            {entitiesDetailsList && entitiesDetailsList.map(detail =>
                                <h1 className="mainContainer__entityNames" style={{ cursor: 'pointer' }} onClick={() =>
                                    changeEntityId(detail.key)}
                                    key={detail.name}>{detail.name}</h1>)}
                        </div>
                    )}
                </div>

                <div className="mainContainer__entityDetailsContainer">
                    {entityId && <EntityById entityId={entityId} />}
                </div>

            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        entitiesData: state.EntitiesReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEntities: () => dispatch(fetchEntities()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Entities);
