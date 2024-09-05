import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/BicycleList.css";
import SearchBar from "./SearchBar";

const BicycleList = () => {
  const [bicycles, setBicycles] = useState([]);
  const [filteredBicycles, setFilteredBicycles] = useState([]);

  useEffect(() => {
    const fetchBicycles = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/bicycles");
        setBicycles(response.data);
        setFilteredBicycles(response.data);
      } catch (err) {
        console.error("Error fetching bicycles:", err);
      }
    };

    fetchBicycles();
  }, []);

  const handleSearch = (query) => {
    if (query === "") {
      setFilteredBicycles(bicycles);
    } else {
      setFilteredBicycles(
        bicycles.filter((bicycle) =>
          bicycle.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="bicycle_container">
      <SearchBar bicycles={bicycles} onSearch={handleSearch} />
      <ul className="bicycle-list">
        {filteredBicycles.map((bicycle) => (
          <li key={bicycle.id} className="bicycle-item">
            <Link to={`/bicycle/${bicycle.id}`}>
              <img src={bicycle.imageURL} alt={bicycle.name} />
            </Link>
            <Link to={`/bicycle/${bicycle.id}`} className="view-product-button">
              View Product
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BicycleList;
