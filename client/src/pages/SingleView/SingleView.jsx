import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import propertiesData from "../../data/properties.json";
import { PropertyCard } from "../../components";

export const SingleViewPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [imageVisible, setImageVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const property = propertiesData.properties.find((prop) => prop.id === id);
    setData(property);
  }, [id]);

  const handleImageClick = (index) => {
    setImageVisible(index);
  };

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="single-view-page my-5">
      {data ? (
        <>
          <div className="d-flex flex-column flex-md-row">
            <div className="col-12 col-md-3">
              <PropertyCard property={data} isViewDetaiShow={false} />
            </div>
            <div className="col-12 col-md-9">
              <div className="property-header">
                <h1 className="property-title">
                  {data.type} - {data.location}
                </h1>
                <p className="property-price">${data.price}</p>
              </div>

              {/* Bootstrap Tabs */}
              <ul className="nav nav-tabs" id="propertyTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link ${activeTab === 1 ? "active" : ""}`}
                    id="long-description-tab"
                    data-bs-toggle="tab"
                    href="#long-description"
                    role="tab"
                    aria-controls="long-description"
                    aria-selected={activeTab === 1}
                    onClick={() => handleTabClick(1)}
                  >
                    Long Description
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link ${activeTab === 2 ? "active" : ""}`}
                    id="floor-plan-tab"
                    data-bs-toggle="tab"
                    href="#floor-plan"
                    role="tab"
                    aria-controls="floor-plan"
                    aria-selected={activeTab === 2}
                    onClick={() => handleTabClick(2)}
                  >
                    Floor Plan
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link ${activeTab === 3 ? "active" : ""}`}
                    id="google-map-tab"
                    data-bs-toggle="tab"
                    href="#google-map"
                    role="tab"
                    aria-controls="google-map"
                    aria-selected={activeTab === 3}
                    onClick={() => handleTabClick(3)}
                  >
                    Google Map
                  </a>
                </li>
              </ul>

              <div className="tab-content" id="propertyTabsContent">
                <div
                  className={`tab-pane fade ${
                    activeTab === 1 ? "show active" : ""
                  }`}
                  id="long-description"
                  role="tabpanel"
                  aria-labelledby="long-description-tab"
                >
                  <p className="property-description">{data.description}</p>
                  <div className="property-meta">
                    <p>
                      <strong>Bedrooms:</strong> {data.bedrooms}
                    </p>
                    <p>
                      <strong>Tenure:</strong> {data.tenure}
                    </p>
                    <p>
                      <strong>Added on:</strong> {data.added.month}{" "}
                      {data.added.day}, {data.added.year}
                    </p>
                  </div>
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
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === 2 ? "show active" : ""
                  }`}
                  id="floor-plan"
                  role="tabpanel"
                  aria-labelledby="floor-plan-tab"
                >
                  <div className="floor-plan">
                    <img src={data?.floorplane} alt="" />
                  </div>
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === 3 ? "show active" : ""
                  }`}
                  id="google-map"
                  role="tabpanel"
                  aria-labelledby="google-map-tab"
                >
                  <div className="google-map">
                    <iframe
                      width="100%"
                      height="450"
                      frameBorder="0"
                      style={{ border: 0 }}
                      src={data.url}
                      allowFullScreen
                      aria-hidden="false"
                      tabIndex="0"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="property-details">
                {imageVisible !== false && (
                  <div className="image-modal">
                    <div className="modal-content">
                      <img
                        src={data.picture[imageVisible]}
                        alt={`Property image ${imageVisible + 1}`}
                        className="modal-image"
                        height={100}
                      />
                      <button
                        onClick={() => setImageVisible(false)}
                        className="close-modal"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
