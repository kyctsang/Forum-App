import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './forum'
import createSagaMiddleWare from 'redux-saga'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import allReducers from './redux/reducers'
import rootSaga from './redux/sagas'

const sagaMiddleWare = createSagaMiddleWare()

const myStore = createStore(
  allReducers,
  compose(
  applyMiddleware(
    sagaMiddleWare  ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))

sagaMiddleWare.run(rootSaga)

ReactDOM.render(
  <Provider store={myStore}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
