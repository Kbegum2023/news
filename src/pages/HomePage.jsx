import React, { useState } from 'react'
import Layout from '../Layout/Layout';
import APIData from '../component/APIData';
import RandomImages from '../component/RandomImages';

import '../style.css';


const HomePage = () => {

  const [query, setQuery] = useState('everything');

  const [data, setData] = useState([]);

    const randomImageUrl = RandomImages();

  
  return (
    <Layout>
<div className="container">
        <div className="image-container">
          <img
            src={randomImageUrl || placeholderImageUrl}
            alt="Placeholder"
            className="banner-img"
          />
        </div>
        <div className="overlay" />
        <div className="text-container">
          <h1>Your news digest</h1>
        </div>
      </div>   

      <APIData query={query} /> 
      
    </Layout>
    
  )
}

export default HomePage