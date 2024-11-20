import React from "react";

const BlogItem = ({ title, excerpt, image, date, category }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-sm text-gray-600">{date}</span>
        <h3 className="font-semibold text-lg text-gray-800 mt-2">{title}</h3>
        <p className="text-gray-600 mt-2">{excerpt}</p>
        <a
          href="#"
          className="text-blue-500 hover:text-blue-700 text-sm mt-4 inline-block"
        >
          Xem chi tiết →
        </a>
      </div>
    </div>
  );
};

export default BlogItem;
