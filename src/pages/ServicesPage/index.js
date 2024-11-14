import React from "react";
import service1 from "./images/hair_services/service1.jpg";
import service2 from "./images/hair_services/service2.jpg";
import service3 from "./images/hair_services/service3.jpg";
import "./Services.module.scss";

function ServicesPage() {
  return (
    <div className="services">
      <h2>Dịch vụ</h2>
      <div className="service-cards">
        <div className="service-card">
          <img src={service1} alt="Uốn/Duỗi/Nhuộm" />
          <div className="service-info">
            <h3>Uốn/Duỗi/Nhuộm</h3>
            <p>Giá từ: 350.000vnđ</p>
            <button>Đặt lịch ngay</button>
          </div>
        </div>
        <div className="service-card">
          <img src={service2} alt="Nối Tóc" />
          <div className="service-info">
            <h3>Nối Tóc</h3>
            <p>Giá từ: 15.000vnđ</p>
            <button>Đặt lịch ngay</button>
          </div>
        </div>
        <div className="service-card">
          <img src={service3} alt="Phục Hồi" />
          <div className="service-info">
            <h3>Phục Hồi</h3>
            <p>Giá từ: 300.000vnđ</p>
            <button>Đặt lịch ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
