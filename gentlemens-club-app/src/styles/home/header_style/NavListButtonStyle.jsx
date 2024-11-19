import styled from "styled-components";

export const NavMenu = styled.div`
    margin-top: 0.5rem;
    height: 11rem;
    background-color: inherit;
    border-radius: 10px;
    position: absolute;
    top: 100%;
    z-index: 10;
    width: 100%;
    display: {({open}) => open : 'block' ? 'none' };
`;

export const NavMenuContainer = styled.div`
    position: relative;
    width: 100%;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

export const NavMenuButton = styled.button`
    border: none;
    border-radius: 20px;
    background: transparent;
    padding: 1rem;
    color: #B58934;
    font-family: 'Rye', sans-serif;
    display: flex;
    width: inherit;
    align-items: center;
    justify-content: center;
`;