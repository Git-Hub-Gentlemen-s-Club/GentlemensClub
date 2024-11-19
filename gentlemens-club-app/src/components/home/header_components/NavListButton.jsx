import React, { useState } from 'react';

import NavListComponent from './NavList';

import {
    FaChevronUp,
    FaChevronDown
} from 'react-icons/fa';

import { 
    NavMenu,
    NavMenuContainer,
    NavMenuButton 
} from '../../../styles/home/header_style/NavListButtonStyle';

function NavListButton() {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  return (
    <NavMenuContainer>
        <NavMenuButton onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}>
            <span>Navegação</span>
            <span>
                {isNavMenuOpen ? <FaChevronUp/> : <FaChevronDown />}
            </span>
        </NavMenuButton>

        {isNavMenuOpen && <NavListComponent open={isNavMenuOpen}/> }
    </NavMenuContainer>
  );
}

export default NavListButton;