import { combineReducers } from 'redux';
// import userReducer from '../Actions/Reducer';
import authReducer from '../Reducer/RegisterReducer';

const rootReducer = combineReducers({
//   user: userReducer,
  auth: authReducer,
});

export default rootReducer;
