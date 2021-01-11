import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import { rootSaga } from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, sagaMiddleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
sagaMiddleware.run(rootSaga);
