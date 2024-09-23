import React from "react";

//Importa os componentes estilizados do header
import {HeaderContainer, HeaderWrapper, ImageContainer} from "../../../styled_components/home/header_style/HeaderStyle";

//Importa o componente de nav bar
import NavBar from "./NavBar";

import logo from '../../../assets/header_icons/Barba_Barbearia.png';
import placa from '../../../assets/header_icons/Placa_Barbearia.png'

function Header() {
    return (
        <HeaderContainer>
            <ImageContainer>
                <img style={{position: "absolute", top: 0, left: 0}} src={placa} />
                <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                    <p style={{fontFamily: "Rye", color: "#B58934"}}>Gentlemens Club</p>
                    <img src={logo} alt="Logo do Gentlemens Club" />
                </div>
            </ImageContainer>
            <HeaderWrapper>
                <NavBar/>
            </HeaderWrapper>    
        </HeaderContainer>
    );
}

export default Header;