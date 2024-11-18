import React from "react";

const ProductFilter = () => {
  const categories = ["Moroccanoil", "B3 Brazilian", "Olaplex"];
  const prices = [
    "Dưới 100.000đ",
    "100.000đ - 200.000đ",
    "200.000đ - 300.000đ",
    "300.000đ - 500.000đ",
    "500.000đ - 1 triệu",
    "Trên 1 triệu",
  ];

  return (
    <div className="bg-white border border-gray-200 shadow rounded-lg p-4">
      {/* Categories */}
      <h2 className="text-lg font-semibold border-b border-gray-300 pb-2">
        DANH MỤC SẢN PHẨM
      </h2>
      <ul className="mt-4 space-y-2">
        {categories.map((category, index) => (
          <li key={index} className="flex items-center">
            <input type="checkbox" id={`category-${index}`} className="mr-2" />
            <label
              htmlFor={`category-${index}`}
              className="text-gray-600 cursor-pointer hover:text-gray-800"
            >
              {category}
            </label>
          </li>
        ))}
      </ul>

      {/* Prices */}
      <h2 className="text-lg font-semibold border-b border-gray-300 pb-2 mt-6">
        CHỌN MỨC GIÁ
      </h2>
      <ul className="mt-4 space-y-2">
        {prices.map((price, index) => (
          <li key={index} className="flex items-center">
            <input type="checkbox" id={`price-${index}`} className="mr-2" />
            <label
              htmlFor={`price-${index}`}
              className="text-gray-600 cursor-pointer hover:text-gray-800"
            >
              {price}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
