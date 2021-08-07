import React from 'react'
import {SidebarContainer,CloseIcon,Icon,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './sidebarElement';
const Sidebar = ({toggle , isOpen}) => {
    return (
        <SidebarContainer isOpen ={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'>Pizzas</SidebarLink>
                <SidebarLink to='/'>Desserts</SidebarLink>
                <SidebarLink to='/'>Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
