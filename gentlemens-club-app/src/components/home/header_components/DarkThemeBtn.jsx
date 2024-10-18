import useTheme from '../../../context/Theme';

import { Container, Circle } from '../../../styled_components/home/header_style/DarkModeBtnStyle';

import { FaMoon, FaSun } from 'react-icons/fa';

export default function DarkModeBtn({toggled, handleClick}) {
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
        <>
            <input type="checkbox" style={{display: "none"}} value={toggled} onClick={handleClick} onChange={onChange} checked={theme === 'dark'} />
            <Container onClick={handleClick}>
                <FaMoon style={{color: '#404040'}}/>
                <FaSun style={{color: 'yellow', display: 'flex', justifyContent: 'end'}}/>
                <Circle toggled={toggled}/>
            </Container>
        </>
    )
}