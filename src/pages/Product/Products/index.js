import React from "react";
import styles from "./Products.module.scss";
import gift1 from "~/assets/images/product/product1.jpg";
const Product = ({ name, price, img }) => {
  return (
    <div
      className={`${styles.productCard} bg-white shadow-md rounded-md p-4 text-center`}
    >
      <img
        src={gift1}
        alt={name}
        className={`${styles.productImage} mx-auto mb-4`}
      />
      <h4 className="text-md font-semibold mb-2">{name}</h4>
      <p className="text-pink-600 font-bold">{price}</p>
      <button className="mt-4 bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700">
        Thêm vào giỏ
      </button>
    </div>
  );
};

export default Product;
