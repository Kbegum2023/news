import { useState } from 'react';
import Layout from '../Layout/Layout';
import APIData from '../component/APIData';
import RandomImages from '../component/RandomImages';

import '../style.css';

const TechnologyPage = () => {
  const [query, setQuery] = useState('technology');
  const randomImageUrl = RandomImages();

  return (
    <Layout>
      <div className="container">
        <div className="image-container">
          {/* Image takes up one-third of the screen */}
          <img
            src={randomImageUrl || placeholderImageUrl}
            alt="Placeholder"
            className="banner-img"
          />
        </div>
        {/* Overlay to limit the image height */}
        <div className="overlay" />
        {/* H1 tag is centered vertically and horizontally */}
        <div className="text-container">
          <h1>All the technology news</h1>
        </div>
      </div>
      <APIData query={query} />
    </Layout>
  );
};

export default TechnologyPage;

