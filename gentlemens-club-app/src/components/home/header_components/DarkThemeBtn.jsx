import useTheme from '../../../context/ThemeContext';

import { Container, Circle } from '../../../styles/home/header_style/DarkModeBtnStyle';

import { FaMoon, FaSun } from 'react-icons/fa';

export default function DarkThemeBtn({toggled, handleClick}) {
    const {theme, darkTheme, lightTheme} = useTheme();

    console.log(toggled); 

    const onChange = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) {
            darkTheme();
        } else {
            lightTheme();
        }
    }
        
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <input type="checkbox" style={{display: "none"}} value={toggled} onClick={handleClick} onChange={onChange} checked={theme === 'dark'} />
            <Container onClick={handleClick}>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap:'10px'}}>
                    <FaMoon style={{color: '#404040'}}/>
                    <FaSun style={{color: 'yellow'}}/>  
                </div>
                <Circle toggled={toggled}/>
            </Container>
        </div>
    )
}