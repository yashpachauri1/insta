import React, { useState } from 'react';
import './LikeButton.css'; // Import CSS file for styling

function LikeButton() {
  const [count, setCount] = useState(0); // State to store the like count
  const [clicked, setClicked] = useState(false); // State to track if the button is clicked

  // Function to handle the click event and update the count and clicked state
  const handleClick = () => {
    setCount(count + 1);
    setClicked(true);
  };

  // Determine the class based on the clicked state
  const buttonClass = clicked ? 'like-icon clicked' : 'like-icon';

  return (
    <div className="like-button">
      <button className='like-icon' onClick={handleClick}>
        <span role="img" aria-label="heart">❤️</span>
      </button>
      <span className="like-count">{count}</span>
    </div>
  );
}

export default LikeButton;
