import styled from "styled-components";

export const HeaderContainer = styled.header`
    margin: 0 auto;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 8fr;
    background-color: #161718;
    color: #B58934;
    font-family: Rye, sans-serif;
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: Rye, sans-serif;
    color: #b58934;
`;

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
    justify-content: center;
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