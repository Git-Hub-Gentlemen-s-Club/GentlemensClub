import styled from "styled-components";

export const HeaderContainer = styled.header`
    margin: 0 auto;
    /* display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #161718;
    width: 100%; */
    padding: 1rem;
    display: grid;
    /* align-items: center;
    justify-content: center; */
    grid-template-columns: 1fr 5fr;
    max-width: 75%;
    background-color: #161718;
    @media only screen and (max-width: 1166px) {
        height: 4rem;
        max-width: 100%;
    }
`;

/* export const HeaderWrapper = styled.div`
    display: grid;
    align-items: center;
    justify-content: center; 
    grid-template-columns: 1fr 5fr;
    padding: 1em;
    max-width: 75%;
    background-color: #161718;
`; */

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    @media only screen and (max-width: 1166px) {
        display: none;
    }
`;




/* export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    color: #ffffff;
    @media only screen and (max-width: 850px) {
        padding: 1em;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        background-color: #161718;
        z-index: 2;
    }
`; */

/* export const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 2.5rem;
    margin-top: 3em;
    font-size: 14px;
    padding: 0;
    flex-flow: row nowrap;
    @media only screen and (max-width: 850px) {
        flex-flow: column nowrap;
        justify-content: flex-end;
    } 
`; */

/* export const NavInputs = styled.div`
    display: grid;
    grid-template-columns: 3fr 3fr 2fr 2fr 0.5fr 0.5fr;
    grid-gap: 1em;
    @media only screen and (max-width: 850px) {
        grid-template-columns: 1fr;
    }
`; */

export const Link = styled.a`
    text-decoration: none;
    color: #b58934;
    font-size: 0.7rem;
    padding-bottom: 1rem;
    &:hover{
        cursor: pointer;
        color: #655026;
        border-bottom: 1px solid #B58934;
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

export const DarkModeInput = styled.input`
    background-color: transparent;
    border: none;
    height: 2.5rem;
    width: 100%;
    &:focus {
        outline: none;
    } 
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
    background-color: transparent;
    color: inherit;
`;

export const Options = styled.option`
    color: #000000;
`;