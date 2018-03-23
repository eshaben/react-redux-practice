import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//set initial state before the reducer
const initialState = {
  count: 0
}

//this tells Redux what our state looks like
function reducer(state = initialState, action) {
//actions require the type property, for this example
//the types are "INCREMENT" and "DECREMENT"
  switch(action.type){
    case 'INCREMENT':
      return {
        //note: state.count++ mutates the state DON'T DO IT!
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

//creates the store and passes in the reducer
const store = createStore(reducer);


//provider component is redux magic
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App;
