import React from "react";
import ProductDetail from "./ProductDetail";
import ProductFilter from "./ProductFilter";

const App = () => {
  return (
    <div className="container mx-auto py-8">
      <header className="mb-8 text-sm text-gray-500">
        <nav>
          Trang chủ {" > "} Sản phẩm {" > "} MOROCCANOIL {" > "} XỊT PERFECT
          DEFENCE 240ML
        </nav>
      </header>
      <div className="grid grid-cols-12 gap-8">
        {/* Sidebar Filter */}
        <aside className="col-span-3">
          <ProductFilter />
        </aside>

        {/* Main Product Section */}
        <main className="col-span-9">
          <ProductDetail />
        </main>
      </div>
    </div>
  );
};

export default App;
