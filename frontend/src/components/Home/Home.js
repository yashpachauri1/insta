import React from 'react';
import './Home.css';
import Header from '../header/Header';
import Card from '../UI/cardUi/Card';
import Item from '../items/Item';
import { getAuthToken } from '../../store/Auth';
import { json, useLoaderData, Await } from "react-router-dom";

const Home = () => {

  const data = useLoaderData();
  console.log(data)
  return (
    <div className='homee'>
      <Item data={data} />
    
    </div>
  );
}

export default Home;

export async function loader ({request}){
const token = getAuthToken();
  try{
    const response = await fetch('http://localhost:5000/all',{
      headers:{
        'Authorization' : 'Bearer ' + token
      }
    });
    if(!response.ok){
      console.log(response.error);
      return json({error:response.error},{status:500});
    }
    else{
     
      return response;
    }
    
  }
  catch(error){
    return json({error:" Could not fetch data"}, {status:500});
  }

}