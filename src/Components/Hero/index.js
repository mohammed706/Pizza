import React, {useState} from 'react';
import NavBar from '../NavBar';
import Sidebar from '../sidebar';
import {HeroContainer,HeroContent,HeroItems,HeroH1,HeroP,HeroBtn} from './HeroElement';
const Hero = () => {
    const [isOpen,setisOpen]=useState(false);

    const toggle = () => {setisOpen(!isOpen)}
    return (
        <HeroContainer>
            <NavBar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Let the taste speak..</HeroH1>
                    <HeroP>Greatest Pizza Ever,Ready in 60 seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
