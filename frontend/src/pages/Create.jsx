import React, { useState } from 'react';
import { Form, json, redirect, useNavigate, } from 'react-router-dom';
import './create.css';
import { getAuthToken } from '../store/Auth';
const Create = () => {
  const [image, setImage] = useState(null);
  // const [caption, setCaption] = useState('');
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [isCaptionChanged, setIsCaptionChanged] = useState(false)

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
    setIsImageSelected(true);
  };

  const handleCaptionChange = (event) => {
    setIsCaptionChanged(true);
    // setCaption(event.target.value);
  };



  return (
    <div className="container">
      <h1>Image Form</h1>
      <Form method='POST' enctype="multipart/form-data">
        <div>
          <label htmlFor="image">Select Image:</label>
          <input type="file" id="image" accept="image/*" name='image' onChange={handleImageChange} />
        </div>
        {isImageSelected && (
          <div>
            <img src={image} alt="Selected" style={{ width: '100%', marginBottom: '10px' }} />
          </div>
        )}
        <div>
          <label htmlFor="caption">Caption:</label>
          <input
            type="text"
            id="caption"

            name='caption'
            onChange={handleCaptionChange}
            disabled={!isImageSelected}
          />
        </div>
        <button className='btn' type="submit" disabled={!isCaptionChanged}>
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Create;

export async function action({ request, params }) {
  const data = await request.formData();
  const token = getAuthToken();
  console.log(data);
  try {
    const response = await fetch('http://localhost:5000/', {
      method: 'POST',
      body: data,
      headers: {
        'Authorization' : 'Bearer ' + token
      }
    });

    if (!response.ok) {
      console.log(response.error);
      // Assuming json function is available, adjust accordingly
      return json({ message: 'Could not save task' }, { status: 500 });
    } else {
      // Assuming redirect function is available, adjust accordingly
      return redirect('/');
    }
  } catch (error) {
    console.log(error.message);
    // Assuming json function is available, adjust accordingly
    return json({ message: 'Could not save task' }, { status: 500 });
  }
}

