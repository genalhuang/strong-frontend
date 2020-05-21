import React, {Component} from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List, Avatar  } from 'antd';
import store from './store/index'
import {getInputChangeAction, getInitList} from "./store/actionCreators";
import { ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionType'


class TodoList extends Component{
  constructor(props) {
    super(props);
    this.state = {}
    this.state = store.getState();
    store.subscribe(this.handleStoreChange.bind(this));
  }
  render() {
    return (
        <div style={{marginTop: '10px',textAlign:'center'}}>
          <div>Hello world</div>
          <Input placeholder="Basic usage" value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} style={{width: '300px'}}/>
          <Button type='primary' onClick={this.handleButtonClick.bind(this)}>提交</Button>
          <List
              style={{width: '300px',marginLeft: '20px',margin: '0 auto'}}
              itemLayout="horizontal"
              dataSource={this.state.list}
              renderItem={(item, index) => (
                  <List.Item onClick={this.handleItemClick.bind(this, index)}>
                    <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                  </List.Item>
              )}
          />
        </div>
    )
  }
  componentDidMount() {
    // const action = getTodoList()
    // console.log(action)
    // store.dispatch(action)

    const action = getInitList()
    store.dispatch(action)
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleButtonClick(e) {
    const action = {
      type: ADD_TODO_ITEM,
      value: this.state.inputValue
    };
    store.dispatch(action)
  }
  handleItemClick(index) {
    const action = {
      type: DELETE_TODO_ITEM,
      index
    }
    store.dispatch(action)
    console.log(index)
  }
}
export default TodoList;
