import React from 'react';

import { FaChevronDown } from 'react-icons/fa';

import styled from 'styled-components';

import barber_pole from '../../../assets/img/barber_pole.png';

export default function DropdownUserMenu() {
    return (
        <UserButton>
            <img style={{height:'20px', width:'20px'}} src={barber_pole} alt="teste" />
            <p>Usuário</p>
            <FaChevronDown />
        </UserButton>
    );
}

const UserButton = styled.div`
    display: flex;
`;