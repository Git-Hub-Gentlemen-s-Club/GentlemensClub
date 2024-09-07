import styled from "styled-components";

export const HeaderContainer = styled.header`
    margin:auto;
    display: flex;
    flex-direction: row;
    background-color: #161718;
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    color: #ffffff;
`;

export const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 2.5rem;
    margin-top: 3em;
    font-size: 14px;
    padding: 0;
`;

export const Link = styled.a`
    text-decoration: none;
    color: #b58934;
    &:hover{
        cursor:pointer;
        color: #655026;
        text-decoration:underline;
    }
`;

export const LoginSignUp = styled.a`
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-size: 14px;
    color: #ffffff;
    &:hover {
        cursor: pointer;
        color: #dddddd;
        text-decoration: underline;
    }
`;

export const LoginWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    padding: 3px;
`;

export const NavInputs = styled.div`
    display: grid;
    grid-template-columns: 3fr 3fr 2fr 2fr 0.5fr 0.5fr;
    grid-gap: 1em;
`;

export const Input = styled.input`
    background-color: transparent;
    border: none;
    height: 2.5rem;
    width: 100%;
    margin-left: 1em;
    &:focus {
        outline: none;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: #ffffff;
    width: 100%;
    border-radius: 5px;
    padding: 3px;
`;

export const Select = styled.select`
    border: none;
    background-color: #000000;
    color: #ffffff;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    flex-direction: column;
    max-width: 1200px;
    background-color: #161718;
    position: relative;
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    width: 125px;
    height: 125px;
`;