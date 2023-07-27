import { useState } from 'react'
import Layout from '../Layout/Layout';
import APIData from '../component/APIData';
import RandomImages from '../component/RandomImages';

const BusinessPage = () => {

  const [query, setQuery] = useState('business');
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
          <h1>All the business news</h1>
      </div>
      
      <APIData query={query} /> 
      </div>
    </Layout>
    
  )
}

export default BusinessPage