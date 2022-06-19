import React from 'react'
//import { NavLink } from 'react-router-dom';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLik, NewLogo } from './NavbarElements';
import { FaBars } from 'react-icons/fa';

let img = require('../../images/logo.jpeg');

const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const  Navbar = ({toggle}) => {
  return (
    <>
    <Nav>

        <NavbarContainer>

            {/* <NavLogo to ="home" smooth={true} duration={500} spy={true} >IIITH</NavLogo> */}
            <NewLogo src = {img} onClick={goToTop}   />

            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>

            <NavMenu>
                <NavItem>
                <NavLinks to = "about" smooth={true} duration={600} spy={true} exact = 'true'  offset={-80}>About</NavLinks>
                </NavItem>

                <NavItem>
                <NavLinks to = "discover" smooth={true} duration={600} spy={true} offset={-80}  >Discover</NavLinks>
                </NavItem>

                <NavItem>
                <NavLinks to = "people" smooth={true} duration={600} spy={true} offset={-80} >People</NavLinks>
                </NavItem>

                <NavItem>
                <NavLinks to = "subscribe" smooth={true} duration={600} spy={true} >Subscribe</NavLinks>
                </NavItem>
            </NavMenu>

            <NavBtn>

                <NavBtnLik to = "">Data Archive </NavBtnLik>
            </NavBtn>



        </NavbarContainer>



    </Nav>
    
    </>

    
  )
}

export default Navbar