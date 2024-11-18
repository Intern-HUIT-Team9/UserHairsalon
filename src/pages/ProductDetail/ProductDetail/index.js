import React from "react";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import product1 from "~/assets/images/product/product1.jpg";

const ProductDetail = () => {
  const relatedProducts = Array(4).fill({
    name: "Xịt Bảo Vệ Toàn Diện Perfect Defense 75ml",
    price: "299.43",
    img: product1,
  });

  return (
    <div>
      {/* Product Info */}
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-5">
          <img src={product1} alt="product" className="rounded-lg" />
        </div>
        <div className="col-span-7">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            Gôm Xịt Giữ Nếp Linh Hoạt Siêu Mạnh Moroccanoil
          </h1>
          <p className="text-lg text-blue-600 font-semibold">589.000vnd</p>
          <p className="mt-2 text-sm text-gray-600">
            Kẹo xịt tóc giữ nếp lâu dài, siêu mạnh giúp tăng độ bóng và chống xơ
            rối mà không để lại cặn.
          </p>
          <div className="mt-6 flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded">
              <button className="p-2">
                <MinusIcon className="h-5 w-5 text-gray-600" />
              </button>
              <span className="px-4">2</span>
              <button className="p-2">
                <PlusIcon className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Add To Cart
            </button>
            <HeartIcon className="h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12">
        <div className="border-b border-gray-300 flex space-x-6 text-sm">
          <button className="py-2 px-4 border-b-2 border-blue-600 font-medium">
            Product Information
          </button>
          <button className="py-2 px-4 text-gray-600">Reviews (0)</button>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          Keo xịt tóc siêu mạnh, hoàn thiện của chúng tôi giữ nếp lâu dài cho
          những kiểu tóc khó nhất. Moroccanoil® Luminous Hairspray Extra Strong
          là keo xịt tóc định hình tối ưu giúp giữ nếp cho các kiểu tóc đặc
          biệt: từ kiểu tóc đuôi ngựa bóng mượt đến búi tóc cho đến kiểu tóc
          thảm đỏ. Công thức giữ nếp siêu mạnh, hiệu suất cao này được truyền
          dầu argan phủ lên tóc một lớp màng bóng phản chiếu chống lại độ ẩm và
          xơ rối, nhưng vẫn dễ chải và không để lại cặn dính.
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold mb-4">RELATED PRODUCTS</h2>
        <div className="grid grid-cols-4 gap-4">
          {relatedProducts.map((product, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-lg"
            >
              <img src={product.img} alt="related" className="mb-2 rounded" />
              <h3 className="text-sm font-medium text-gray-800">
                {product.name}
              </h3>
              <p className="text-blue-600 font-semibold">{product.price}đ</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
