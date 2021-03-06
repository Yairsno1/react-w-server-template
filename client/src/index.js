import './css/w3v4.css';
import './css/custom.css';
import './index.css';
import activityStatusEnum from './view/activityArea/activityStatusEnum';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Controller from './Controller';
import registerServiceWorker from './registerServiceWorker';

const intialState = {
  activity: {
    status: activityStatusEnum.next,
    qText: '',
  },
  error: {
    isError: false,
    visible: true,
    message: '',
    text: '',
  }
};

const store = createStore(rootReducer,
  intialState,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
));

ReactDOM.render(
  <Provider store={store}>
    <Controller store={store}/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

