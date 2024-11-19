import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      <button className="p-2 border rounded hover:bg-gray-100">
        <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
      </button>
      {[1, 2, 3, 4].map((page) => (
        <button
          key={page}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          {page}
        </button>
      ))}
      <button className="p-2 border rounded hover:bg-gray-100">
        <ChevronRightIcon className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  );
};

export default Pagination;
