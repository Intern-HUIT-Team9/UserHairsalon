import React from "react";
import BlogItem from "./BlogItem";
import Sidebar from "./sidebar";
import Pagination from "./Pagination";
import { Fragment } from "react";
const Blog = () => {
  const mockPosts = Array(8).fill({
    title: "Phối đồ cho tóc vàng ánh rơm: Phong cách năng động và quyến rũ",
    excerpt: "Tạo kiểu tóc phù hợp để tôn lên vẻ đẹp hiện đại và thu hút.",
    image: "https://via.placeholder.com/150",
    date: "18/11/2024",
    category: "Cẩm nang cho tóc",
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-pink-100 p-6 rounded-lg shadow-lg w-full">
        <h3 className="text-sm text-gray-500">
          Trang chủ &gt; Tin Tức &gt; Blogs
        </h3>
        <h1 className="text-lg text-pink-600 mt-2 font-bold">
          Tóc vàng ánh rơm là một màu tóc khá nổi bật và thu hút sự chú ý.
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-6">
          {/* Ảnh lớn */}
          <div className="md:col-span-1 flex justify-center">
            <img
              src="https://via.placeholder.com/300x300"
              alt="Hair style"
              className="rounded-lg"
            />
          </div>

          {/* 4 ảnh nhỏ 2x2 */}
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center bg-white p-3 rounded-lg shadow-md"
              >
                <img
                  src="https://via.placeholder.com/80"
                  alt={`Mini hair style ${index + 1}`}
                  className="w-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">Blogs</h1>
      <div className="grid grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="col-span-8">
          <div className="grid grid-cols-2 gap-6">
            {mockPosts.map((post, index) => (
              <BlogItem key={index} {...post} />
            ))}
          </div>
          <Pagination />
        </div>

        {/* Sidebar */}
        <div className="col-span-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Blog;
