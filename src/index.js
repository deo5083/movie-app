import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from "redux";
import reducer from './reducers/index'
import thunk from 'redux-thunk';


ReactDOM.render(
  <Provider store={createStore(reducer, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
