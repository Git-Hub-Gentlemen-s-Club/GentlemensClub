import styled from "styled-components";

const BurgerMenuStyle = styled.div`
    width: 2rem;
    height: 2rem;
    position: ${({ open }) => open ? 'fixed' : 'absolute'};
    top: 15px;
    right: 15px;
    z-index: 3;
    display: none;

    @media only screen and (max-width: 1166px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#cccccc' : '#cccccc'};
        border-radius: 5px;
        transform-origin: 1px;
        transition: all 0.15s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0deg)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0deg)'};
        }
    }
`;

export default BurgerMenuStyle;