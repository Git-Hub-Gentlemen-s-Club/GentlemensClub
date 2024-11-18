import styled from "styled-components";

export const NavContainer = styled.div`
    background-color: #161718;
    max-width: 100%;
`; 

export const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 2.5rem;
    margin-top: 2em;
    padding: 0;
    flex-flow: row nowrap;
    font-family: Rye;
`; 

export const NavInputs = styled.div`
    display: grid;
    grid-template-columns: 3fr 3fr 3fr 2fr 1.5fr 0.5fr;
    grid-gap: 1em;
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    color: #ffffff;
`;