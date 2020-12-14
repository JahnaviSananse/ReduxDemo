import {combineReducers} from 'redux';
import demoReducer from './demo/demo.reducer';

export default combineReducers({
    demo:demoReducer,
});