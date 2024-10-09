import { useState } from 'react';

import styled from 'styled-components';

const [isDark, setIsDark] = useState(false);

export const ToggleContainer = styled.div`
    height: 40px;
    width: 80px;
    border-radius: 1rem;
    cursor: pointer;
    background-color: ${(props) => (props.isOn === true ? 'green' : 'black')};
    transition: background-color 500ms linear;
`;

export const ToggleInput = styled.input`
    
`;
