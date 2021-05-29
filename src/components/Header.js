import React,{useState} from 'react';
import styled from 'styled-components'
import logo from './images/logo.svg'
import MenuIcon from '@material-ui/icons/Menu';
import Fade from 'react-reveal/Fade';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
function Header(){

  const [burgerStatus,setBurgerStatus]=useState(true);
  const cars = ["#S","#X","#Y","#3"];
  return(<Container>
        <a>
        <img src={logo} />
        </a>
        <Menu>
        {cars && cars.map((car,index)=>
          <a key={index} href={car}>Model {car[1]}</a>
        )}
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla-Account</a>
          <CustomMenu onClick={()=>setBurgerStatus(false)}/>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={()=>setBurgerStatus(true)}/>
          </CloseWrapper>
          {cars && cars.map((car,index)=>
            <li key={index}><a key={index} href={car}>Model {car[1]}</a></li>
          )}
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-in</a>
          </li>
          <li>
            <a href="#">Cyber truck</a>
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
          <li>
            <a href="#">Semi</a>
          </li>
          <li>
            <a href="#">Power</a>
          </li>
          <li>
            <a href="#">Buy Now</a>
          </li>
          <li>
            <a href="#">Our Offers</a>
          </li>
        </BurgerNav>
    </Container>)

}

export default Header;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top:0;
  left:0;
  right: 0;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex:1;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
  @media(max-width: 768px){
    display:none;
  }
`
const RightMenu = styled.div`
display: flex;
align-items: center;
a{
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 10px;
}
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  transform: ${props=> props.show? 'translateX(100%)':'translateX(0%)'};
  transition: transform 0.4s;
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }
  a{
    font-weight: 600;
  }
`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;

`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
