import React from "react";
import { useNavigate } from "react-router-dom";

import Logo from '../../../assets/Logo_Gentlemens_Club.png';;

import { 
    HeaderContainer, 
    ImageContainer 
} from "../../../styles/home/header_style/HeaderStyle";

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