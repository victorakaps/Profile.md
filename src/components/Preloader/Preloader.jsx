import React, { useContext } from 'react';
import './Preloader.css';
import { logo, DarkModeContext } from './imports';
function Preloader() {
    const [toggle] = useContext(DarkModeContext);
    return (
        <div
            className={`preloader-container ${
                toggle ? 'bg-theme-green-300' : 'bg-theme-yellow-100'
            }`}
            onLoad={() =>
                setTimeout(() => {
                    const preloader = document.querySelector('.preloader-container');
                    preloader.style.display = 'none';
                }, 1500)
            }
        >
            <img className="preloader-logo" src={logo} alt="hf2021" />
        </div>
    );
}

export default Preloader;
