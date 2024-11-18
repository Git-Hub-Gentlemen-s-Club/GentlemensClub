import React, { useState } from "react";

import UserMenu from "./UserMenu";

import ProfilePic from '../../../assets/barbeariaJH.jpg';

import { 
    MenuButton, 
    MenuContainer 
} from "../../../styles/home/header_style/UserMenuStyle";

import { 
    FaChevronDown, 
    FaChevronUp 
} from "react-icons/fa";

const userName = {
    name: "Harry Potter",
}

export default function UserMenuButton() {
    const [menuOpen, setMenuOpen] = useState(false); 

    return (
        <MenuContainer>
            <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
                {/* Aqui vai a foto do banco de dados */}
                <img src={ProfilePic} alt="Foto de perfil do usuário" />

                {/* Aqui vai o nome do usuário vindo do banco de dados */}
                <p>{userName.name}</p>

                <span>
                    {menuOpen ? <FaChevronUp/> : <FaChevronDown />}
                </span>
            </MenuButton>

            {menuOpen && <UserMenu open={menuOpen}/> }
        </MenuContainer>
    )
}