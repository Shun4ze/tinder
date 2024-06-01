import React from 'react';
import '../styles/ProfileCard.css';  // Assurez-vous que le fichier ProfileCard.css existe dans src/css

const ProfileCard = ({ profile }) => {
    return (
        <div className="profile-card">
            <img src={profile.picture.large} alt={`${profile.name.first} ${profile.name.last}`} />
            <h3>{profile.name.first} {profile.name.last}, {profile.dob.age}</h3>
            <p>{profile.location.city}, {profile.location.country}</p>
        </div>
    );
};

export default ProfileCard;

