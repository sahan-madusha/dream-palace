import React from "react";
import { useWishlist } from "../../Context/WishlistContext.jsx";

export const PropertyCard = ({ property }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleWishlistClick = () => {
    if (isInWishlist(property.id)) {
      removeFromWishlist(property.id);
    } else {
      addToWishlist(property.id);
    }
  };

  return (
    <div className="container py-5">
      <div className="property-card position-relative bg-light rounded overflow-hidden shadow">
        <img
          src={property.picture}
          alt={property.shortdescription}
          className="img-fluid w-100 h-100 object-fit-cover"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="p-4">
          <h5 className="fw-bold">{property.type}</h5>
          <p className="text-muted">{property.location}</p>
          <p className="text-primary h6">
            ${property.price.toLocaleString()} - {property.bedrooms} Bedrooms
          </p>
          <p className="small text-muted mb-2">{property.shortdescription}</p>
          <div className="d-flex justify-content-between align-items-center">
            <a
              href={property.url}
              className="btn btn-outline-primary btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Details
            </a>
            <button
              className={`btn btn-sm wishlist-btn rounded-circle py-1 px-2 ${
                isInWishlist(property.id)
                  ? "border border-success bg-success text-white"
                  : "border border-danger bg-danger text-white"
              }`}
              onClick={handleWishlistClick}
            >
              <i
                className={`bi ${
                  isInWishlist(property.id) ? "bi-heart-fill" : "bi-heart"
                }`}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
