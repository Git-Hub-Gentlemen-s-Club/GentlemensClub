// src/styled_components/InformationCardStyle.jsx
import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: #fff;
    color: #000;
    padding: 20px;
    border-radius: 10px;
    max-width: 1200px;
    margin: 20px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    box-sizing: border-box;
    position: relative; /* Adiciona posição relativa para o container */
    user-select: none; /* Evita a seleção de texto e imagens */
    pointer-events: none; /* Impede o arrasto */

    @media (max-width: 768px) {
        padding: 15px;
        max-width: 90%; /* Ajuste para telas menores */
        margin-top: 50px; /* Adiciona margem superior para evitar sobreposição */
    }
`;

export const Heading = styled.h1`
    font-size: 1.5rem;
    color: #ce9c39;
    margin-bottom: 10px;
`;

export const Paragraph = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 10px;
`;

export const Image = styled.img`
    width: 60px; /* Ajuste o tamanho da imagem conforme necessário */
    height: auto;
    position: absolute; /* Posiciona a imagem de forma absoluta */
    top: -50px; /* Ajuste a posição vertical conforme necessário */
    left: 25px; /* Ajuste a posição horizontal conforme necessário */
    margin-bottom: 20px;
    user-select: none; /* Impede a seleção */
    pointer-events: none; /* Impede o arrasto */
`;
