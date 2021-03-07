import React, {Component} from 'react'


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this)
  }

  handleInputChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleInputKeyUp(e) {
    const value = this.state.value
    if(e.keyCode === 13 && value) {
      this.props.addUndoItem(value);
    }
  }

  render() {
    const {value} = this.state;

    return (
      <div>
        <input  data-test='input' value={value} onChange={this.handleInputChange} onKeyUp={this.handleInputKeyUp}></input>
      </div>
    )
  }
}

export default Header;
