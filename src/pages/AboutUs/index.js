// function AboutUs() {
//     return ( 
//         <>
//             <nav 
//                 className="flex bg-gradient-to-r from-[#D5D2D2] via-[#D5D2D2] to-[#908888] p-2" 
//                 style={{ background: 'linear-gradient(90deg, #D5D2D2 40%, #908888 93%)', fontFamily:"Labrada" }} 
//                 aria-label="Breadcrumb"
//             >
//                 <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
//                     <li className="inline-flex items-center ml-10 ">
//                         <a href="#" className=" inline-flex items-center text-lg font-medium text-black hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
//                             <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                                 <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
//                             </svg>
//                           Trang chủ
//                         </a>
//                     </li>
//                     <li>
//                         <div className="flex items-center">
//                             <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
//                             </svg>
//                             <a href="#" className="ms-1 text-lg font-bold text-black hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
//                                 Về chúng tôi
//                             </a>
//                         </div>
//                     </li>
//                 </ol>
//             </nav>

//         <div className="text-center  mt-5">
//             <h1 className="text-lg font-bold">HAIR SALON</h1>
//             <nav className="flex justify-center space-x-8 mt-2">
//                 <a href="#" className="text-blue-600 font-bold" style={{color:'#FF165D'}}>Giới thiệu</a>
//                 <a href="#" className="text-gray-600">Sứ mệnh</a>
//                 <a href="#" className="text-gray-600">Tầm nhìn</a>
//                 <a href="#" className="text-gray-600">Giá trị cốt lõi</a>
//             </nav>
//         </div>
//         {/* Giới thiệu */}
//         {/* <div className="flex justify-center items-center px-4 py-5 w-full">
//             <div className="mr-40 text-justify">
//                 <p className="text-4xl font-bold text-gray-800 leading-none" style={{textShadow:'0px 5px 4px #2E2583'}}>
//                     HAIR<br/>SALON
//                 </p>
//             </div>
//             <div className="max-w-xl text-justify text-base">
//                 <p>
//                     tự hào là chuỗi salon chuyên gia, có uy tín trong ngành làm đẹp tại Việt Nam. Tóc đẹp mỗi ngày là lời cam kết của Lê Hiếu Hair Salon với khách hàng và vẻ đẹp nghệ thuật không chỉ nằm ở sự hào nhoáng của vẻ ngoài, mà còn nằm ở tiêu chuẩn “vàng” của mỗi nhà sáng tạo. Một mái tóc đẹp, ngoài màu sắc xu hướng, kiểu dáng hợp thời trang mà còn phải toát lên nét đẹp từ sức khỏe mạnh của mái tóc từ bên trong.
//                 </p>
//             </div>
            
//         </div>
        
//         <p className="flex justify-center items-center mr-32 ml-32 mb-5">
//             Với cam kết không ngừng đổi mới và phát triển, chúng tôi hướng tới việc đáp ứng sự đa dạng phong cách của khách hàng. Traky không chỉ hứa hẹn mang đến cho bạn một trải nghiệm làm đẹp, mà còn tạo ra một hành trình khám phá và tận hưởng sự hoàn hảo của cá nhân.
//         </p> */}

// <div className="flex justify-center items-start px-4 py-5">
//   {/* Container for both elements */}
//   <div className="flex flex-row space-x-4 w-3/4">

//     {/* First div (HAIR SALON) */}
//     <div className="flex-grow text-justify">
//       <p className="text-4xl font-bold text-gray-800 leading-none" style={{textShadow:'0px 5px 4px #2E2583'}}>
//         HAIR<br/>SALON
//       </p>
//     </div>

//     {/* Second div (description) */}
//     <div className="flex-grow max-w-xl text-justify text-base">
//       <p>
//         tự hào là chuỗi salon chuyên gia, có uy tín trong ngành làm đẹp tại Việt Nam. Tóc đẹp mỗi ngày là lời cam kết của Lê Hiếu Hair Salon với khách hàng và vẻ đẹp nghệ thuật không chỉ nằm ở sự hào nhoáng của vẻ ngoài, mà còn nằm ở tiêu chuẩn “vàng” của mỗi nhà sáng tạo. Một mái tóc đẹp, ngoài màu sắc xu hướng, kiểu dáng hợp thời trang mà còn phải toát lên nét đẹp từ sức khỏe mạnh của mái tóc từ bên trong.
//       </p>
//     </div>

//   </div>
// </div>

