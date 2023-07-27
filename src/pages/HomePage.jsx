import React, { useState } from 'react'
import Layout from '../Layout/Layout';
import APIData from '../component/APIData';
import RandomImages from '../component/RandomImages';


const HomePage = () => {

  const [query, setQuery] = useState('everything');

  const [data, setData] = useState([]);

    const randomImageUrl = RandomImages();

  
  return (
    <Layout>
<div className="container">
        <div className="image-container">
          {/* Image takes up one-third of the screen */}
          <img
            src={randomImageUrl || placeholderImageUrl}
            alt="Placeholder"
            className="w-full h-full object-cover mb-4"
          />
        </div>
        {/* Overlay to limit the image height */}
        <div className="overlay" />
        {/* H1 tag is centered vertically and horizontally */}
        <div className="text-container">
          <h1>Your news digest</h1>
        </div>
      </div>   

      <APIData query={query} /> 
      
    </Layout>
    
  )
}

export default HomePage