import React, {Component} from 'react';
import store from './store/index'
class MyComponent extends Component{
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange.bind(this));
  }
  render() {
    return (
        <div>{this.state.inputValue}</div>
    )
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
}

export default  MyComponent
