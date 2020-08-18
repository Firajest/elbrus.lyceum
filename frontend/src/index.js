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
import thunk from 'redux-thunk';

// const store = createStore(
//   combineReducers({
//     data: dataReducer,
//     userInfo: userReducer,
//   }),
//   composeWithDevTools(applyMiddleware(thunk)),
// )
const store = createStore(
  dataReducer,
  // persistedState,
  composeWithDevTools(applyMiddleware(thunk)),
)

store.subscribe(() => {
  const state = store.getState();
  window.localStorage.setItem('state', JSON.stringify(state));
});
// store.subscribe(() => {
//   saveState({
//     state: store.getState().userState
//   });
// });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
