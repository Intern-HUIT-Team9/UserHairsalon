import React from "react";
import job1 from "../../assets/images/Job1.jpg";
const CareerOpportunities = () => {
  const mockJobs = [
    {
      id: 1,
      title: "Tuyển dụng Thợ phụ , Thợ chính",
      date: "10/10/2024",
      image: job1,
      description:
        "TRAKY HAIR SALON Tuyển dụng Thợ Chính, Thợ Phụ số lượng lớn các chi nhánh. Yêu cầu: Biết pha nhuộm, uốn, biết gội đầu. Biết nỗ lực Chăm chỉ, vui vẻ, siêng năng. Lợi ích: Mức lương, hoa hồng hậu.",
    },
    {
      id: 2,
      title: "Traky tuyển dụng nhân viên Editor",
      date: "10/10/2024",
      image: job1,
      description:
        "Công ty TNHH thương mại dịch vụ đào tạo D Traky Việt Nam. Lương từ 8tr - 10tr. Làm việc từ T2 - sáng T7. Địa chỉ: Văn phòng lầu 12, 15 Pasteur, Q.1.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        Trang chủ &gt; Tin Tức &gt;{" "}
        <span className="text-gray-700 font-medium">Cơ Hội Nghề Nghiệp</span>
      </nav>

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        CƠ HỘI NGHỀ NGHIỆP
      </h1>

      {/* Job List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockJobs.map((job) => (
          <div
            key={job.id}
            className="bg-gray-50 border rounded-lg p-4 shadow-sm"
          >
            <div className="flex flex-col w-full">
              {/* Hình ảnh */}
              <div className="w-full">
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>

              {/* Nội dung */}
              <div className="mt-4">
                <h2 className="text-lg font-bold text-gray-800">{job.title}</h2>
                <p className="text-sm text-gray-500 mt-2">{job.date}</p>
                <p className="text-sm text-gray-700 mt-2">{job.description}</p>
                <a
                  href="#"
                  className="inline-block text-pink-500 mt-4 font-medium hover:underline"
                >
                  Xem Chi Tiết &gt;&gt;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button className="px-3 py-2 border rounded-l-md bg-gray-100 hover:bg-gray-200">
          &laquo;
        </button>
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`px-3 py-2 border ${
              page === 1
                ? "bg-pink-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}
        <button className="px-3 py-2 border rounded-r-md bg-gray-100 hover:bg-gray-200">
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default CareerOpportunities;
