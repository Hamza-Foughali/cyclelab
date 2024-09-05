import React, { useState } from "react";
import axios from "axios";
import "../styles/DeleteBicycle.css";
const DeleteBicycle = () => {
  const [id, setId] = useState("");

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/bicycles/${id}`);
      console.log("Bicycle deleted");
    } catch (error) {
      console.error("Failed to delete bicycle", error);
    }
  };

  return (
    <div className="delete-bicycle-container">
      <h2>Delete Bicycle</h2>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <button onClick={handleDelete}>Delete Bicycle</button>
    </div>
  );
};

export default DeleteBicycle;
