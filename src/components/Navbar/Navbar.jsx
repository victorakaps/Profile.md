import React, { useContext } from 'react';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { DarkModeContext } from './imports';
import './Navbar.css';

function Navbar({ title }) {
    const [toggle] = useContext(DarkModeContext);
    return (
        <nav className="p-3 d-flex align-items-center justify-content-center position-relative custom-nav">
            <button
                className={`position-absolute start-0 top-50 translate-middle-y ms-3 btn border-0 ${
                    toggle ? 'button-theme-green-100' : 'button-theme-red-100'
                } rounded-circle shadow d-flex align-items-center justify-content-center text-white back-button fs-3`}
            >
                <Link to="/">
                    <ArrowLeft color="white" />
                </Link>
            </button>
            <h1
                className={`m-0 p-0 text-center ${
                    toggle ? 'color-theme-green-100' : 'color-theme-green-300'
                } fw-bold text-capitalize`}
            >
                {title}
            </h1>
        </nav>
    );
}

export default Navbar;
