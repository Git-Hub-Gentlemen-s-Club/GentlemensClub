import React from "react";

import { Nav } from "../styled_components/home/header/NavBarStyle";

import BurgerMenu from "./BurgerMenu";

function NavBar() {
    return (
        <Nav>
            <BurgerMenu/>
        </Nav>
    );
}

export default NavBar;