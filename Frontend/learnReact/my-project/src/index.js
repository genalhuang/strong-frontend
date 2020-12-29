import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import MyComponent from './MyComponent'
ReactDOM.render(
  // <React.StrictMode>
  <div>
    <TodoList />
    <MyComponent />
  </div>,
  // </React.StrictMode>,
  document.getElementById('root')
);

