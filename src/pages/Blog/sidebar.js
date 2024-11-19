import SocialMedia from "./socialmedia";
const Sidebar = () => {
  const mockSidebarPosts = Array(5).fill({
    title: "Tips chọn kiểu tóc phù hợp với khuôn mặt",
    image: "https://via.placeholder.com/150",
  });

  return (
    <div className="space-y-5">
      <div className="mx-auto">
        <div>
          <div className="col-span-8">{/* Nội dung chính */}</div>
          <div className="col-span-4">
            <SocialMedia />
          </div>
        </div>

        {/* Special Offer */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Special Offer</h3>
          <img src="https://via.placeholder.com/300x150" alt="Special Offer" />
        </div>

        {/* Related Posts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Xem Nhiều</h3>
          <div className="space-y-4">
            {mockSidebarPosts.map((post, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 rounded object-cover"
                />
                <p className="text-sm text-gray-800">{post.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
