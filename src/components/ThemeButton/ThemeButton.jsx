import React, { useContext } from 'react';
import { MoonFill } from 'react-bootstrap-icons';
import './ThemeButton.css';
import { DarkModeContext } from './import';

function ThemeButton() {
    const [toggle, setToggle] = useContext(DarkModeContext);
    const changeState = (toggle) => {
        setToggle((toggle) => !toggle);
    };
    return (
        <button className={`icon-container ${toggle ? "button-theme-green-100" : "button-theme-red-100"}`} onClick={changeState}>
            <MoonFill color="white" className="icon" />
        </button>
    );
}

export default ThemeButton;
