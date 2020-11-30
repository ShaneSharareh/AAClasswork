import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer,preloadedState);// WHY IS THIS THE WAY IT IS?!
}
export default configureStore;


