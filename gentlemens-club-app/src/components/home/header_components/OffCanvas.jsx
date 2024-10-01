import { FaSearch, FaMapMarkerAlt, FaStopwatch, FaRegUserCircle } from "react-icons/fa";

import {NavInputs, NavContainer} from "../../../styled_components/home/header_style/NavBarStyle";

import {LoginSignUp, Input, InputWrapper, Select, LoginWrapper, DarkModeInput, Options} from "../../../styled_components/home/header_style/HeaderStyle";

import NavListComponent from "../../NavList";

import { useNavigate } from "react-router-dom";

import WhenFilterModal from "../../WhenFilterModal";

import { useState } from "react";

const gray = "#dddddd";

function OffCanvas({ open }) {
    const navigate = useNavigate();

    const [openWhenFilter, setOpenWhenFilter] = useState(false);

    return (
        <NavContainer open={open}>
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

            <NavListComponent />

            <WhenFilterModal isOpen={openWhenFilter} setOpenModal={() => setOpenWhenFilter(!openWhenFilter)} />
        </NavContainer>
    );
}

export default OffCanvas;