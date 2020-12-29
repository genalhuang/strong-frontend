import React, {Component} from 'react';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch,Addition, Button} from './style'
class Header extends Component {
  render() {
    return (
        <HeaderWrapper>
          <Logo href={'/'}/>
          <Nav>
            <NavItem>首页</NavItem>
            <NavItem>下载App</NavItem>
            <NavItem>登录</NavItem>
            <NavItem>Aa</NavItem>
            <NavSearch></NavSearch>
          </Nav>
          <Addition>
            <Button>注册</Button>
            <Button>写文章</Button>
          </Addition>
        </HeaderWrapper>
    )
  }
}

export default Header;
