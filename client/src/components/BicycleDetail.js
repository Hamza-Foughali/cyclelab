import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/BicycleDetail.css";

const BicycleDetail = ({ addToCart }) => {
  const [bicycle, setBicycle] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBicycle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/bicycles/${id}`
        );
        setBicycle(response.data);
      } catch (err) {
        console.error("Error fetching bicycle:", err);
        setError("Failed to load bicycle details.");
      }
    };

    fetchBicycle();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!bicycle) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bicycle-detail">
      <h2>{bicycle.name}</h2>
      {bicycle.imageURL && <img src={bicycle.imageURL} alt={bicycle.name} />}
      <p>Type: {bicycle.type}</p>
      <p>Price: ${bicycle.price}</p>
      <p>{bicycle.description}</p>
      <button className="add-to-cart-button" onClick={() => addToCart(bicycle)}>
        Add to Cart
      </button>
    </div>
  );
};

export default BicycleDetail;
