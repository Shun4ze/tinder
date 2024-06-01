import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';
import '../styles/SwipeScreen.css'; 



const SwipeScreen = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/profiles')
            .then(response => {
                setProfiles(response.data.results);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="swipe-screen">
            {profiles.map(profile => (
                <ProfileCard key={profile.login.uuid} profile={profile} />
            ))}
        </div>
    );
};






export default SwipeScreen;
