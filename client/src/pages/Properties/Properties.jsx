import React, { useEffect, useState } from "react";
import propertiesData from "../../data/properties.json";
import { PropertyCard } from "../../components";
import { useWishlist } from "../../Context/WishlistContext.jsx";
import { Link } from "react-router-dom";
import { SINGLEVIEW } from "../../constant/AppConstant.js";
import { DropdownList } from "react-widgets";

export const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchFilters, setSearchFilters] = useState({
    name: "",
    type: "",
    minPrice: "",
    maxPrice: "",
  });

  const {
    wishlist,
    toggleWishlist,
    handleDragStart,
    handleDrop,
    handleDragOver,
    clearWishlist,
  } = useWishlist();

  useEffect(() => {
    if (propertiesData?.properties) {
      setProperties(propertiesData?.properties);
      setFilteredProperties(propertiesData?.properties);
    }
  }, []);

  const handleSearch = () => {
    const { name, type, minPrice, maxPrice } = searchFilters;

    const filtered = properties?.filter((property) => {
      const matchesName = name
        ? property?.type.toLowerCase().includes(name.toLowerCase())
        : true;
      const matchesType = type
        ? property?.type.toLowerCase() === type.toLowerCase()
        : true;
      const matchesMinPrice = minPrice
        ? property?.price >= parseInt(minPrice, 10)
        : true;
      const matchesMaxPrice = maxPrice
        ? property?.price <= parseInt(maxPrice, 10)
        : true;

      return matchesName && matchesType && matchesMinPrice && matchesMaxPrice;
    });

    setFilteredProperties(filtered);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchFilters({ ...searchFilters, [name]: value });
  };

  return (
    <div className="container py-4">
      <div className="row sticky-top bg-light pt-4">
        <div className="col-md-3 mb-4">
          <div className="bg-light shadow rounded p-3 sticky-top">
            <h5 className="fw-bold mb-3">Wishlist</h5>
            <div
              className="wishlist-drop-zone text-center"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              style={{
                marginTop: "20px",
                padding: "20px",
                border: "2px dashed #ccc",
                borderRadius: "8px",
              }}
            >
              Drag items here to add to your wishlist or outside to remove them
            </div>
            {wishlist?.length > 0 ? (
              <>
                <ul className="list-group">
                  {properties
                    .filter((property) => wishlist?.includes(property.id))
                    .map((property) => (
                      <li
                        key={property.id}
                        draggable="true"
                        onDragStart={(e) => handleDragStart(e, property.id)}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        <Link
                          className="nav-link text-dark"
                          to={`../${SINGLEVIEW}/${property?.id}`}
                        >
                          <span>{property.type}</span>
                        </Link>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => toggleWishlist(property.id)}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                </ul>
                <button
                  onClick={clearWishlist}
                  className="btn btn-danger mt-3 w-100"
                >
                  Clear All Wishlist
                </button>
              </>
            ) : (
              <p className="text-muted">No items in wishlist</p>
            )}
          </div>
        </div>
        <div className="col-md-9">
          <div className="row mb-4">
            <div className="col-12">
              <form
                className="row g-3 align-items-end"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
              >
                <div className="col-md-4">
                  <label htmlFor="name" className="form-label">
                    Search by Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="e.g., House, Apartment"
                    value={searchFilters.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-md-3">
                  <label htmlFor="type" className="form-label">
                    Property Type
                  </label>
                  <DropdownList
                    id="type"
                    name="type"
                    data={["House", "Apartment", "Villa"]}
                    value={searchFilters.type}
                    onChange={(value) =>
                      setSearchFilters((prev) => ({ ...prev, type: value }))
                    }
                    className="form-control"
                  />
                </div>

                <div className="col-md-2">
                  <label htmlFor="minPrice" className="form-label">
                    Min Budget
                  </label>
                  <input
                    type="number"
                    id="minPrice"
                    name="minPrice"
                    className="form-control"
                    placeholder="e.g., 500000"
                    value={searchFilters.minPrice}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-md-2">
                  <label htmlFor="maxPrice" className="form-label">
                    Max Budget
                  </label>
                  <input
                    type="number"
                    id="maxPrice"
                    name="maxPrice"
                    className="form-control"
                    placeholder="e.g., 1000000"
                    value={searchFilters.maxPrice}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-md-1 text-end">
                  <button type="submit" className="btn btn-primary">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {filteredProperties?.map((property) => (
          <div
            key={property.id}
            draggable="true"
            onDragStart={(e) => handleDragStart(e, property?.id)}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          >
            <PropertyCard
              property={property}
              onWishlistToggle={() => toggleWishlist(property?.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
