import React from 'react';
import { XCircleFill } from 'react-bootstrap-icons';
import ReactMd from '../ReactMarkdown/ReactMd';
import "bootstrap/dist/css/bootstrap.min.css"
import './PopUp.css';

function PopUp({ data }) {
    return (
        <section id="popup">
            <button className="btn btn-lg button-theme-red-100 rounded-circle d-flex align-items-center justify-content-center ms-auto">
                <a href="#" className="text-decoration-none p-0- m-0 fs-2 d-flex align-items-center justify-content-center"><XCircleFill color="white" /></a>
            </button>
            <div className="bg-secondary text-white px-3 py-5 mt-3">
                <ReactMd input={data} />
            </div>
        </section>
    );
}

export default PopUp;
