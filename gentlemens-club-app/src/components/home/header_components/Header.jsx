import React from "react";

//Importa os componentes estilizados do header
import { HeaderContainer, /* HeaderWrapper, */ ImageContainer } from "../../../styled_components/home/header_style/HeaderStyle";

//Importa o componente de nav bar
import NavBar from "./NavBar";

import Logo from '../../../assets/Logo_Gentlemens_Club.png';

import { useNavigate } from "react-router-dom";

function Header({children}) {
    const navigate = useNavigate();
    
    return (
        <>
            <HeaderContainer>
                <ImageContainer onClick={() => navigate('/')}>
                    <img src={Logo} alt="Logo Gentlemen's Club" />
                    Gentlemen's Club
                </ImageContainer>
                {children}
            </HeaderContainer>
        </>

    );
}

export default Header;