import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { searchImages } from './data';
import Loader from './Loader'; // Import the Loader component

const ImageSearchApp = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSearch = async (query) => {
    setLoading(true); // Show loader
    try {
      const response = await searchImages(query);
      setImages(response.data.hits); // Pixabay returns an array of images in `hits`
    } catch (error) {
      console.error('Error fetching images:', error);
    }
    setLoading(false); // Hide loader
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <Loader /> // Show loader when loading
      ) : (
        <div className="image-grid">
          {images.map((image) => (
            <img key={image.id} src={image.webformatURL} alt={image.tags} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSearchApp;
