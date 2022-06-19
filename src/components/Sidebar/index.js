 import React from 'react'
 import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const  Sidebar = ({open, toggle}) =>  {
  return (
    <SidebarContainer open = {open} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>

        <SidebarWrapper>
            <SidebarMenu>

                <SidebarLink to = 'about'
                smooth={true} duration={500} spy={true} exact = 'true'  offset={-80}
                onClick={toggle}
                >
                    About
                </SidebarLink>

                <SidebarLink to = 'discover' onClick={toggle}
                smooth={true} duration={500} spy={true} exact = 'true'  offset={-80}
                
                >
                    Discover
                </SidebarLink>

                <SidebarLink to = 'people' onClick={toggle}
                smooth={true} duration={500} spy={true} exact = 'true'  offset={-80}
                >
                    People
                </SidebarLink>

                <SidebarLink to = 'subscribe' onClick={toggle}
                smooth={true} duration={500} spy={true} exact = 'true'  offset={-80}
                
                >
                    Subscribe
                </SidebarLink>

            </SidebarMenu>

            <SideBtnWrap>
                <SidebarRoute to = '/signin'> Sign In </SidebarRoute>
            </SideBtnWrap>

        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar