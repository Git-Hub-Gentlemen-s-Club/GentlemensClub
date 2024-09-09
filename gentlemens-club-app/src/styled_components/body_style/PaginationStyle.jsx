// src/styled_components/PaginationStyle.jsx
import styled from "styled-components";

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0; /* Espaçamento em cima e embaixo */
    position: relative;
    max-width: 1200px; /* Limite a largura máxima */
    margin: 40px auto; /* Centraliza o container */

    &::before {
        content: "";
        position: absolute;
        top: -20px; /* Ajuste para espaçamento */
        width: 100%;
        height: 2px;
        background-color: #ffffff;
    }

    @media (max-width: 768px) {
        margin: 20px 0; /* Reduz o espaçamento em telas menores */
        &::before {
            top: -10px; /* Ajuste para espaçamento em telas menores */
        }
    }
`;

export const PageNumber = styled.button`
    background: ${(props) => (props.active ? '#FFA500' : '#ffffff')};
    color: ${(props) => (props.active ? '#ffffff' : '#000000')};
    border: 1px solid #000000;
    padding: 10px 15px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;

    &:hover {
        background-color: #FFA500;
        color: #ffffff;
    }

    @media (max-width: 768px) {
        padding: 8px 12px; /* Ajuste de padding em telas menores */
        font-size: 12px; /* Ajuste de fonte em telas menores */
    }
`;

export const ArrowButton = styled.button`
    background: #ffffff;
    color: #000000;
    border: 1px solid #000000;
    padding: 10px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #FFA500;
        color: #ffffff;
    }

    &:disabled {
        background-color: #f0f0f0;
        color: #cccccc;
        cursor: not-allowed;
    }

    @media (max-width: 768px) {
        padding: 8px; /* Ajuste de padding em telas menores */
        font-size: 12px; /* Ajuste de fonte em telas menores */
    }
`;
