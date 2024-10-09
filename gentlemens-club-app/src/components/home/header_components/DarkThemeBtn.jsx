import React from 'react';

import useTheme from '../../../context/Theme';

export default function DarkModeBtn() {
    const {theme, darkTheme, lightTheme} = useTheme();

    const onChange = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) {
            darkTheme();
        } else {
            lightTheme();
        }
    }
        
    return (
        <input type="checkbox" value="" onChange={onChange} checked={theme === 'dark'} />
    )
}