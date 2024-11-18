import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

import Logo from '../../../assets/Logo_Gentlemens_Club.png';;

import { 
    HamburgerButton, 
    Sidebar,
    SidebarContent,
    CloseButton 
} from "../../../styles/ClientProfileStyle";

import { 
    HeaderContainer, 
    ImageContainer 
} from "../../../styles/home/header_style/HeaderStyle";

function Header({children}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log(isSidebarOpen);
      };
    
    const navigate = useNavigate();
    
    return (

        <>
            {!isSidebarOpen && (
                <HamburgerButton onClick={toggleSidebar}>
                    <FaBars />
                </HamburgerButton>
            )}

            <Sidebar className={isSidebarOpen ? 'open' : ''}>
                <SidebarContent>
                    {isSidebarOpen && (
                        <>
                            <CloseButton onClick={toggleSidebar}>
                                <FaTimes />
                            </CloseButton>
                            
                            <HeaderContainer>
                                <ImageContainer onClick={() => navigate('/')}>
                                    <img src={Logo} alt="Logo Gentlemen's Club" />
                                    Gentlemen's Club
                                </ImageContainer>
                                {children}
                            </HeaderContainer>
                        </>
                        )}                        
                </SidebarContent>
            </Sidebar>

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