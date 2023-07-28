import { useState } from 'react'
import Layout from '../Layout/Layout';
import APIData from '../component/APIData';
import RandomImages from '../component/RandomImages';

import '../style.css';

const LifestylePage = () => {

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
          <h1>All the lifestyle news</h1>
        </div>
      </div>
     <APIData query={query} />
    </Layout>
  )
}

export default LifestylePage