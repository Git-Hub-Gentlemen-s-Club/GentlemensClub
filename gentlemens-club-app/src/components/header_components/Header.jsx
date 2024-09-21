import React from "react";

//Importa os componentes estilizados do header
import {HeaderContainer, HeaderWrapper, ImageContainer, Image} from "../../styled_components/header_style/HeaderStyle";

//Importa o componente de nav bar
import NavBar from "./NavBar";

import logo from '/src/assets/LogoGentlemensClub.png';

function Header() {
    return (
        <HeaderContainer>
            <ImageContainer>
                    {/* <Image src={logo} alt="Logo do Gentlemens Club" /> */}
            </ImageContainer>
            <HeaderWrapper>
                <NavBar/>
            </HeaderWrapper>    
        </HeaderContainer>
    );
}

export default Header;