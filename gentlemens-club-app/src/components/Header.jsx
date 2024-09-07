import React from "react";

import {HeaderContainer, HeaderWrapper, ImageContainer, Image} from "../styled_components/header/HeaderStyle";

import { Nav } from "../styled_components/header/NavBarStyle";

import NavBar from "./NavBar";

import BurgerMenu from "./BurgerMenu";

import logo from '/src/assets/LogoGentlemensClub.png';

function Header() {
    return (
        <HeaderContainer>
            <ImageContainer>
                    <Image src={logo} alt="Logo do Gentlemens Club" />
            </ImageContainer>
            <HeaderWrapper>
                <NavBar/>
            </HeaderWrapper>    
        </HeaderContainer>
    );
}

export default Header;