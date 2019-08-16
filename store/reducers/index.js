import { combineReducers } from 'redux';
import userReducer from './userReducer';
import networkReducer from './networkReducer';
import appConfigReducer from './appConfigReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  appConfig: appConfigReducer,
  network: networkReducer,
  user: userReducer,
  ui: uiReducer,
});

export default rootReducer;
