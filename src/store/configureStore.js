
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';


const logger = createLogger({
  // ...options
});


const configureStore = createStore(rootReducers, applyMiddleware(logger, thunk));


export default configureStore;
