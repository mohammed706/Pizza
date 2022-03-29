import React from 'react'
import { Nav , NavIcon, NavLink , Bars } from './NavBarElement'

const NavBar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Pizzaro</NavLink>
                <NavIcon onClick = {toggle}>
                    {/* <p>Menu</p> */}
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default NavBar
