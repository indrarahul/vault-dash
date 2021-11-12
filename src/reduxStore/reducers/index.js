import { combineReducers } from 'redux';

import GroupsReducer from './GroupsReducer';
import GroupByIdReducer from './GroupByIdReducer';
import GroupsByIdsReducer from './GroupsByIdsReducer';
import EntitiesReducer from './EntitiesReducer';
import EntityByIdReducer from './EntityByIdReducer';

const rootReducer = combineReducers({
    GroupsReducer,
    GroupByIdReducer,
    GroupsByIdsReducer,
    EntitiesReducer,
    EntityByIdReducer,
});

export default rootReducer;
