import React, {useState} from 'react';
import {motion} from 'framer-motion';
import NavBar from '../NavBar';
import Sidebar from '../sidebar';
import {HeroContainer,HeroContent,HeroItems,HeroH1,HeroP,ButtonGroup,SignUp,SignIn} from './HeroElement';
const Hero = () => {
    const [isOpen,setisOpen]=useState(false);

    const toggle = () => {setisOpen(!isOpen)}
    return (
        <HeroContainer>
            <NavBar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>
                        Let the taste speak..
                    </HeroH1>
                    <HeroP>Greatest Pizza Ever,Ready in 60 seconds</HeroP>
                    <ButtonGroup>
                        <SignUp to='/SignUp'>Sign Up</SignUp>
                        <SignIn to='/login'>Sign In</SignIn>
                    </ButtonGroup>
                </HeroItems>
                
            </HeroContent>
                
        </HeroContainer>
    )
}

export default Hero
