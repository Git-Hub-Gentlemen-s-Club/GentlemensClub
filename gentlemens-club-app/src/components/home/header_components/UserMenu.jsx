import React, { useContext } from "react";
import { Link } from "react-router-dom"

import { LoginContext } from "../../../context/LoginContext";

import { 
    FaUser, 
    FaCalendarAlt, 
    FaWallet, 
    FaDollarSign 
} from "react-icons/fa";

import { FaRegMessage } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";

import { Menu, MenuOpts, MenuOpt } from '../../../styles/home/header_style/UserMenuStyle';

export default function UserMenu(open) {

    const {resetIsLoggedIn} = useContext(LoginContext);

    return (
            <Menu open={open}>
                <MenuOpts>
                    <MenuOpt>
                        <FaUser />
                        <Link to="/ClientProfile">Perfil</Link> {/* Link para ClientProfile */}
                    </MenuOpt>
                    <MenuOpt>
                        <FaCalendarAlt />
                        <Link to="/ClientScheduling">Agendamento</Link> {/* Link para ClientScheduling */}
                    </MenuOpt>
                    <MenuOpt>
                        <FaWallet />
                        Carteira
                    </MenuOpt>
            
                    <MenuOpt>
                        <FaDollarSign />
                        Planos e preço
                    </MenuOpt>
            
                    <MenuOpt>
                        <FaRegMessage />
                        Fale conosco
                    </MenuOpt>
            
                    <MenuOpt onClick={() => {
                        resetIsLoggedIn();
                        location.reload();
                        }}>
                        <TbLogout />
                        Sair
                    </MenuOpt>
                </MenuOpts>
            </Menu>
    );
}