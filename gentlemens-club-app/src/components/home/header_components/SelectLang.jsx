import React from "react";

import { Select, Options } from "../../../styles/home/header_style/HeaderStyle";

export default function SelectLang() {
    return (
    <Select name="" id="">
        <Options value="pt-br">
            🇧🇷
            BR
        </Options>
        <Options value="en-us">
            🇺🇸
            EN
        </Options>
    </Select>
    );
}