import React, { useState } from "react";
import axios from "axios";
import "../styles/CreateBicycle.css";

const CreateBicycle = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDesc] = useState("");
  const [imageURL, setImg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const xyz = { name, type, price, imageURL, description };
      console.log(xyz);

      const response = await axios.post(
        "http://localhost:3000/api/bicycles",
        xyz
      );
      console.log("Bicycle created:", response.data);
    } catch (error) {
      console.error("Failed to create bicycle", error);
    }
  };

  return (
    <form className="create-bicycle-form" onSubmit={handleSubmit}>
      <h2>Post your Bicycle</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        name="type"
        placeholder="Type"
        onChange={(e) => setType(e.target.value)}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={(e) => setDesc(e.target.value)}
        required
      />
      <input
        type="text"
        name="imageURL"
        placeholder="Image URL"
        onChange={(e) => setImg(e.target.value)}
        required
      />
      <button type="submit">Post your Bicycle</button>
    </form>
  );
};

export default CreateBicycle;
