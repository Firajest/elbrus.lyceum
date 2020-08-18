import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import dataReducer from './redux/reducers/IndexReducer';
import userReducer from './redux/reducers/userReducer';
import modalReducer from './redux/reducers/modalsReducer';
import thunk from 'redux-thunk';
import {loadState, saveState} from './localStorage/localStorageMethods'

const persistedState = loadState();

const store = createStore(
  combineReducers({
    data: dataReducer,
    userInfo: userReducer,
    modalFlags: modalReducer,
  }),
  persistedState,
  composeWithDevTools(applyMiddleware(thunk)),
)
store.subscribe(() => {
  saveState({
    userInfo: store.getState().userInfo,
    data: store.getState().data
  });
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
