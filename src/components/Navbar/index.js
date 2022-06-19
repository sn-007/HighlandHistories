import React from 'react'
//import { NavLink } from 'react-router-dom';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLik } from './NavbarElements';
import { FaBars } from 'react-icons/fa';

const  Navbar = ({toggle}) => {
  return (
    <>
    <Nav>

        <NavbarContainer>

            <NavLogo to ="home" smooth={true} duration={500} spy={true} >IIITH</NavLogo>

            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>

            <NavMenu>
                <NavItem>
                <NavLinks to = "about" smooth={true} duration={500} spy={true} exact = 'true'  offset={-80}>About</NavLinks>
                </NavItem>

                <NavItem>
                <NavLinks to = "discover" smooth={true} duration={500} spy={true} offset={-80}  >Discover</NavLinks>
                </NavItem>

                <NavItem>
                <NavLinks to = "people" smooth={true} duration={500} spy={true} offset={-80} >People</NavLinks>
                </NavItem>

                <NavItem>
                <NavLinks to = "subscribe" smooth={true} duration={500} spy={true} >Subscribe</NavLinks>
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