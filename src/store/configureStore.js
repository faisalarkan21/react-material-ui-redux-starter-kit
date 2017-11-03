
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducers from '../reducers';


const logger = createLogger({
  // ...options
});


const configureStore = createStore(rootReducers, applyMiddleware(logger));


export default configureStore;
