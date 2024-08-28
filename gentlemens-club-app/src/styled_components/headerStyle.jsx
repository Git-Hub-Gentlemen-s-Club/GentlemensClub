import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-gap: 1em;
    padding: 1em;
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
    padding: 0;
`;

export const Link = styled.a`
    text-decoration: none;
    color: #b58934;
`;

export const LoginSignUp = styled.a`
    text-decoration: none;
    color: #ffffff;
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
    padding: 1em;
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
`;