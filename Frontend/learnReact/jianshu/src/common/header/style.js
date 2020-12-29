import styled from 'styled-components'
import logo from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  display: block;
  background: url(${logo});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  font-size: 17px;
  line-height: 56px;
  float:left;
  padding: 0 15px;
  color: #333;
  &:nth-child(3) {
   float: right;
  }
  &:nth-child(2) {
   float: right;
  }
  &:nth-child(1) {
   color: #ea6f5a;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 20px;
  margin: 9px 0 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 15px;
  &::placeholder {
    color: #999;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin: 9px 20px 0 0;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  padding: 0 20px;
  &:nth-child(1) { 
    color: #ec6149;
  }
  &:nth-child(2){
    color: #fff;
    background: #ec6149;
   }
`;
