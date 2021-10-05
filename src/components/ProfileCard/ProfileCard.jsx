import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DarkModeContext } from './imports';

function ProfileCard({imageURL, title, content }) {
    const [toggle] = useContext(DarkModeContext);
    return (
        <div
            className={`card border-0 ${
                toggle ? 'bg-theme-green-200' : 'bg-theme-yellow-100'
            } shadow`}
        >
            <img src={imageURL} className="card-img-top" alt="random" />
            <div className="card-body">
                <h5
                    className={`card-title fw-bold ${
                        toggle ? 'color-theme-yellow-100' : 'color-theme-green-300'
                    }`}
                >
                    {title}
                </h5>
                {/* <p
                    className={`card-text ${
                        toggle ? 'color-theme-blue-100' : 'color-theme-green-200'
                    }`}
                >
                    {content}
                </p> */}
                <a
                    href="#popup"
                    className={`btn ${
                        toggle ? 'button-theme-green-300' : 'button-theme-red-100'
                    } text-white`}
                >
                    Preview
                </a>
            </div>
        </div>
    );
}

export default ProfileCard;
