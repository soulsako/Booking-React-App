import React, { Fragment } from 'react';
import styled from 'styled-components';
import LogoImage from '../assets/rentalcars-logo.png';
import GBIcon from '../assets/gb-icon.png';
import { MdDehaze, MdClose } from 'react-icons/md';
import {Modal} from './Modal';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${props => props.borderBottom ? '1px solid #f7f7f7' : null};
  padding: 15px 30px 15px 10px;
`;

const Logo = styled.img.attrs({
  src: 'https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/header/logo_white.svg'
})`
display: block;
width: 100%;
`;

const LogoDiv = styled.div`
  width: 100px;
  height: 13.5px;
  margin-right: auto;
`;

const Image = styled.img`

  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const IconDiv = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  color: #fff;
  border-right: 1px solid #f8f8f8;

`;

const Text = styled.p`
  color: #fff;
`;

class Header extends React.Component {

  state = {  
    showNav: false
  }

  onToggleNavHandler = () => {
    this.setState({showNav: !this.state.showNav})
  }
  render() { 

    const { showNav } = this.state;
    const iconSyles = {marginLeft: '15px', cursor: 'pointer'}
    return (
      <Fragment>
         <Container borderBottom>
          <LogoDiv>
            <Logo src={LogoImage} />
          </LogoDiv>
          <IconDiv>
            GBP
            <Image src={GBIcon} />
          </IconDiv> 
          {showNav ? <MdClose size={30} color="#fff" style={iconSyles} onClick={this.onToggleNavHandler}/> : <MdDehaze size={30} color="#fff" style={iconSyles} onClick={this.onToggleNavHandler}/>}
         </Container>
         {showNav ? <Modal /> : null}
         {showNav ? null : <Container>
          <Text>Car Hire - Search, Compare & Save</Text>
         </Container>}
      </Fragment>  
    );
  }
}
 
export default Header;