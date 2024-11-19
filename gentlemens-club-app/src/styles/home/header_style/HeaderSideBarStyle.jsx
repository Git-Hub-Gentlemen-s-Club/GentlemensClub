import styled from "styled-components";

export const HeaderSideBarContainer = styled.header`
    margin: 0 auto;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 8fr;
    background-color: #232225;
    color: #B58934;
    font-family: Rye, sans-serif;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        overflow-y: scroll;
    }
`;

export const ImageSideBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: Rye, sans-serif;
    color: #b58934;
`;