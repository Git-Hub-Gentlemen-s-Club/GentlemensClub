import styled from "styled-components";

export const Menu = styled.div`
    margin-top: 0.5rem;
    height: 11rem;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: 100%;
    z-index: 10;
    width: 100%;
    display: {({open}) => open : 'block' ? 'none' };
`;

export const MenuOpts = styled.menu`
    list-style-type: none;
    padding: 5px;
    color: black;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.75rem;
    
`;

export const MenuOpt = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const MenuButton = styled.button`
    border: none;
    background-color: white;
    border-radius: 20px;
    display: flex;
    width: inherit;
    align-items: center;
    justify-content: center;
    & img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
    }

    & p {
        margin-right: 5px;
        font-size: 1rem;
        width: max-content;
    }
`;

export const MenuContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
`;