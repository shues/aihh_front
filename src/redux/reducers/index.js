import { combineReducers } from 'redux';

import freands from './freands';
import app_ from './app_';

const rootReducer = combineReducers({ freands, app_ });

export default rootReducer;
