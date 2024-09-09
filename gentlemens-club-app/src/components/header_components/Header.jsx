import React from "react";

<<<<<<< HEAD:gentlemens-club-app/src/components/Header.jsx
import {HeaderContainer, HeaderWrapper, ImageContainer, Image} from "../styled_components/home/header/HeaderStyle";

/* import { Nav } from "../styled_components/home/header/NavBarStyle"; */
=======
//Importa os componentes estilizados do header
import {HeaderContainer, HeaderWrapper, ImageContainer, Image} from "../../styled_components/header_style/HeaderStyle";
>>>>>>> loginScreen:gentlemens-club-app/src/components/header_components/Header.jsx

//Importa o componente de nav bar
import NavBar from "./NavBar";

<<<<<<< HEAD:gentlemens-club-app/src/components/Header.jsx
/* import BurgerMenu from "./BurgerMenu"; */

=======
>>>>>>> loginScreen:gentlemens-club-app/src/components/header_components/Header.jsx
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