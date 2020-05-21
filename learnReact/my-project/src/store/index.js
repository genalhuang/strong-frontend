import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import TodoSaga from './saga'

const sagaMiddleWare = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    // applyMiddleware(thunk),
    applyMiddleware(sagaMiddleWare),
);
const store = createStore(reducer,enhancer);
sagaMiddleWare.run(TodoSaga)
export default store;
