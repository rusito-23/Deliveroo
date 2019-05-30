import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import history from '../history';

// reducers import
import userAuthReducer from './userAuthReducer';
import locationsReducer from './locationsReducer';
import registerReducer from './registerReducer';

export default combineReducers({
    router: connectRouter(history),
    userAuthReducer,
    locationsReducer,
    registerReducer,
});