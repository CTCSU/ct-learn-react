import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import {
  createLogger
} from 'redux-logger'
import toDoApp from './modules/toDoApp'

const loggerMiddleWare = createLogger();

const createStoreWithMiddleware = applyMiddleware(loggerMiddleWare)(createStore);

const reducer = combineReducers({
  toDoApp
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);

export default configureStore;