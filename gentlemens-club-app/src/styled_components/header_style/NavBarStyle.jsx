import styled from "styled-components";

export const NavContainer = styled.div`
    background-color: #161718;
    @media only screen and (max-width: 850px) {
        position: fixed;
        transform: ${({open}) => open ? "translateX(0)" : "translateX(100%)"};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;  
        z-index: 2;
        transition: transform 0.2s ease-in-out;
        padding-top: 4rem;
        padding-left: 1em;
        padding-right: 1em;
        
    }
`; 

export const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 2.5rem;
    margin-top: 2em;
    padding: 0;
    flex-flow: row nowrap;
    @media only screen and (max-width: 850px) {
        flex-flow: column nowrap;
        justify-content: flex-end;
        background-color: #161718;
    } 
`; 

export const NavInputs = styled.div`
    display: grid;
    grid-template-columns: 3fr 3fr 3fr 2.3fr 0.5fr 0.5fr;
    grid-gap: 1em;
    @media only screen and (max-width: 850px) {
        grid-template-columns: 1fr;
    }
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    color: #ffffff;
`;