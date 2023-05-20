import React, { useEffect, useState } from "react";
import "./properties.css";
import propertiesData from "./data.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Property = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProperties(propertiesData);
    setFilteredProperties(propertiesData);
  }, []);

  const handleFilter = () => {
    let filtered = propertiesData.filter((property) => {
      let priceMatch = true;
      let locationMatch = true;
      let bedroomsMatch = true;
      let bathroomsMatch = true;

      if (minPrice && property.price < parseInt(minPrice)) {
        priceMatch = false;
      }

      if (maxPrice && property.price > parseInt(maxPrice)) {
        priceMatch = false;
      }

      if (
        location &&
        property.location.toLowerCase() !== location.toLowerCase()
      ) {
        locationMatch = false;
      }

      if (bedrooms && property.bedrooms !== parseInt(bedrooms)) {
        bedroomsMatch = false;
      }

      if (bathrooms && property.bathrooms !== parseInt(bathrooms)) {
        bathroomsMatch = false;
      }

      return priceMatch && locationMatch && bedroomsMatch && bathroomsMatch;
    });
    if (search) {
      filtered = filtered.filter((property) => {
        return property.name.toLowerCase().includes(search.toLowerCase());
      });
    }

    setFilteredProperties(filtered);
  };

  const handleResetFilters = () => {
    setMinPrice("");
    setMaxPrice("");
    setLocation("");
    setBedrooms("");
    setBathrooms("");
    setSearch("");
    setFilteredProperties(properties);
  };

  return (
    <section id="properties">
      <h2>Properties for Sale and Rent</h2>
      <div className="filters">
        <select value={minPrice} onChange={(e) => setMinPrice(e.target.value)}>
          <option value="">Min Price</option>
          <option value="1000">Rs 1000</option>
          <option value="2000">Rs 2000</option>
          <option value="3000">Rs 3000</option>
        </select>

        <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
          <option value="">Max Price</option>
          <option value="25000">Rs 25000</option>
          <option value="10000">Rs 10000</option>
        </select>

        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Location</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Mumbai">Mumbai</option>
        </select>

        <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
          <option value="">Bedrooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <select
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
        >
          <option value="">Bathrooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>

        <input
          className="search__input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name..."
        />
        <button className="filter__btn" onClick={handleFilter}>
          Filter
        </button>
        <button className="filter__btn" onClick={handleResetFilters}>
          Reset
        </button>
      </div>

      <div className="property-list" id="property">
        {filteredProperties &&
          filteredProperties.map((property) => (
            <div key={property.id} className="property-item">
              <LazyLoadImage className="img"
                effect="blur"
                src={property.images[0]}
                alt="Property"
              />
              <div>Hotel Name: {property.name}</div>
              <div>Type: {property.type}</div>
              <div>Price: {property.price}</div>
              <div>Location: {property.location}</div>
              <div>Bedrooms: {property.bedrooms}</div>
              <div>Bathrooms: {property.bathrooms}</div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Property;
