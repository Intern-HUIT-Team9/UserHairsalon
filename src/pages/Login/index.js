import React, { useState } from "react";
import styles from './Login.module.scss';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
	return (
		<>
			<div className={styles.login_container}>
				<div className={styles.content_login}>
					<div className={styles.text_sci}>
						<h2 className={styles.animated_text}>
							Welcome !<br /> <span>To Website Hair Salon</span>
						</h2><br />
						<p className={styles.animated_text}>
							Đăng nhập ngay để có ưu đãi !!!!
						</p>
					</div>
				</div>
				<div className={styles.logreg_box}>
					<div className={`${styles.form_box} ${styles.login}`}>
						<form>
							<h2 style={{ textTransform: "uppercase" }}>Đăng nhập</h2>
							<div className={styles.input_box}>
								<span className={styles.icon}>
									<i className="fas fa-envelope"></i>
								</span>
								<input
									type="email"
									required
								/>
								<label>Email</label>
							</div>
							<div className={styles.input_box}>
								<span className={styles.icon}>
									<i className="fas fa-lock"></i>
								</span>
								<input
									type="password"
									required
								/>
								<label>Mật khẩu</label>
							</div>
							<div className={styles.remember_forgot}>
								<label>
									<input type="checkbox" />
									Remember me
								</label>
								<a href="#">Quên mật khẩu</a>
							</div>
							<button type="submit" className={styles.btn_login}>
								Đăng nhập <i className="fa-solid fa-paper-plane" style={{ color: 'white' }}></i>
							</button>
							<div className={styles.login_register}>
								<p>
									Nếu chưa có tài khoản?&nbsp;
									<a href="#" className={styles.register_link}>
										Đăng ký
									</a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
