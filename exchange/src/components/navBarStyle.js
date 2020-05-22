import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../imgs/logo.svg'

export const UL = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const BTN = styled.button`
    border-width: 0;
`;

export const A = styled.a`
    text-decoration: none;
`;

export const Navbar = styled.nav`
    height: 3.5vw;
    width: 100vw;
    background: linear-gradient( 30deg,
        rgb(${(props) => (255 * Math.sin(props.color / 40))},
            ${(props) => (Math.pow(props.color - 127, 2) * -180 / (127*127) + 254) }, 
            ${(props) => (Math.pow(props.color - 127, 2) * 254 / (127*127)) }),
        rgb(${(props) => (255 * Math.cos(props.color / 40))},
            ${(props) => (Math.pow(props.color - 100, 2) * 50 / (100*100)) }, 
            ${(props) => (Math.pow(props.color - 100, 2) * -100 / (100*100) + 200) })
    );
    position: absolute;
    top: 0;
    left: 0;
`;

export const LI = styled.li`
    height: 3.5vw;
    width: 3.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IconBtn = styled(A)`
    width: 3vw;
    height: 3vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1vw;
    &:hover{
        cursor: pointer;
        background: ${(props) => props.name==="user" ? `rgba(255,255,255,0)` : 
        `rgba(255,255,255,0.6)`};
    }
`;

export const Dropdown = styled.div`
    position: absolute;
    top: 3.5vw;
    left: 0;
    width: 10vw;
    background-color:rgb(
        ${(props) => (255 * Math.sin(props.color / 40))},
        ${(props) => (Math.pow(props.color - 127, 2) * -180 / (127*127) + 254) }, 
        ${(props) => (Math.pow(props.color - 127, 2) * 254 / (127*127)) });
    border-top: 1px black solid;
    padding: 0;
    overflow: hidden;
    z-index: 1;
`;

export const MenuItem = styled(BTN)`
    height: 3vw;
    width: 10vw;
    display: flex;
    align-items: center;
    border-radius: 0;
    transition: background var(--speed);
    padding: 0.3rem;
    font-size: 1vw;
    font-weight: 500;
    background: rgba(10, 160, 219, 0);
    border-width: 0;
    
    &:link{
        color: black;
        text-decoration: none;
    }
    &:hover{
        color: black;
        text-decoration: none;
        background-color: lightgrey;
    }
`;


export const MenuIcon=styled(LI)`
    display: flex;
    position: absolute;
    top: 0;
    left: ${(props) => (props.name==='menu' ? '0' : props.name==='user' ? '3vw' : '')};
    right: ${(props) => (props.name==='aler' ? '0' : '')};
    
`;

export const Logo = styled(LogoIcon)`
    height: 3.5vw;
    width: 12vw;
    position: absolute;
    top: 0;
    left: 44vw;
    display: flex;
`;

export const UsernameOnBar = styled.div`
    width: 15vw;
    height: 3.5vw;
    position: absolute;
    left: 3.5vw;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 1.1vw;
    text-align: left;
`;
