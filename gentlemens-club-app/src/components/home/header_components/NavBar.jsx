import React, { useEffect, useState } from "react";

import { FaSearch, FaMapMarkerAlt, FaStopwatch, FaRegUserCircle } from "react-icons/fa";

import { NavContainer, NavInputs, Nav } from "../../../styled_components/home/header_style/NavBarStyle";

import NavListComponent from "../../NavList";

import { useNavigate } from "react-router-dom";

import WhenFilterModal from "../../WhenFilterModal";

import { ThemeProvider } from "../../../context/Theme";

import {LoginSignUp, Input, InputWrapper, LoginWrapper} from "../../../styled_components/home/header_style/HeaderStyle";

import DarkThemeBtn from "./DarkThemeBtn";

import SelectLang from "./SelectLang";

const gray = "#dddddd";

function NavBar() {
    const navigate = useNavigate();

    const [theme, setTheme] = useState("light");
    
    const [toggled, setToggled] = useState(false);
    
    const darkTheme = () => {
        setTheme("dark");
    }
    
    const lightTheme = () => {
        setTheme("light");
    }

    const handleClick = () => {
        setToggled(!toggled);
    } 

    useEffect(() => {
        console.log("Mudando o tema")
    }, [theme]);

    const [openWhenFilter, setOpenWhenFilter] = useState(false);
    return (
        <ThemeProvider value={{theme, darkTheme, lightTheme}}>
            <Nav>
            <NavContainer>
                <NavInputs>

                    <InputWrapper>
                        <FaSearch style={{ color: gray }} className="icons" />
                        <Input type="text" placeholder="Pesquise serviços e barbearias" />
                    </InputWrapper>

                    <InputWrapper>
                        <FaMapMarkerAlt style={{ color: gray }} className="icons" />
                        <Input type="text" placeholder="Itapecerica da Serra" />
                    </InputWrapper>

                    <InputWrapper>
                        <FaStopwatch style={{ color: gray }} className="icons" />
                        <Input type="text" placeholder="Quando?" onClick={() => {setOpenWhenFilter(true)}}/>
                    </InputWrapper>

                    <LoginWrapper>
                    <FaRegUserCircle style={{ color: gray, width: '30px', height: '30px' }} className="icons" />
                        <LoginSignUp onClick={() => {navigate('/Login')}}>
                            Entrar 
                        </LoginSignUp>/
                        <LoginSignUp onClick={() => {navigate('/Subscribe')}}>
                        Inscrever-se
                        </LoginSignUp>
                    </LoginWrapper>

                    <SelectLang/>

                    <button onClick={navigate('/UserMenu')}>Menu Usuário</button>

                    <DarkThemeBtn toggled={toggled} handleClick={handleClick} />

                </NavInputs>

                <NavListComponent />

                <WhenFilterModal isOpen={openWhenFilter} setOpenModal={() => setOpenWhenFilter(!openWhenFilter)} />
            </NavContainer>
            </Nav>
        </ThemeProvider>
        
    );
}

export default NavBar;