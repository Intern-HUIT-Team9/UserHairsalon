import React from "react";
import styles from "./Footer.module.scss";
import img_slogan from "../../../../assets/images/img_slogan.png";
import map from "../../../../assets/images/map.png"

function Footer() {
  return (
    <>

      <footer>
        <div className={styles.footer_content}>
          <div className={styles.footer_section}>
            <h3>Thông tin chung</h3>
            <ul>
              <li>
                <a href="#" className={styles.active}>
                  <i className="fa-solid fa-house"></i>Trang chủ
                </a>
              </li>
              <li>
                <a href="/about_us">Về chúng tôi</a>
              </li>
              <li>
                <a href="/promotion">Chương trình khuyến mãi</a>
              </li>
              <li>
                <a href="/private_policy">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="/faq">Những câu hỏi thường gặp</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer_section}>
            <h3>Địa chỉ</h3>
            <div className={styles.branch}>
              <p>
                <span>Chi nhánh chính:</span> 140, Lê Trọng Tấn, Tân Phú, PHCM
              </p>
              <p>
                <span>Chi nhánh 1:</span> 140, Lê Trọng Tấn, Tân Phú, PHCM
              </p>
              <p>
                <span>Chi nhánh 2:</span> 140, Lê Trọng Tấn, Tân Phú, PHCM
              </p>
            </div>
            <div className={styles.map}>
              <img
                src={map}
                alt="Map Image"
              />
            </div>
          </div>
          <div className={styles.footer_section}>
            <h3>Theo dõi chúng tôi</h3>
            <ul className={styles.social_links}>
              <li>
                <a href="#"><i className="fa-brands fa-facebook" style={{color:"#0659ea"}}></i>&nbsp;Facebook</a>
              </li>
              <li>
                <a href="#">
                <i className="fa-brands fa-youtube" style={{color:'#f7082c'}}></i>Youtube{" "}
                  <button className={styles.subscribe}><i className="fa-solid fa-bell"></i>&nbsp;Subscribe</button>
                </a>
              </li>
              <li>
                <a href="#"><i className="fa-brands fa-tiktok"></i>&nbsp;Tiktok</a>
              </li>
            </ul>
            <div className={styles.newsletter}>
              <h3>Đăng ký ngay!</h3>
              <p>
                <b>
                  <i>Đăng ký để nhận ngay các ưu đãi nhé!!!</i>
                </b>
              </p>
              <input type="email" placeholder="Enter your email..." />
              <button>Đăng ký&nbsp;<i className="fa-solid fa-hand-pointer"></i></button>
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <hr />
          <p
            className={styles.slogan}
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span>Change your style, change your life</span>
            <img
              className={styles.dark_image}
              src={img_slogan}
              width={40}
              height={40}
            />
          </p>
          <p>
            <i>© 2024 AllTop.vn, Inc. All rights reserved.</i>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
