import React, { useContext, useEffect, useState } from 'react';
import { DarkModeContext, ProfileCard, Navbar, PopUp, fetchData, loader } from './imports';
import './DevProfiles.css';

function DevProfiles() {
    const [toggle] = useContext(DarkModeContext);
    const [data, setdata] = useState([]);
    const [md, setmd] = useState('');
    useEffect(() => {
        let mounted = true;
        fetchData().then((cardData) => {
            if (mounted) {
                setdata(cardData);
            }
        });
        return () => {
            mounted = false;
        };
    }, []);
    // {console.log("printing data in DEvProfiles", data)}
    return (
        <section
            className={`overflow-auto dev-profiles-container ${
                toggle ? 'bg-theme-green-300' : 'bg-theme-yellow-100'
            }`}
        >
            <Navbar title="dev profiles" />
            <section className="overflow-auto" style={{ height: 'calc(100% - 90px)' }}>
                <div className={`w-100 h-100 d-flex align-items-center justify-content-center ${data.length === 0 ? "d-flex" : "d-none"}`}>
                    <img src={loader} alt="loader" />
                </div>
                {/* <p className="loader" style={{ display: data.length === 0 ? 'block' : 'none' }}>
                    Loading...
                </p> */}
                <div className="p-4 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-4 overflow-auto align-items-center justify-content-center h-100">
                    {data.map((item, index) => (
                        <div className="col" key={index} onClick={() => setmd(() => item.md)}>
                            <ProfileCard
                                imageURL="https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                title={item.username}
                                content="Cillum qui do consequat dolor enim elit eu tempor esse quis ut."
                            />
                        </div>
                    ))}
                </div>
            </section>
            {/* PopUp */}
            <PopUp data={md} />
        </section>
    );
}

export default DevProfiles;
