import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import propertiesData from "../../data/properties.json";

export const SingleViewPage = () => {
  const { id } = useParams(); // Get the 'id' from the URL params

  const [data, setData] = useState(null);
  const [imageVisible, setImageVisible] = useState(false);

  // Fetch the property data based on the 'id'
  useEffect(() => {
    const property = propertiesData.properties.find((prop) => prop.id === id);
    setData(property);
  }, [id]);

  // Handle image click to toggle visibility
  const handleImageClick = (index) => {
    setImageVisible(index);
  };

useEffect(()=>{
    data?.picture.map((image, index) => (                
        console.log(image)
      ))
},[data])  

  // Render the component
  return (
    <div className="single-view-page my-5">
      {data ? (
        <>
          <div className="property-header">
            <h1 className="property-title">{data.type} - {data.location}</h1>
            <p className="property-price">${data.price}</p>
          </div>
          <p className="property-description">{data.description}</p>
          
          <div className="property-details">
            <div className="property-meta">
              <p><strong>Bedrooms:</strong> {data.bedrooms}</p>
              <p><strong>Tenure:</strong> {data.tenure}</p>
              <p><strong>Added on:</strong> {data.added.month} {data.added.day}, {data.added.year}</p>
            </div>

            {/* Image gallery */}
            <div className="image-gallery">
              {data.picture.map((image, index) => (                
                <div key={index} className="image-container">
                  <img
                    src={image}
                    alt={`Property image ${index + 1}`}
                    onClick={() => handleImageClick(index)}
                    className="thumbnail"
                  />
                </div>
              ))}
            </div>

            {/* Modal for showing the clicked image */}
            {imageVisible !== false && (
              <div className="image-modal">
                <div className="modal-content">
                  <img
                    src={data.picture[imageVisible]}
                    alt={`Property image ${imageVisible + 1}`}
                    className="modal-image"
                    height={100}
                  />
                  <button onClick={() => setImageVisible(false)} className="close-modal">
                    ×
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
