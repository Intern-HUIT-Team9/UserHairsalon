import React, { useState } from "react";
import Product from "./Products";
import ProductFilter from "./ProductFilter";
import Pagination from "./Pagination";

const mockProducts = Array(12).fill({
  name: "Xịt Bóng Giữ Nếp Chắc Lumino",
  price: "85.000đ",
  img: "https://via.placeholder.com/150",
});

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const categories = ["Moroccanoil", "B3 Brazilian", "Olaplex"];
  const prices = [
    "Dưới 100.000đ",
    "100.000đ - 200.000đ",
    "200.000đ - 300.000đ",
    "300.000đ - 500.000đ",
    "500.000đ - 1 triệu",
    "Trên 1 triệu",
  ];

  const handleFilterChange = (type, value) => {
    console.log(`${type} filter changed to:`, value);
  };

  const displayedProducts = mockProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Danh sách sản phẩm
      </h1>
      <div className="grid grid-cols-4 gap-6">
        {/* Filter Section */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-4">
          <h2 className="font-semibold text-lg text-gray-800 border-b border-gray-300 pb-2">
            DANH MỤC SẢN PHẨM
          </h2>
          <ul className="mt-4 space-y-2">
            {categories.map((category, index) => (
              <li key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`category-${index}`}
                  className="mr-2 cursor-pointer"
                  onChange={() => handleFilterChange("category", category)}
                />
                <label
                  htmlFor={`category-${index}`}
                  className="cursor-pointer text-gray-600 hover:text-gray-800"
                >
                  {category}
                </label>
              </li>
            ))}
          </ul>

          <h2 className="font-semibold text-lg text-gray-800 border-b border-gray-300 pb-2 mt-6">
            CHỌN MỨC GIÁ
          </h2>
          <ul className="mt-4 space-y-2">
            {prices.map((price, index) => (
              <li key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`price-${index}`}
                  className="mr-2 cursor-pointer"
                  onChange={() => handleFilterChange("price", price)}
                />
                <label
                  htmlFor={`price-${index}`}
                  className="cursor-pointer text-gray-600 hover:text-gray-800"
                >
                  {price}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Section */}
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-4">
            {displayedProducts.map((product, index) => (
              <Product key={index} {...product} />
            ))}
          </div>
          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(mockProducts.length / productsPerPage)}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
