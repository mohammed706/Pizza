import styled from 'styled-components';
import Image from '../../images/product6.jpg';
export const SignContainer = styled.div`
    background: linear-gradient(to right , rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)), 
    url(${Image});
    height: 100vh;
    background-position:center;
    background-size: cover;

`;
export const SignWrapper = styled.div`
    display : flex ; 
    flex-wrap : wrap ;
    justify-content: center;
    margin: 0 auto;
    
`;
export const SignHeader = styled.h1`
    font-size : clamp(2rem , 2.5vw , 3rem);
    text-align : center;
    margin-top: 20px;
    /* margin-bottom : 5rem ; */
    color:#fff;
`;

export const SignCard = styled.div`
    margin:auto;
    margin-top: 25px;
    background-color: #f9f9f9;
    border-radius: 9px;
    line-height: 2;
    width : 300px;
`;
export const SignIcon =styled.div`
    padding-left: 50px;
    padding-top:30px;
    
`;