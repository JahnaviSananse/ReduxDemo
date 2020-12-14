import { createStore, combineReducers } from 'redux';
// import countReducer from '../reducers/countReducer';
import DemoReducer from '../redux/demo/demo.reducer';
const rootReducer = combineReducers(
    { demo: DemoReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;