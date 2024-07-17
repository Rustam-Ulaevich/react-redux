import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

const defaultState = {
  cash: 5
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'ADD-CASH':
      return {...state, cash: state.cash + action.payload}

    case 'GET-CASH':
      return {...state, cash: state.cash - action.payload}
    
    default: return state
  }
}

const store = createStore(reducer)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
