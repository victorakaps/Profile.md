import React, { useContext } from 'react';
import './Home.css';
import { DarkModeContext, logo, sideFlower } from './imports';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Home() {
    const [toggle] = useContext(DarkModeContext);
    return (
        <section
            className={`home-container d-flex flex-column align-items-center justify-content-center ${
                toggle ? 'bg-theme-green-300' : 'bg-theme-yellow-100'
            }`}
        >
            <div>
                <img src={logo} alt="hf2021" className="w-100" />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center p-4">
                <code
                    className={`fw-bold fs-1 text-center px-3 mb-2 ${
                        toggle
                            ? 'color-theme-green-100 bg-theme-red-200'
                            : 'color-theme-green-300 bg-theme-green-100'
                    }`}
                >
                    <em>Profile.md</em>
                </code>
                <p
                    className={`text-center text-capitalize ${
                        toggle ? 'color-theme-yellow-100' : 'color-theme-red-200'
                    }`}
                >
                    collecting awesome developer profiles worldwide
                </p>
            </div>
            <div className="d-flex align-items-center justify-content-evenly flex-column flex-sm-column flex-md-row">
            <button
                className={`mx-lg-2 my-2 my-lg-0 btn btn-lg shadow ${
                    toggle ? 'button-theme-green-100' : 'button-theme-red-100'
                }`}
            >
                <Link to="/dev-profiles" className="text-white text-decoration-none">
                    Explore More
                </Link>
            </button>
            <button
                className={`mx-lg-2 my-2 my-lg-0 btn btn-lg shadow ${
                    toggle ? 'button-theme-green-100' : 'button-theme-red-100'
                }`}
            >
                <Link to="/contributors" className="text-white text-decoration-none">
                    Contributors
                </Link>
            </button>
            <button
                className={`mx-lg-2 my-2 my-lg-0 btn btn-lg shadow ${
                    toggle ? 'button-theme-green-100' : 'button-theme-red-100'
                }`}
            >
                <a href="https://github.com/victor-thescuti/Profile.md/blob/main/CONTRIBUTING.md" className="text-white text-decoration-none">
                    Add Your Profile
                </a>
            </button>
            </div>
            {/* svg */}
            <img src={sideFlower} alt="left-flower" className="leftFlower position-absolute start-0 top-50" />
            <img src={sideFlower} alt="right-flower" className="rightFlower position-absolute end-0 top-50" />
        </section>
    );
}

export default Home;
