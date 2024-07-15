import React from 'react';
import './profileItems.css';
const ProfileItems = ({ items }) => {
  return (
    <>
      {items ? (
        items.map((item) => (
          <div key={item._id} className='profileItem' >
            <img src={`http://localhost:5000/uploads/${item.image}`} alt={item.alt} />
          </div>
        ))
      ) : (
        <h1>Nothing to show</h1>
      )}
    </>
  );
};

export default ProfileItems;
