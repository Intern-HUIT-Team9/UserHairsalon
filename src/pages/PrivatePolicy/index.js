import React from "react";
import styles from "./PrivatePolicy.module.scss"


function PrivatePolicy() {
    return ( 
        <>
            <nav 
                className="flex bg-gradient-to-r from-[#D5D2D2] via-[#D5D2D2] to-[#908888] p-2" 
                style={{ background: 'linear-gradient(90deg, #f3f0f0 40%, #e6e6e6 93%)', fontFamily:"Labrada" }} 
                aria-label="Breadcrumb"
            >
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center ml-10 ">
                        <a href="#" className=" inline-flex items-center text-lg font-medium text-black hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                            </svg>
                          Trang chủ
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <a href="#" className="ms-1 text-lg font-bold text-black hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                                Chính sách bảo mật
                            </a>
                        </div>
                    </li>
                </ol>
            </nav>
            <div className="flex items-center gap-3 mt-3 mb-3">
                <div className={styles.borderFrame}></div>
                <span className="font-bold items-center text-3xl ">Chính sách bảo mật</span>
            </div>
            <div className="flex items-center gap-3 mt-3 mb-3 ml-20">
                <span className="font-bold" style={{color:'#BFB1B1'}}><i className="fa-solid fa-calendar-days"></i>&nbsp;&nbsp;Ngày đăng: 17/10/2024</span> 
                <span className="font-bold ml-16" style={{color:'#BFB1B1'}}><i className="fa-solid fa-eye"></i>&nbsp;&nbsp;100k lượt xem</span> 
            </div>


            <h2 className="flex justify-center uppercase font-bold text-4xl">Chính sách bảo mật</h2>
            <div className="flex flex-col m-10 text-lg text-justify p-10" >
                <p >
                Hair Salon cam kết sẽ bảo mật những thông tin mang tính riêng tư của khách hàng. Quý khách vui lòng đọc “Chính sách bảo mật” dưới đây trước khi truy cập những nội dung khác để hiểu hơn những cam kết mà chúng tôi thực hiện, nhằm tôn trọng và bảo vệ quyền lợi của người truy cập:
                </p>
                
                <p className="font-bold" >
                1. Thu thập thông tin cá nhân:
                </p>
                <span className="ml-2">
                    Các thông tin thu thập sẽ giúp chúng tôi:
                </span>    
                <p className="ml-4">
                    – Hỗ trợ khách hàng khi mua sản phẩm.<br/>
                    – Giải đáp thắc mắc khách hàng.<br/>
                    – Cung cấp cho quý khách thông tin mới nhất của chúng tôi.<br/>
                </p>  


                <p className="font-bold" >
                2. Phạm vi sử dụng thông tin:
                </p>
                <p className="ml-4">
                    – Hair Salon thu thập và sử dụng thông tin cá nhân quý khách với mục đích phù hợp và hoàn toàn tuân thủ nội dung của “Chính sách bảo mật” này.<br/>
                    – Quý khách cũng có thể nhận được email cung cấp thông tin sản phẩm, sản phẩm mới, thông tin về các sự kiện sắp diễn ra.. nếu quý khách đăng ký nhận email thông báo.<br/>
                </p>    

                <p className="font-bold" >
                3. Thông tin liên hệ:
                </p>
                <p className="ml-4">
                –  Điện thoại: 0123456789.<br/>
                –  Email: a@gmail.com<br/>
                </p>    
                <p className="font-bold" >
                4. Bảo mật thông tin cá nhân:
                </p>
                <p className="ml-4">
                    – Không sử dụng, không chuyển giao, cung cấp hoặc tiết lộ cho bên thứ 3 về thông tin cá nhân của Người Tiêu Dùng khi không có sự đồng ý của Người Tiêu Dùng ngoại trừ các trường hợp được quy định tại quy định này hoặc quy định của pháp luật.<br/>
                    – Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của Người Tiêu Dùng bao gồm thông tin hóa đơn kế toán chứng từ số hóa tại khu vực dữ liệu trung tâm an toàn cấp 1 của  Hair Salon.<br/>
                </p>              
            </div>
        </>
    );
}

export default PrivatePolicy;
