import React, {useState} from "react";

import BurgerMenuStyle from "../../../styles/home/header_style/BurgerMenuStyle";

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