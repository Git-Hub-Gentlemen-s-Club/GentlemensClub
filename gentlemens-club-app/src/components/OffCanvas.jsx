import { FaSearch, FaMapMarkerAlt, FaStopwatch, FaRegUserCircle } from "react-icons/fa";

/* import styled from "styled-components"; */

import {NavInputs, NavList, NavContainer} from "../styled_components/home/header/NavBarStyle";

import {Link, LoginSignUp, Input, InputWrapper, Select, LoginWrapper, DarkModeInput, Options} from "../styled_components/home/header/HeaderStyle";

const gray = "#dddddd";

function OffCanvas({ open }) {
    return (
        <NavContainer open={open}>
        <NavInputs>

            <InputWrapper>
                <FaSearch style={{color: gray}} className="icons"/>
                <Input type="text" placeholder="Pesquise serviços e barbearias" />
            </InputWrapper>
                
            <InputWrapper>
                <FaMapMarkerAlt style={{color: gray}} className="icons" />
                <Input type="text" placeholder="Itapecerica da Serra" />
            </InputWrapper>

            <InputWrapper>
                <FaStopwatch style={{color: gray}} className="icons" />
                <Input type="text" placeholder="Quando?"/>
            </InputWrapper>

            <LoginWrapper>
                <FaRegUserCircle style={{color: gray}} className="icons" />
                <LoginSignUp href="">
                    Entrar / Inscrever-se
                </LoginSignUp>
            </LoginWrapper>

            <Select name="" id="">
                <Options value="pt-br">
                    🇧🇷
                    BR
                </Options>
                <Options value="en-us">
                    🇺🇸 
                    EN
                </Options>
            </Select>

            <DarkModeInput type="checkbox" name="dark-mode" id="dark-mode" />
            
        </NavInputs>   

        <NavList>
            <li>
                <Link href="">Corte de cabelo</Link>
            </li>
            <li>
                <Link href="">Barbearias</Link>
            </li>
            <li>
                <Link href="">Cortes em casa</Link>
            </li>
            <li>
                <Link href="">Spa & Massagem</Link>
            </li>
            <li>
                <Link href="">Sobrancelhas & Cílios</Link>
            </li>
            <li>
                <Link href="">Agendamentos</Link>
            </li>
            <li>
                <Link href="">Mais...</Link>
            </li>
        </NavList>
    </NavContainer>
    );
}

export default OffCanvas;