// {/* Bottom paragraph (with a separate flexbox for alignment) */}
// <p className="flex justify-center items-center mr-32 ml-32 mb-5">
//   Với cam kết không ngừng đổi mới và phát triển, chúng tôi hướng tới việc đáp ứng sự đa dạng phong cách của khách hàng. Traky không chỉ hứa hẹn mang đến cho bạn một trải nghiệm làm đẹp, mà còn tạo ra một hành trình khám phá và tận hưởng sự hoàn hảo của cá nhân.
// </p>




//         {/* Sứ mệnh */}

//         <a href="#" class="flex  flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//     <img class="object-cover w-1/2rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://i.pinimg.com/originals/6b/72/7a/6b727a3d526b5c870639c2758bd5f3d5.jpg" alt=""/>
//     <img class="object-cover w-1/2 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://i.pinimg.com/originals/6b/72/7a/6b727a3d526b5c870639c2758bd5f3d5.jpg" alt=""/>
// </a>

//     </>
       
//     );
// }

// export default AboutUs;








import React, { useState } from 'react';

function AboutUs() {
    const [activeTab, setActiveTab] = useState("gioiThieu");

    const renderContent = () => {
        if (activeTab === "gioiThieu") {
            return (
                <>
                <div className="flex justify-center items-center px-4 py-5 w-full">
            <div className="mr-40 text-justify">
                <p className="text-4xl font-bold text-gray-800 leading-none" style={{textShadow:'0px 5px 4px #2E2583'}}>
                    HAIR<br/>SALON
                </p>
            </div>
            <div className="max-w-xl text-justify text-base">
                <p>
                    tự hào là chuỗi salon chuyên gia, có uy tín trong ngành làm đẹp tại Việt Nam. Tóc đẹp mỗi ngày là lời cam kết của Lê Hiếu Hair Salon với khách hàng và vẻ đẹp nghệ thuật không chỉ nằm ở sự hào nhoáng của vẻ ngoài, mà còn nằm ở tiêu chuẩn “vàng” của mỗi nhà sáng tạo. Một mái tóc đẹp, ngoài màu sắc xu hướng, kiểu dáng hợp thời trang mà còn phải toát lên nét đẹp từ sức khỏe mạnh của mái tóc từ bên trong.
                </p>
            </div>
            
        </div>
        
        <p className="flex justify-center items-center mr-32 ml-32 mb-5">
            Với cam kết không ngừng đổi mới và phát triển, chúng tôi hướng tới việc đáp ứng sự đa dạng phong cách của khách hàng. Traky không chỉ hứa hẹn mang đến cho bạn một trải nghiệm làm đẹp, mà còn tạo ra một hành trình khám phá và tận hưởng sự hoàn hảo của cá nhân.
        </p>

                </>
                
            );
        } else if (activeTab === "suMenh") {
            return (
                <div className="flex justify-center items-center py-5">
                    <p className="text-center text-base max-w-3xl text-gray-800">
                        Sứ mệnh của chúng tôi là mang đến cho khách hàng những trải nghiệm làm đẹp tốt nhất với các dịch vụ chuyên nghiệp và tận tâm. Chúng tôi luôn nỗ lực trong việc phát triển để đáp ứng và vượt qua mong đợi của khách hàng.
                    </p>
                </div>
            );
        }
    };

    return (
        <>
  
            <nav 
                className="flex bg-gradient-to-r from-[#D5D2D2] via-[#D5D2D2] to-[#908888] p-2" 
                style={{ background: 'linear-gradient(90deg, #D5D2D2 40%, #908888 93%)', fontFamily: "Labrada" }} 
                aria-label="Breadcrumb"
            >
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center ml-10 ">
                        <a href="#" className="inline-flex items-center text-lg font-medium text-black hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Trang chủ
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <a href="#" className="ms-1 text-lg font-bold text-black hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                                Về chúng tôi
                            </a>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="text-center  mt-5">
            <h1 className="text-lg font-bold">HAIR SALON</h1>
            <nav className="flex justify-center space-x-8 mt-2">
                <a
                    href="#"
                    onClick={() => setActiveTab("gioiThieu")}
                    className={`text-lg font-bold ${activeTab === "gioiThieu" ? "text-[rgb(255,22,93)]" : "text-gray-600"}`}
                >
                    Giới thiệu
                </a>
                <a
                        href="#"
                        onClick={() => setActiveTab("suMenh")}
                        className={`text-lg font-bold ${activeTab === "suMenh" ? "text-[rgb(255,22,93)]" : "text-gray-600"}`}
                    >
                        Sứ mệnh
                    </a>
                <a href="#" className="text-gray-600">Tầm nhìn</a>
                <a href="#" className="text-gray-600">Giá trị cốt lõi</a>
            </nav>
        </div>

            {renderContent()}
        </>
    );
}

export default AboutUs;
