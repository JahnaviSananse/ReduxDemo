import { createStore, combineReducers } from 'redux';

import rootReducer from '../redux/root-reducer';

const store = () => {

return createStore(rootReducer);

}

export default store;


