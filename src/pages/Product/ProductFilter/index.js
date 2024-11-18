import React from "react";
import styles from "./ProductFilter.module.scss";

const ProductFilter = ({ categories, prices, onFilterChange }) => {
  return (
    <div className={`${styles.filterContainer} p-4 bg-gray-100 rounded-md`}>
      <h3 className="font-semibold text-lg mb-4">Danh mục sản phẩm</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-2">
            <input
              type="checkbox"
              id={`category-${index}`}
              className="mr-2"
              onChange={() => onFilterChange("category", category)}
            />
            <label htmlFor={`category-${index}`}>{category}</label>
          </li>
        ))}
      </ul>

      <h3 className="font-semibold text-lg mt-6 mb-4">Chọn mức giá</h3>
      <ul>
        {prices.map((price, index) => (
          <li key={index} className="mb-2">
            <input
              type="radio"
              name="price"
              id={`price-${index}`}
              className="mr-2"
              onChange={() => onFilterChange("price", price)}
            />
            <label htmlFor={`price-${index}`}>{price}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
