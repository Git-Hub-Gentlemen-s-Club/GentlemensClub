import React, { useState } from "react";

import UserMenu from "./UserMenu";

import { MenuButton, MenuContainer } from "../../../styled_components/home/header_style/UserMenuStyle";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import ProfilePic from '../../../assets/barbeariaJH.jpg';

export default function UserMenuButton() {
    const [menuOpen, setMenuOpen] = useState(false); 

    return (
        <MenuContainer>
            <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
                {/* Aqui vai a foto do banco de dados */}
                <img src={ProfilePic} alt="Foto de perfil do usuário" />

                {/* Aqui vai o nome do usuário vindo do banco de dados */}
                <p>Harry Potter</p>

                <span>
                    {menuOpen ? <FaChevronUp/> : <FaChevronDown />}
                </span>
            </MenuButton>

            {menuOpen && <UserMenu open={menuOpen}/> }
        </MenuContainer>
    )
}