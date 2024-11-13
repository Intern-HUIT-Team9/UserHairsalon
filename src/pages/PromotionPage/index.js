import React from "react";
import gift1 from "../../assets/images/gift/cv2010-770x403-fotor-bg-remover-20241021224638.png"
import gift2 from "../../assets/images/gift/ong-gia-noel-2-fotor-bg-remover-20241021231142.png"
import gift3 from "../../assets/images/gift/ngoi-sao-564181-fotor-bg-remover-20241021231023.png"
import gift4 from "../../assets/images/gift/Remove-bg.ai_1729523507356.png"
import styles from "../PrivatePolicy/PrivatePolicy.module.scss"


function PromotionPage() {
    return ( 
        <>
            <nav 
                className="flex bg-gradient-to-r from-[#D5D2D2] via-[#D5D2D2] to-[#908888] p-2" 
                style={{ background: 'linear-gradient(90deg, #D5D2D2 40%, #908888 93%)', fontFamily:"Labrada" }} 
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
                                Chương trình khuyến mãi
                            </a>
                        </div>
                    </li>
                </ol>
            </nav>
            {/* <div className="flex justify-center align-middle">
                <div className="grid grid-cols-3 gap-4 ">
                <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
              <img
                className={`w-full h-full object-cover`}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMs3at6HT_t0iXnCq-_DDH_7m5AkxirtKpw2N7vYeD0PJojOPcBP3jQjEpg2OjHWQQoIc&usqp=CAU'
                alt="Hair Style"
              />

<button
                  className="absolute mt-2 text-[#701318] px-4 py-2 rounded-lg font-bold"
                  style={{
                    marginLeft: '56%',
                    background: 'linear-gradient(180deg, rgb(248, 246, 239) 0%, rgb(195, 157, 90) 53%)',
                    boxShadow: '0px 4px 10px rgba(255, 223, 186, 0.6)' 
                  }}
                >
                  Đặt lịch ngay
                </button>


                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4">
                  <p className="text-lg font-semibold">Kiểu tóc: Uốn gợn sóng</p>
                  <p className="text-lg">Giá: 350.000 đ</p>
<button>
    Đat
</button>
                


                </div>
            </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMs3at6HT_t0iXnCq-_DDH_7m5AkxirtKpw2N7vYeD0PJojOPcBP3jQjEpg2OjHWQQoIc&usqp=CAU" alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMs3at6HT_t0iXnCq-_DDH_7m5AkxirtKpw2N7vYeD0PJojOPcBP3jQjEpg2OjHWQQoIc&usqp=CAU" alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMs3at6HT_t0iXnCq-_DDH_7m5AkxirtKpw2N7vYeD0PJojOPcBP3jQjEpg2OjHWQQoIc&usqp=CAU" alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
        </div>
        
      </div> */}

            <div className="flex items-center gap-3 mt-3 mb-3">
                <div className={styles.borderFrame}></div>
                <span className="font-bold items-center text-3xl ">Các ưu đãi, khuyến mãi dịp lễ</span>
            </div>

            <div className="flex justify-center align-middle">
            <div className="grid grid-cols-3 gap-0 ">

                <div className="max-w-sm h-96 m-4 rounded overflow-hidden shadow-lg relative w-80"
            style={{
                background: 'linear-gradient(rgb(206 242 255 / 61%) 0%, rgb(0 219 224 / 61%) 51%)'
            }}
            >
            <h2 className="mt-3 text-lg font-bold text-center">
                    VietNamese<br/> Woman’s Day
                </h2>
                
                <img
                    className={`absolute w-full h-1/2 object-cover bottom-24`}
                    src={gift1}
                    alt="Hair Style"
                />
                  <button
                            className="w-32 items-center justify-center absolute inset-x-0 bottom-7 mt-2 text-[#701318] px-4 py-2 rounded-lg font-bold"
                            style={{
                                left: '50%',
                                borderRadius:'30px',
                                transform: 'translateX(-50%)',
                                background: 'linear-gradient(180deg, #FC7E7E 100%, #FCD2D2 49%)',
                                boxShadow: '0px 4px 10px rgba(255, 223, 186, 0.6)',
                            }}
                            >
                            Dùng ngay
                        </button>


                
                </div>

                <div className="max-w-sm h-96 m-4 rounded overflow-hidden shadow-lg relative w-80"
                    style={{
                        background: 'linear-gradient(rgb(206 242 255 / 61%) 0%, rgb(0 219 224 / 61%) 51%)'
                    }}
                >
                <h2 className="mt-3 text-lg font-bold text-center">
                    Merry<br/> ChristMas
                </h2>
                <div className="absolute flex h-full">
                <img
                    className={` w-2/3 h-1/2 object-cover bottom-24`}
                    src={gift2}
                    alt="Hair Style"
                />
                <img
                    className={` w-1/3 h-1/2 object-cover `}
                    src={gift3}
                    alt="Hair Style"
                />
                </div>
                <button
                            className="w-32 items-center justify-center absolute inset-x-0 bottom-7 mt-2 text-[#701318] px-4 py-2 rounded-lg font-bold"
                            style={{
                                left: '50%',
                                borderRadius:'30px',
                                transform: 'translateX(-50%)',
                                background: 'linear-gradient(180deg, #FC7E7E 100%, #FCD2D2 49%)',
                                boxShadow: '0px 4px 10px rgba(255, 223, 186, 0.6)',
                            }}
                            >
                            Dùng ngay
                        </button>


                
                </div>
                <div className="max-w-sm h-96 m-4 rounded overflow-hidden shadow-lg relative w-80"
                    style={{
                        background: 'linear-gradient(rgb(206 242 255 / 61%) 0%, rgb(0 219 224 / 61%) 51%)'
                    }}
                >
                <h2 className="mt-3 text-lg font-bold text-center">
                    VietNamese<br/> Woman’s Day
                </h2>
                <img
                    className={`absolute w-full h-1/2 object-cover bottom-24`}
                    src={gift1}
                    alt="Hair Style"
                />
                 <button
                    className="w-32 items-center justify-center absolute inset-x-0 bottom-7 mt-2 text-[#701318] px-4 py-2 rounded-lg font-bold"
                    style={{
                        left: '50%',
                        borderRadius:'30px',
                        transform: 'translateX(-50%)',
                        background: 'linear-gradient(180deg, #FC7E7E 100%, #FCD2D2 49%)',
                        boxShadow: '0px 4px 10px rgba(255, 223, 186, 0.6)',
                    }}
                    >
                    Dùng ngay
                </button>


                
                </div>

            </div>
            
            </div>





            <div className="flex items-center gap-3 mt-3 mb-3">
                <div className={styles.borderFrame}></div>
                <span className="font-bold items-center text-3xl ">Các gói ưu đãi, khuyến mãi dành cho thành viên</span>
            </div>

            <div className="flex justify-center align-middle">
                <div className="grid grid-cols-4 gap-0 ">

                    <div className="max-w-sm h-96 m-4 rounded overflow-hidden shadow-lg relative w-80"
                            style={{
                                background: 'linear-gradient(rgb(255 244 244 / 61%) 0%, rgb(255 135 147 / 61%) 51%)'
                            }}
                        >
                            <h2 className="mt-3 text-lg font-bold text-center uppercase">
                                Membership<br/>Discount
                            </h2>
                            <img
                                className={`absolute w-full h-1/2 object-cover bottom-24`}
                                src={gift4}
                                alt="Hair Style"
                            />
                            <button
                                className="w-32 items-center justify-center absolute inset-x-0 bottom-7 mt-2 text-[#701318] px-4 py-2 rounded-lg font-bold"
                                style={{
                                    left: '50%',
                                    borderRadius:'30px',
                                    transform: 'translateX(-50%)',
                                    background: 'linear-gradient(180deg, #FC7E7E 100%, #FCD2D2 49%)',
                                    boxShadow: '0px 4px 10px rgba(255, 223, 186, 0.6)',
                                }}
                                >
                                Dùng ngay
                            </button>


                        
                    </div>

                    <div className="max-w-sm h-96 m-4 rounded overflow-hidden shadow-lg relative w-80"
                        style={{
                            background: 'linear-gradient(rgb(255 244 244 / 61%) 0%, rgb(255 135 147 / 61%) 51%)'
                        }}
                    >
                        <h2 className="mt-3 text-lg font-bold text-center uppercase">
                            Membership<br/>Discount
                        </h2>
                        <img
                            className={`absolute w-full h-1/2 object-cover bottom-24`}
                            src={gift4}
                            alt="Hair Style"
                        />
                        <button
                            className="w-32 items-center justify-center absolute inset-x-0 bottom-7 mt-2 text-[#701318] px-4 py-2 rounded-lg font-bold"
                            style={{
                                left: '50%',
                                borderRadius:'30px',
                                transform: 'translateX(-50%)',
                                background: 'linear-gradient(180deg, #FC7E7E 100%, #FCD2D2 49%)',
                                boxShadow: '0px 4px 10px rgba(255, 223, 186, 0.6)',
                            }}
                            >
                            Dùng ngay
                        </button>


                    
                    </div>
                    <div className="max-w-sm h-96 m-4 rounded overflow-hidden shadow-lg relative w-80"
                        style={{
                            background: 'linear-gradient(rgb(255 244 244 / 61%) 0%, rgb(255 135 147 / 61%) 51%)'
                        }}
                    >
                        <h2 className="mt-3 text-lg font-bold text-center uppercase">
                            Membership<br/>Discount
                        </h2>
                        <img
                            className={`absolute w-full h-1/2 object-cover bottom-24`}
                            src={gift4}
                            alt="Hair Style"
                        />
                        <button
                            className="w-32 items-center justify-center absolute inset-x-0 bottom-7 mt-2 text-[#701318] px-4 py-2 rounded-lg font-bold"
                            style={{
                                left: '50%',
                                borderRadius:'30px',
                                transform: 'translateX(-50%)',
                                background: 'linear-gradient(180deg, #FC7E7E 100%, #FCD2D2 49%)',
                                boxShadow: '0px 4px 10px rgba(255, 223, 186, 0.6)',
                            }}
                            >
                            Dùng ngay
                        </button>


                    
                    </div>


                    <div className="max-w-sm h-96 m-4 rounded overflow-hidden shadow-lg relative w-80"
                        style={{
                            background: 'linear-gradient(rgb(255 244 244 / 61%) 0%, rgb(255 135 147 / 61%) 51%)'
                        }}
                    >
                        <h2 className="mt-3 text-lg font-bold text-center uppercase">
                            Membership<br/>Discount
                        </h2>
                        <img
                            className={`absolute w-full h-1/2 object-cover bottom-24`}
                            src={gift4}
                            alt="Hair Style"
                        />
                        <button
                            className="w-32 items-center justify-center absolute inset-x-0 bottom-7 mt-2 text-[#701318] px-4 py-2 rounded-lg font-bold"
                            style={{
                                left: '50%',
                                borderRadius:'30px',
                                transform: 'translateX(-50%)',
                                background: 'linear-gradient(180deg, #FC7E7E 100%, #FCD2D2 49%)',
                                boxShadow: '0px 4px 10px rgba(255, 223, 186, 0.6)',
                            }}
                            >
                            Dùng ngay
                        </button>


                    
                    </div>

                </div>
            
            </div>
        </>
        
     );
}

export default PromotionPage;