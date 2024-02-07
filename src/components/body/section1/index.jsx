export const Section1 = () => {
  return (
    <section className="relative">
      <div className="container grid xl:grid-cols-2 gap-7 2xl:gap-0">
        <div className="flex flex-col gap-3 justify-center items-center xl:items-start order-last xl:-order-1">
          <h2 className="text-6xl">Hãy để đôi mắt là cửa sổ của tâm hồn</h2>
          <div className="text-justify">
            <span>
              Ortho-K (Orthokeratology - tạo hình giác mạc) là phương pháp sử
              dụng kính áp tròng cứng được thiết kế đặc biệt với mỗi người để
              định hình tạm thời giác mạc và cải thiện thị lực. Kính Ortho-K
              thường đeo vào ban đêm để định hình lại bề mặt trước của mắt.
            </span>
          </div>
          <div>
            <span className="text-lg font-bold">
              Siêu khuyến mãi{" "}
              <span className="text-color text-4xl">tháng 8</span>, giảm ngay{" "}
              <span className="text-color text-4xl">30%</span> khi đăng ký tại
              đây!
            </span>
          </div>
          <form className="border border-solid border-[#50C577]  w-4/5 flex items-center justify-between p-2 pl-5 gap-2 rounded-full">
            <input
              type="tel"
              className="w-full outline-none"
              pattern="[0-9]{10,12}"
              placeholder="Nhập số điện thoại..."
              title="Số điện thoại từ 10 đến 12 chữ số"
            />
            <button className="min-w-fit flex justify-center items-center gap-2 p-2 rounded-full text-white bg-linear-green hover:opacity-70 shadow-key-green-gradient">
              <img src="public/svg/send.svg" alt="" />
              GỬI THÔNG TIN
            </button>
          </form>
        </div>
        <div className="2xl:translate-x-[10rem] bg-transparent overflow-hidden">
          <div className="bg-dd/400 rounded-tl-[50%] rounded-br-[50%] rounded-lg overflow-hidden">
            <img src="public/img_png/img2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
