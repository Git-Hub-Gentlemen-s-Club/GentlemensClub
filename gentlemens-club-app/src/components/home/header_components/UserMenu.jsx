import React from "react";

import { FaUser, FaCalendarAlt, FaWallet, FaDollarSign } from "react-icons/fa";

import { Menu, MenuOpts, MenuOpt } from '../../../styled_components/home/header_style/UserMenuStyle';

import { FaRegMessage } from "react-icons/fa6";

import { TbLogout } from "react-icons/tb";

export default function UserMenu(open) {
    return (
        <Menu open={open}>
            <MenuOpts>
                <MenuOpt>
                    <FaUser />
                    Perfil
                </MenuOpt>

                <MenuOpt>
                    <FaCalendarAlt />
                    Agendamento
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
                
                <MenuOpt>
                    <TbLogout />
                    Sair
                </MenuOpt>
            </MenuOpts>
        </Menu>
    );
}