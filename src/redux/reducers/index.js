import getFeedReducer from './getFeedReducer';
import {combineReducers} from 'redux';

const appReducer = combineReducers({
  GetFeedReducer: getFeedReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
