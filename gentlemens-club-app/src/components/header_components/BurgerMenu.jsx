import React, {useState} from "react";

<<<<<<< HEAD:gentlemens-club-app/src/components/BurgerMenu.jsx
import styled from "styled-components";

import { BurgerMenuStyled } from "../styled_components/home/header/BurgerMenuStyle";
=======
import BurgerMenuStyle from "../../styled_components/header_style/BurgerMenuStyle";
>>>>>>> loginScreen:gentlemens-club-app/src/components/header_components/BurgerMenu.jsx

import OffCanvas from "./OffCanvas";

function BurgerMenu() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <BurgerMenuStyle open={open} onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </BurgerMenuStyle>
            <OffCanvas open={open}/>
        </>
    );
}

export default BurgerMenu;