function BookAppoinmentPage() {
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
                                Đặt lịch
                            </a>
                        </div>
                    </li>
                </ol>
            </nav>
            <div 
                className="relative flex items-center justify-center min-h-screen" 
                style={{
                    margin: '10px 20px',
                }}
            >
                <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{
                    backgroundImage: `url('https://cdn.hostingviet.vn/data/tinymce/2023/hinh-nen-may-tinh-4k-1.jpg')`,
                    filter: 'blur(2px)',
                    opacity: 1,
                    zIndex: -1,
                    borderTopLeftRadius: '50%', 
                    borderBottomLeftRadius: '50%',
                    margin:'10px 20px'
                    }} 
                ></div>
                <h2 className="absolute text-white font-bold left-24" style={{fontSize:"40px"}} >Đặt lịch</h2>

                <div className="bg-white shadow-xl p-8 w-full md:w-1/2 mx-4 left-[25%] relative opacity-90">
                    <h2 className="text-2xl font-semibold text-center mb-6 relative">ĐẶT LỊCH</h2>
                    <form>
                    <h2 className="text-xl font-semibold mb-6">Thông tin cá nhân</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Họ và tên <font color="red">*</font></label>
                        <input
                        type="text"
                        placeholder="Nhập họ và tên"
                        className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Số điện thoại <font color="red">*</font></label>
                        <input
                        type="text"
                        placeholder="Nhập số điện thoại"
                        className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <h2 className="text-xl font-semibold mb-6">Thông tin đặt lịch</h2>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                        <label className="block text-gray-700 font-medium mb-1"><i className="fa-solid fa-location-dot" style={{color:"#AD5389"}}></i>&nbsp;Tỉnh/Thành Phố</label>
                        <select className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-purple-500">
                            <option>TP Hồ Chí Minh</option>
                            <option>Hà Nội</option>
                        </select>
                        </div>
                        <div>
                        <label className="block text-gray-700 font-medium mb-1"><i className="fa-solid fa-location-dot" style={{color:"#AD5389"}}></i>&nbsp;Quận/Huyện</label>
                        <select className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-purple-500">
                            <option>Quận Tân Phú</option>
                            <option>Quận 1</option>
                        </select>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Chọn salon</label>
                        <input
                        type="text"
                        placeholder="Nhập tên salon"
                        className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                        <label className="block text-gray-700 font-medium mb-1"><i className="fa-brands fa-dropbox" style={{color:"#AD5389"}}></i>&nbsp;Dịch vụ</label>
                        <select className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-purple-500">
                            <option>Uốn/Duỗi/Nhuộm</option>
                            <option>Cắt tóc</option>
                        </select>
                        </div>
                        <div>
                        <label className="block text-gray-700 font-medium mb-1">Thợ cắt tóc</label>
                        <select className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-purple-500">
                            <option>Nguyễn Văn A</option>
                            <option>Trần Thị B</option>
                        </select>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1"><i className="fa-solid fa-calendar-days" style={{color:"#AD5389"}}></i>&nbsp;Ngày, giờ hẹn</label>
                        <input
                        type="datetime-local"
                        className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg mt-4 hover:bg-purple-700"
                        style={{background: 'linear-gradient(90deg, #AD5389 25%, #3C1053 100%)'}} 
                    >
                        <i className="fa-solid fa-paper-plane" style={{color:"white"}}></i>&nbsp;&nbsp;ĐẶT LỊCH
                    </button>
                    </form>
                </div>
            </div>
        </>
        
     );
}

export default BookAppoinmentPage;