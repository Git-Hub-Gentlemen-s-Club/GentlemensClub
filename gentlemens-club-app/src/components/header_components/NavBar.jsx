import React from "react";

import { Nav } from "../../styled_components/header_style/NavBarStyle";

import BurgerMenu from "./BurgerMenu";

function NavBar() {
    return (
        <Nav>
            <BurgerMenu/>
        </Nav>
    );
}

export default NavBar;