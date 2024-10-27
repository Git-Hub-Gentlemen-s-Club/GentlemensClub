import styled from "styled-components";

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.75);
    z-index: 100;
`;

export const WhenFilter = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    border-radius: 5px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
`;

export const Schedule = styled.button`
    width: 100%;/* $({(clicked) => clicked ? '50%' : '100%'}) */
    margin: 1rem 1rem 1rem 0;
    border: none;
    background-color: #B58934;
    color: white;
    padding: 1rem;
    border-radius: 5px; 
    cursor: pointer;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    border: none;
    background-color: #B58934;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
`;

export const Clean = styled.button`
    width: 100%;
    margin: 1rem 1rem 1rem 0;
    border: none;
    background-color: #B58934;
    color: white;
    padding: 1rem;
    border-radius: 5px; 
    cursor: pointer;
`;

export const ButtonsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
`;

export const PreferredTime = styled.h3`
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    color: black;
`;