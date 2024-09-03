import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: grid;
    grid-template-columns: 0.5fr 5fr;
    grid-gap: 1em;
    padding: 1em;
    max-width: 1200px; 
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    color: #ffffff;
`;

export const NavList = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 1em;
    margin-top: 3em;
    font-size: 14px;
    padding: 0;
`;

export const Link = styled.a`
    text-decoration: none;
    color: #b58934;
`;

export const LoginSignUp = styled.a`
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-size: 14px;
    color: #ffffff;
`;

export const NavInputs = styled.div`
    display: grid;
    grid-template-columns: 4fr 4fr 2fr 2fr 0.5fr 0.5fr;
    gap: 1em;
`;

export const Input = styled.input`
    border-radius: 5px;
    border: none;
    padding: 0.75em;
`;

export const Select = styled.select`
    border: none;
    background-color: #000000;
    color: #ffffff;
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
`;

export const Image = styled.img`
    width: 125px;
    height: 125px;
`;