import React from "react";
import "../styles/Categories.css";
const Categories = ({ categories, onSelectCategory }) => {
  return (
    <div className="categories">
      <h3>Categories</h3>
      <ul>
        <li onClick={() => onSelectCategory("")}>All</li>
        {categories.map((category) => (
          <li key={category} onClick={() => onSelectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
