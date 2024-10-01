import React from "react";

//Importa os componentes estilizados do header
import { HeaderContainer, /* HeaderWrapper, */ ImageContainer } from "../../../styled_components/home/header_style/HeaderStyle";

//Importa o componente de nav bar
import NavBar from "./NavBar";

import Logo from '../../../assets/Logo_Gentlemens_Club.png';

function Header() {
    return (
        <>
            <HeaderContainer>
                {/* <HeaderWrapper> */}
                <ImageContainer>
                    <img src={Logo} alt="Logo Gentlemen's Club" />
                    Gentlemen's Club
                </ImageContainer>
                <NavBar />
                {/* </HeaderWrapper>     */}
            </HeaderContainer>
        </>

    );
}

export default Header;