import React from 'react';
import Random from 'random';
import Avatar from 'react-avatar';

const RandomImages = () => {

    const imageFolder = '../image';
  const imageFiles = [
    'img-1.jpg', 
    'img-2.jpg', 
    'img-3.jpg',
    'img-4.jpg',
    'img-5.jpg',
    'img-6.jpg',
    'img-7.jpg',
    'img-8.jpg',
    'img-9.jpg',
    'img-10.jpg',
    'img-11.jpg',
    'img-12.jpg',
    'img-13.jpg',
    'img-14.jpg',
    'img-15.jpg',
    'img-16.jpg',
    'img-17.jpg',
    'img-18.jpg',
    'img-19.jpg',
    'img-20.jpg'
];

  const randomIndex = Random.int(0, imageFiles.length - 1);
  const randomImage = imageFiles[randomIndex];

  const size = '600px';
  const name = 'Placeholder';

return `${imageFolder}/${randomImage}`;
};


export default RandomImages