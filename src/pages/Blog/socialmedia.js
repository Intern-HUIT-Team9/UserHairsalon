import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  const socialData = [
    {
      platform: "Facebook",
      icon: <FaFacebookF />,
      count: "10,000,000",
      label: "Fans",
    },
    {
      platform: "Instagram",
      icon: <FaInstagram />,
      count: "75,090",
      label: "Flowers",
    },
    {
      platform: "TikTok",
      icon: <FaTiktok />,
      count: "1,399,999",
      label: "Flowers",
    },
    {
      platform: "YouTube",
      icon: <FaYoutube />,
      count: "10,000,000",
      label: "Subscribers",
    },
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
      {/* Social Icons */}
      <div className="grid grid-cols-4 gap-4 text-center mb-6">
        {socialData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-gray-700 space-y-2"
          >
            <div className="text-4xl text-blue-500">{item.icon}</div>
            <div className="text-sm font-semibold">{item.count}</div>
            <div className="text-sm text-gray-500">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Special Offer Section */}
      <div className="relative bg-white rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/300x150"
          alt="Special Offer"
          className="w-full h-40 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end items-start p-4">
          <h3 className="text-lg font-bold text-white mb-1">SPECIAL OFFER</h3>
          <p className="text-sm text-white">Sale 30%</p>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
