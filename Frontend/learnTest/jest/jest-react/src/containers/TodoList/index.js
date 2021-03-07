import React, {Component} from 'react'
import Header from './components/Header'
import './style.css'

class TodoList extends Component {
  render() {
    return (
    <div className='todo-list'>
      <Header></Header>
    </div>
    )
  }
}

export default TodoList;
