import React from "react";
import service1 from "../../assets/images/hair_services/service1.jpg";
import service2 from "../../assets/images/hair_services/service2.jpg";
import service3 from "../../assets/images/hair_services/service3.jpg";
import styles from "./Services.module.scss"; 

function ServicesPage() {
    return ( 
        <div className={styles.services}>
        <h2>Dịch vụ</h2>
        <div className={styles["service-cards"]}>
          <div className={styles["service-card"]}>
            <img src={service1} alt="Uốn/Duỗi/Nhuộm" />
            <div className={styles["service-info"]}>
              <h3>Uốn/Duỗi/Nhuộm</h3>
              <p>Giá từ: 350.000vnđ</p>
              <button>Đặt lịch ngay</button>
            </div>
          </div>
          <div className={styles["service-card"]}>
            <img src={service2} alt="Nối Tóc" />
            <div className={styles["service-info"]}>
              <h3>Nối Tóc</h3>
              <p>Giá từ: 15.000vnđ</p>
              <button>Đặt lịch ngay</button>
            </div>
          </div>
          <div className={styles["service-card"]}>
            <img src={service3} alt="Phục Hồi" />
            <div className={styles["service-info"]}>
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