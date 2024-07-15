import React from 'react';
import { useParams,Link } from 'react-router-dom';

const ProfileDetails = () => {
  // Access the profileId from the URL params
  const { profileId } = useParams();

  // Dummy profile data (replace with your actual data fetching logic)
  const profileData = {
    id: profileId,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    gender: 'Male',
    profileImage: 'https://example.com/profile-image.jpg'
  };

  return (
    <div className="profile-details">
      <div className="profile-details__logo">
        <img src={profileData.profileImage} alt="Profile" />
      </div>
      <div className="profile-details__content">
        <h2>{profileData.name}</h2>
        <p>Email: {profileData.email}</p>
        <p>Phone: {profileData.phone}</p>
        <p>Bio: {profileData.bio}</p>
        <p>Gender: {profileData.gender}</p>
      </div>
      <Link to={`${profileId}/edit`}>Edit Profile</Link>

    </div>
  );
};

export default ProfileDetails;
