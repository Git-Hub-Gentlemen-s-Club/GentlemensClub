import styled from "styled-components";

export const Head = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    background-color: #000000;
    
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    color: #ffffff;
`;

export const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 1em;
    color: #b58934;
`;

export const NavInputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1em;
`;

export const Body = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    max-width: 800px;
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
`;