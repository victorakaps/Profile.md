import React, { useContext } from 'react';
import { DarkModeContext, Navbar } from './imports';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contributors.css';

function Contributors() {
    const [toggle] = useContext(DarkModeContext);
    return (
        <section
            className={`overflow-auto contributors-container ${
                toggle ? 'bg-theme-green-300' : 'bg-theme-yellow-100'
            }`}
        >
            <Navbar title="contributors" />
            <div className="p-5 overflow-auto h-75 d-flex align-items-start justify-content-center" style={{height: "calc(100% - 90px)"}}>
                <img
                    src="https://camo.githubusercontent.com/63feba2ccdfeb4ba3ac3c176b2d12018cab6187aa502ec0d9b12ef91d2608f7f/68747470733a2f2f636f6e747269622e726f636b732f696d6167653f7265706f3d766963746f722d74686573637574692f50726f66696c652e6d64"
                    data-canonical-src="https://contrib.rocks/image?repo=victor-thescuti/Profile.md"
                    className="img-fluid"
                    alt="contributors"
                />
            </div>
        </section>
    );
}

export default Contributors;
