import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = () => {
    return createStore(rootReducer);// WHY IS THIS THE WAY IT IS?!
}
export default configureStore;