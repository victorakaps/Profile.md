import React, { useContext, useEffect, useState } from 'react';
import { DarkModeContext, ProfileCard, Navbar } from './imports';
import './DevProfiles.css';
import { fetchData } from './imports';

function DevProfiles() {
    const [toggle] = useContext(DarkModeContext);
    const [data, setdata] = useState([]);
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
                <div className="p-4 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-4 overflow-auto align-items-center justify-content-center h-100">
                    {data.map((item, index) => (
                        <div className="col" key={index}>
                            <ProfileCard
                                imageURL="https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                title={item.username}
                                content="Cillum qui do consequat dolor enim elit eu tempor esse quis ut."
                            />
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}

export default DevProfiles;
