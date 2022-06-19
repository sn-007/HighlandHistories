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

                <SidebarLink to = 'about' onClick={toggle}>
                    About
                </SidebarLink>

                <SidebarLink to = 'discover' onClick={toggle}>
                    Discover
                </SidebarLink>

                <SidebarLink to = 'people' onClick={toggle}>
                    People
                </SidebarLink>

                <SidebarLink to = 'signup' onClick={toggle}>
                    Sign up
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