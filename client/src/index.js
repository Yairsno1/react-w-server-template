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
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import Controller from './Controller';
import registerServiceWorker from './registerServiceWorker';

const intialState = {
  activity: {
    status: activityStatusEnum.next,
    qText: '',
  },
};

const store = createStore(rootReducer,
  intialState,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route
        path="/:route?"
        component={
          (props) => <Controller store={store} route={props.match.params.route}/>
        }
      />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

