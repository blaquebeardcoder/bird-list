import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import birdApp from './store/birds/Birds';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(birdApp, composeWithDevTools());

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//provider connects the store to the application