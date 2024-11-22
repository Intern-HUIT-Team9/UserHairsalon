import React from "react";
import gift1 from "../../assets/images/gift/cv2010-770x403-fotor-bg-remover-20241021224638.png"
import gift2 from "../../assets/images/gift/ong-gia-noel-2-fotor-bg-remover-20241021231142.png"
import gift3 from "../../assets/images/gift/ngoi-sao-564181-fotor-bg-remover-20241021231023.png"
import gift4 from "../../assets/images/gift/Remove-bg.ai_1729523507356.png"
import styles from "../PrivatePolicy/PrivatePolicy.module.scss"
import banner from "../../assets/images/gift/banner.webp"
function PromotionPage() {
    return (
        <>
            <nav
                className="flex bg-gradient-to-r from-[#D5D2D2] via-[#D5D2D2] to-[#908888] p-2"
                style={{ background: 'linear-gradient(90deg, #f3f0f0 40%, #e6e6e6 93%)', fontFamily: "Labrada" }}
                aria-label="Breadcrumb"
            >
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center ml-10 ">
                        <a href="#" className=" inline-flex items-center text-lg font-medium text-black hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
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
                                Chương trình khuyến mãi
                            </a>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="flex items-center gap-0 mt-3 mb-3">
                <div className={styles.borderFrame}></div>
                <span className="font-bold items-center text-3xl ">Chương trình khuyến mãi</span>
            </div>
            {/* banner */}
            <div className="relative w-full" data-carousel="slide">
                <div className="relative h-[500px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg">
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={banner} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://quatangsangtaovn.com/wp-content/uploads/2020/09/banner-qu%C3%A0-t%E1%BA%B7ng-20-th%C3%A1ng-10-%C4%91%C3%A3-s%E1%BB%ADa.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={banner} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://quatangsangtaovn.com/wp-content/uploads/2020/09/banner-qu%C3%A0-t%E1%BA%B7ng-20-th%C3%A1ng-10-%C4%91%C3%A3-s%E1%BB%ADa.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={banner} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                </div>
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-gray-600 dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>

                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-gray-600 dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"
                        >
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>


            <div className="flex items-center gap-3 mt-3 mb-3">
                <div className={styles.borderFrame}></div>
                <span className="font-bold items-center text-3xl ">Các ưu đãi, khuyến mãi dịp lễ</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-5">

                <div className="max-w-sm h-96 m-4 rounded overflow-hidden shadow-lg relative w-80"
                    style={{
                        background: 'linear-gradient(rgb(206 242 255 / 61%) 0%, rgb(0 219 224 / 61%) 51%)'
                    }}
                >
                    <h2 className="mt-3 text-lg font-bold text-center">
                        VietNamese<br /> Woman’s Day
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
                            borderRadius: '30px',
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
                        Merry<br /> ChristMas
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
                            borderRadius: '30px',
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
                        VietNamese<br /> Woman’s Day
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
                            borderRadius: '30px',
                            transform: 'translateX(-50%)',
                            background: 'linear-gradient(180deg, #FC7E7E 100%, #FCD2D2 49%)',
                            boxShadow: '0px 4px 10px rgba(255, 223, 186, 0.6)',
                        }}
                    >
                        Dùng ngay
                    </button>
                </div>


            </div>

            <div className="flex items-center gap-3 mt-3 mb-3">
                <div className={styles.borderFrame}></div>
                <span className="font-bold items-center text-3xl ">Các gói ưu đãi, khuyến mãi dành cho thành viên</span>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-5">

                <div className="max-w-sm h-96 m-4 rounded overflow-hidden shadow-lg relative w-80"
                    style={{
                        background: 'linear-gradient(rgb(255 244 244 / 61%) 0%, rgb(255 135 147 / 61%) 51%)'
                    }}
                >
                    <h2 className="mt-3 text-lg font-bold text-center uppercase">
                        Membership<br />Discount
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
                            borderRadius: '30px',
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
                        Membership<br />Discount
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
                            borderRadius: '30px',
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
                        Membership<br />Discount
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
                            borderRadius: '30px',
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
                        Membership<br />Discount
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
                            borderRadius: '30px',
                            transform: 'translateX(-50%)',
                            background: 'linear-gradient(180deg, #FC7E7E 100%, #FCD2D2 49%)',
                            boxShadow: '0px 4px 10px rgba(255, 223, 186, 0.6)',
                        }}
                    >
                        Dùng ngay
                    </button>
                </div>

            </div>


        </>

    );
}

export default PromotionPage;










