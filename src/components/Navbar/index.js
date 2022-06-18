import React from 'react'
import { NavLink } from 'react-router-dom';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLik } from './NavbarElements';
import { FaBars } from 'react-icons/fa';

const  Navbar = ({toggle}) => {
  return (
    <>
    <Nav>

        <NavbarContainer>

            <NavLogo to ="/">HSRG</NavLogo>

            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>

            <NavMenu>
                <NavItem>
                <NavLinks to = "about">About</NavLinks>
                </NavItem>

                <NavItem>
                <NavLinks to = "discover">Discover</NavLinks>
                </NavItem>

                <NavItem>
                <NavLinks to = "services">Services</NavLinks>
                </NavItem>

                <NavItem>
                <NavLinks to = "signup">Sign up</NavLinks>
                </NavItem>
            </NavMenu>

            <NavBtn>

                <NavBtnLik to = "/signup">Sign In </NavBtnLik>
            </NavBtn>



        </NavbarContainer>



    </Nav>
    
    </>

    
  )
}

export default Navbar