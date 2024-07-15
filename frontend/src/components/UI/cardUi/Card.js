import React, { useState } from 'react';
import './card.css'; // Import CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css';

function Card(props) {
    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!liked);
    };

    const heartClass = liked ? 'heart-icon active' : 'heart-icon';

    return (
        <div className='card'>
            <div className='card__container'>
                <div className='card__container_header'>
                    <img src={`http://localhost:5000/profile/${props.userImage}`} alt='logo' />
                    <p>{props.username}</p>
                </div>
                <div className='card__container_media'>
                    <img src={`http://localhost:5000/uploads/${props.image}`} alt='image' />
                </div>
                <div className='card__container_actions'>
                    <button className='action-button' onClick={handleClick}>
                        <i className={`fa fa-heart ${heartClass}`}></i>
                     
                    </button>
                    <button className='action-button'>
                    <i className="far fa-comment"></i>
                    </button>
                    <button className='action-button'>
                        <i className="far fa-paper-plane"></i>
                    </button>


                </div>
                <div className='card__container_likes'>
                    <p>{props.likes} likes</p>
                </div>
                <div className='card__container_caption'>
                    <p>{props.caption}</p>
                </div>
                <div className='card__container_input'>
                    <input placeholder="Add a comment..." />
                </div>
            </div>
        </div>
    );
}

export default Card;
