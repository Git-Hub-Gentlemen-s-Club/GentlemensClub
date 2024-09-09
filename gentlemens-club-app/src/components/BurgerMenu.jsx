import React, {useState} from "react";

import styled from "styled-components";

import { BurgerMenuStyled } from "../styled_components/home/header/BurgerMenuStyle";

import OffCanvas from "./OffCanvas";

function BurgerMenu() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <BurgerMenuStyled open={open} onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </BurgerMenuStyled>
            <OffCanvas open={open}/>
        </>
    );
}

export default BurgerMenu;