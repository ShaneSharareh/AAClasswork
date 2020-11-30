import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import {receiveTodos, receiveTodo} from './actions/todo_actions'
import App from './components/app'
import Root from './components/root'
import {allTodos} from './reducers/selectors'
document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false,
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true,
    },
  };
  const store = configureStore(preloadedState);
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  //use this to test out allTodos: allTodos(store.getState())
  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
})


