import React, {useState} from "react";

import BurgerMenuStyle from "../../styled_components/header_style/BurgerMenuStyle";

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