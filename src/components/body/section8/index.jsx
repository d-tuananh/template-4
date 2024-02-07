export const Section8 = () => {
  return (
    <section className="bg-[url('/img21.png')] bg-no-repeat bg-cover">
      <div className="container py-[4rem]">
        <div className="xl:w-1/2 rounded-2xl overflow-hidden ">
          <div className="flex flex-col justify-center items-center gap-2 bg-dd/400 text-white py-5">
            <h3 className="text-3xl font-bold">Đăng ký tư vấn miễn phí</h3>
            <div className="px-4">
              <span>
                Đặt hẹn ngay để nhận tư vấn và chúng tôi sẽ xếp lịch khám kịp
                thời!
              </span>
            </div>
          </div>
          <form className=" bg-white p-8 grid grid-cols-1 sm:grid-rows-4 sm:grid-flow-col gap-4">
            <div className="relative cursor-pointer sm:col-span-2">
              <input
                type="text"
                placeholder="Họ và tên*"
                required
                className="p-2 w-full border-slate-300 border rounded-lg outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
              />
              <span className="bg-white p-1 text-slate-300 absolute left-[1rem] top-1/2 -translate-y-1/2 transition duration-200 input-text">
                Họ và tên*
              </span>
            </div>
            <div className="relative cursor-pointer sm:col-span-2">
              <input
                type="text"
                placeholder="Email*"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                title="Vui lòng nhập một địa chỉ email hợp lệ : user@example.com"
                required
                className="p-2 w-full border-slate-300 border rounded-lg outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
              />
              <span className="bg-white p-1 text-slate-300 absolute left-[1rem] top-1/2 -translate-y-1/2 transition duration-200 input-text">
                Email*
              </span>
            </div>
            <div className="relative cursor-pointer sm:col-span-2">
              <input
                type="text"
                placeholder="Số điện thoại*"
                pattern="[0-9]{10,12}"
                title="Số điện thoại từ 10 đến 12 chữ số"
                required
                className="p-2 w-full border-slate-300 border rounded-lg outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
              />
              <span className="bg-white p-1 text-slate-300 absolute left-[1rem] top-1/2 -translate-y-1/2 transition duration-200 input-text">
                Số điện thoại*
              </span>
            </div>
            <input
              type="date"
              placeholder="Ngày đặt"
              className="rounded-lg p-2 border-slate-300 border sm:col-span-2"
            />
            <textarea
              type=""
              placeholder="Nhập nội dung"
              className="row-span-2 p-2 border border-slate-300 outline-none focus:border-blue-500 rounded-lg"
            />

            <div className="flex items-center gap-2">
              <input type="checkbox" required />
              <p>Tôi không phải người máy</p>
              <div>
                <img src="Check.svg" alt="" />
              </div>
            </div>
            <input
              type="submit"
              value="Gửi yêu cầu"
              className="bg-dd/400 rounded-full p-2 uppercase font-bold text-white cursor-pointer"
            />
          </form>
        </div>
      </div>
    </section>
  )
}
