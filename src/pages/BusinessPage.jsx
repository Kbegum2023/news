import { useState } from 'react'
import Layout from '../Layout/Layout';
import APIData from '../component/APIData';
import RandomImages from '../component/RandomImages';
import '../style.css';

const BusinessPage = () => {

  const [query, setQuery] = useState('business');
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
          <h1>All the business news</h1>
      </div>
      
      <APIData query={query} /> 
      </div>
    </Layout>
    
  )
}

export default BusinessPage