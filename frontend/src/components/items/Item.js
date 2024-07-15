import React from 'react';
import Card from '../UI/cardUi/Card';

function Item({data}) {
  console.log('item',data.error);

  return (
    <div className="Item">
      {data.error ? <h1>{data.error}</h1> : data.map((item) => (
        console.log(item.profilePhoto),
        <Card
          key={item._id}
          userImage={item.profilePhoto}
          username={data.username}
          image={item.image}
          likes={item.likes}
          caption = {item.caption}
        />
      ))}
      
    </div>
  );
}

export default Item;

