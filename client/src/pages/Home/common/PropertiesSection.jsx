import React, { useEffect, useState } from "react";
import { PropertyCard } from "../../../components";
import propertiesData from "../../../data/properties.json";

export const PropertiesSection = (count) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties(
      count.count
        ? propertiesData.properties.slice(0, count.count)
        : propertiesData.propertiess
    );
  }, []);

  return (
    <>
      <div className="row">
        {properties.map((property) => (
          <div
            key={property.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          >
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </>
  );
};
