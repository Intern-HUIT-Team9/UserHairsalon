import React, { useState } from 'react';
import khachhang from "../../assets/images/khachhang.jpg";
import nhanvien from "../../assets/images/nhanvien.jpg";
import congdong from "../../assets/images/congdong.jpg";
import tn1 from "../../assets/images/tn1.jpg"
import tn2 from "../../assets/images/tn2.jpg"
import tn3 from "../../assets/images/tn3.jpg";

function AboutUs() {
    const [activeTab, setActiveTab] = useState("gioiThieu");

    const renderContent = () => {
        if (activeTab === "gioiThieu") {
            return (
                <>
                    <div className="flex justify-center items-center px-4 py-5 w-full">
                        <div className="md:mr-40 text-justify">
                            <p className="text-4xl font-bold text-gray-800 leading-none" style={{ textShadow: '0px 5px 4px #2E2583' }}>
                                HAIR<br />SALON
                            </p>
                        </div>
                        <div className="max-w-full md:max-w-xl text-justify text-base">
                            <p>
                                Tự hào là chuỗi salon chuyên gia, có uy tín trong ngành làm đẹp tại Việt Nam. Tóc đẹp mỗi ngày là lời cam kết của Lê Hiếu Hair Salon với khách hàng và vẻ đẹp nghệ thuật không chỉ nằm ở sự hào nhoáng của vẻ ngoài, mà còn nằm ở tiêu chuẩn “vàng” của mỗi nhà sáng tạo.
                            </p>
                        </div>
                    </div>
                    <p className="flex justify-center items-center mx-4 sm:mx-10 md:mx-20 lg:mx-32 mb-5 text-justify">
                        Với cam kết không ngừng đổi mới và phát triển, chúng tôi hướng tới việc đáp ứng sự đa dạng phong cách của khách hàng. Traky không chỉ hứa hẹn mang đến cho bạn một trải nghiệm làm đẹp, mà còn tạo ra một hành trình khám phá và tận hưởng sự hoàn hảo của cá nhân.
                    </p>
                </>

            );
        } else if (activeTab === "suMenh") {
            return (
                <>
                    <div className="flex justify-between items-center py-5 w-full ml-5">
                        <p className="text-justify text-base max-w-full text-gray-800">
                            Sứ mệnh của chúng tôi là mang đến cho khách hàng những trải nghiệm làm đẹp tốt nhất với các dịch vụ chuyên nghiệp và tận tâm. Chúng tôi luôn nỗ lực trong việc phát triển để đáp ứng và vượt qua mong đợi của khách hàng.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-10 ml-5 mr-5">

                        <a href="#" className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                            <div className="w-full">
                                <img style={{ height: "330px" }} className="object-cover w-full h-96 md:h-auto rounded-t-lg md:rounded-lg md:rounded-l-lg" src={tn1} alt="" />
                            </div>
                        </a>
                        <a href="#" className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                            <div className="w-full">
                                <img style={{ height: "330px" }} className="object-cover w-full h-96 md:h-auto rounded-t-lg md:rounded-lg md:rounded-l-lg" src={tn2} alt="" />
                            </div>
                        </a>
                        <a href="#" className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="w-full">
                                <img style={{ height: "330px" }} className="object-cover w-full h-96 md:h-auto rounded-t-lg md:rounded-lg md:rounded-l-lg" src={tn3} alt="" />
                            </div>
                        </a>
                    </div>
                </>
            );
        } else if (activeTab === "tamNhin") {
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 ml-5 mr-5">
                    <div className="p-2 max-w-full bg-transparent border-none rounded-lg">
                        <a href="#" className="block w-[60%] h-[60%] sm:w-2/3 sm:h-2/3 md:w-[60%] md:h-[60%] overflow-hidden rounded-full border-2 mx-auto">
                            <img className="object-cover w-full h-full" src={khachhang} alt="" />
                        </a>
                        <div className="py-2 px-5">
                            <a href="#">
                                <h5 className="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white capitalize">Khách hàng</h5>
                            </a>
                            <p className="text-base sm:text-lg font-normal text-gray-700 dark:text-gray-400">
                                Hair Salon là hệ thống Salon làm đẹp đáp ứng đầy đủ đa dạng nhu cầu của khách hàng.
                            </p>
                        </div>
                    </div>
                    <div className="p-2 max-w-full bg-transparent border-none rounded-lg">
                        <a href="#" className="block w-[60%] h-[60%] sm:w-2/3 sm:h-2/3 md:w-[60%] md:h-[60%] overflow-hidden rounded-full border-2 mx-auto">
                            <img className="object-cover w-full h-full" src={nhanvien} alt="" />
                        </a>
                        <div className="py-2 px-5">
                            <a href="#">
                                <h5 className="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white capitalize">Nhân viên</h5>
                            </a>
                            <p className="text-base sm:text-lg font-normal text-gray-700 dark:text-gray-400">
                                Một cộng đồng năng động, nơi mọi thành viên có thể tự hào, hăng say học hỏi, và đóng góp để hướng đến một cuộc sống thịnh vượng và hạnh phúc
                            </p>
                        </div>
                    </div>
                    <div className="p-2 max-w-full bg-transparent border-none rounded-lg">
                        <a href="#" className="block w-[60%] h-[60%] sm:w-2/3 sm:h-2/3 md:w-[60%] md:h-[60%] overflow-hidden rounded-full border-2 mx-auto">
                            <img className="object-cover w-full h-full" src={congdong} alt="" />
                        </a>
                        <div className="py-2 px-5">
                            <a href="#">
                                <h5 className="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white capitalize">Cộng đồng</h5>
                            </a>
                            <p className="text-base sm:text-lg font-normal text-gray-700 dark:text-gray-400">
                                Tổ chức hỗ trợ các chương trình cộng đồng, góp phần xây dựng một xã hội ngày càng phồn thịnh và hạnh phúc
                            </p>
                        </div>
                    </div>
                </div>
            );
        } else if (activeTab === "giaTri") {
            return (
                <div className="flex flex-col items-center justify-center min-h-screen bg-white relative">
                    <h2 className="font-bold text-5xl uppercase text-center mb-10 items-center absolute mt-4 text-gray-500 blur-[2px]">
                        Hair Salon
                    </h2>


                    <div class="grid grid-cols-2 gap-10 md:gap-[16rem] text-center">
                        <div class="relative border rounded-full p-6 w-48 h-48 flex items-center justify-center">
                            <div>
                                <h3 class="text-xl font-bold text-indigo-700 absolute top-[-3px] w-[120px] left-9 bg-white">Sáng Tạo</h3>
                                <p class="text-gray-500 text-sm mt-2">Khám phá và tạo ra những kiểu tóc độc đáo và phù hợp với cá tính mới khách hàng.</p>
                            </div>
                        </div>
                        <div class="relative border rounded-full p-6 w-48 h-48 flex items-center justify-center">
                            <div>
                                <h3 class="text-xl font-bold text-indigo-700 absolute top-[-3px] w-[120px] left-9 bg-white ">Đẳng Cấp</h3>
                                <p class="text-gray-500 text-sm mt-2">Mang đến trải nghiệm làm đẹp chất lượng, đẳng cấp, đáp ứng mọi nhu cầu của khách hàng.</p>
                            </div>
                        </div>
                        <div class="relative border rounded-full p-6 w-48 h-48 flex items-center justify-center">
                            <div>
                                <h3 class="text-xl font-bold text-indigo-700 absolute top-[-3px] w-[120px] left-9 bg-white">Tận Tâm</h3>
                                <p class="text-gray-500 text-sm mt-2">Cam kết chăm sóc tóc và làm đẹp với từng chi tiết tuyệt vời dành riêng cho khách hàng.</p>
                            </div>
                        </div>
                        <div class="relative border rounded-full p-6 w-48 h-48 flex items-center justify-center">
                            <div>
                                <h3 class="text-xl font-bold text-indigo-700 absolute top-[-3px] w-[120px] left-9 bg-white">Đổi Mới</h3>
                                <p class="text-gray-500 text-sm mt-2">Liên tục nghiên cứu và phát triển các dịch vụ mới, làm hài lòng với sự đa dạng của khách hàng.</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <>
            <nav className="flex bg-gradient-to-r from-[#D5D2D2] via-[#D5D2D2] to-[#908888] p-2" style={{ background: 'linear-gradient(90deg, #f3f0f0 40%, #e6e6e6 93%)', fontFamily: "Labrada" }} aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center ml-10 ">
                        <a href="#" className="inline-flex items-center text-lg font-medium text-black hover:text-pink-600 dark:text-gray-400 dark:hover:text-white">
                            Trang chủ
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <a href="#" className="ms-1 text-lg font-bold text-black hover:text-pink-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                                Về chúng tôi
                            </a>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="w-full bg-white">
                <h2 className='font-bold text-2xl uppercase text-center mt-4'>Hair Salon</h2>
                <div className="sm:hidden">
                    <label for="tabs" className="sr-only">Select tab</label>
                    <select
                        id="tabs"
                        className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => setActiveTab(e.target.value)}
                    >
                        <option value="gioiThieu">Giới thiệu</option>
                        <option value="suMenh">Sứ mệnh</option>
                        <option value="tamNhin">Tầm nhìn</option>
                        <option value="giaTri">Giá trị cốt lõi</option>
                    </select>
                </div>

                <ul className="hidden text-lg justify-center  font-medium text-center text-gray-500 divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse">
                    <li>
                        <button onClick={() => setActiveTab("gioiThieu")} className={`inline-block w-full p-4 rounded-ss-lg hover:text-pink-500 hover:font-bold focus:outline-none ${activeTab === "gioiThieu" ? "text-pink-500 font-bold" : "text-gray-600"}`}>Giới thiệu</button>
                    </li>
                    <li>
                        <button onClick={() => setActiveTab("suMenh")} className={`inline-block w-full p-4 hover:text-pink-500 hover:font-bold focus:outline-none ${activeTab === "suMenh" ? "text-pink-500 font-bold" : "text-gray-600"}`}>Sứ mệnh</button>
                    </li>
                    <li>
                        <button onClick={() => setActiveTab("tamNhin")} className={`inline-block w-full p-4 hover:text-pink-500 hover:font-bold focus:outline-none ${activeTab === "tamNhin" ? "text-pink-500 font-bold" : "text-gray-600"}`}>Tầm nhìn</button>
                    </li>
                    <li>
                        <button onClick={() => setActiveTab("giaTri")} className={`inline-block w-full p-4 rounded-se-lg hover:text-pink-500 hover:font-bold focus:outline-none ${activeTab === "giaTri" ? "text-pink-500 font-bold" : "text-gray-600"}`}>Giá trị cốt lõi</button>
                    </li>
                </ul>
                <div id="fullWidthTabContent">
                    {renderContent()}
                </div>
            </div>
        </>
    );
}

export default AboutUs;

