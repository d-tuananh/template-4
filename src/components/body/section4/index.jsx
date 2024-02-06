const data = [
  {
    url: "src/images/svg/svg_8.svg",
    title: "Đội ngũ bác sĩ giàu kinh nghiệm",
    content:
      "Hiện nay, tại Bệnh viện Đa khoa Phương Đông đáp ứng đầy đủ từ đội ngũ bác sĩ.",
  },
  {
    url: "src/images/svg/svg_9.svg",
    title: "Trang thiết bị hiện đại",
    content:
      "Hiện nay, tại Bệnh viện Đa khoa Phương Đông đáp ứng đầy đủ từ đội ngũ bác sĩ.",
  },
  {
    url: "src/images/svg/svg_10.svg",
    title: "Đảm bảo chất lượng an toàn tuyệt đối",
    content:
      "Hiện nay, tại Bệnh viện Đa khoa Phương Đông đáp ứng đầy đủ từ đội ngũ bác sĩ.",
  },
  {
    url: "src/images/svg/svg_11.svg",
    title: "Dịch vụ chuyên nghiệp",
    content:
      "Hiện nay, tại Bệnh viện Đa khoa Phương Đông đáp ứng đầy đủ từ đội ngũ bác sĩ.",
  },
]
export const Section4 = () => {
  return (
    <section className="">
      <div className="container grid grid-cols-1 xl:grid-cols-2 gap-10 2xl:gap-0">
        <div className="flex flex-col justify-center gap-7 order-last xl:-order-last">
          <h3 className="text-4xl font-bold text-center lg:text-start">
            Tại sao nên chọn gói Ortho-K tại Bệnh viện Đa khoa Phương Đông?
          </h3>
          <p>
            Hiện nay, tại Bệnh viện Đa khoa Phương Đông đáp ứng đầy đủ từ đội
            ngũ bác sĩ có trình độ chuyên môn cao, cơ sở vật chất, trang thiết
            bị kỹ thuật hiện đại giúp quá trình thăm khám và điều trị các bệnh
            về tật khúc xạ an toàn, chính xác. Khi đăng ký sử dụng gói kính
            Ortho - K tại bệnh viện Phương Đông, khách hàng được trải nghiệm
            dịch vụ y tế chất lượng cao cùng với các ưu điểm vượt trội sau
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 justify-center items-center md:even:translate-y-[4rem] md:odd:translate-y-0 border border-solid border-[#EBEBEB] py-5 px-3 rounded-2xl scale-100 hover:scale-110 transition duration-500 ease-in-out shadow-key-green-gradient cursor-pointer"
              >
                <div className="">
                  <img src={item.url} alt={item.title} />
                </div>
                <h4 className="font-bold text-center">{item.title}</h4>
                <p className="text-center">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="2xl:translate-x-[10rem] bg-transparent overflow-hidden ">
          <div className="relative bg-dd/400 rounded-tl-[50%] rounded-br-[50%] overflow-hidden rounded-lg">
            <img src="src/images/png/img8.png" alt="" />
            <button
              className="absolute top-[45%] left-[13%] bg-btn w-fit text-white flex justify-center items-center hover:opacity-70 py-2 px-3 rounded-full gap-2"
              onClick={() => prompt("Vui lòng nhập số điện thoại !")}
            >
              <img src="src/images/png/document.png" alt="" />
              ĐĂNG KÝ TƯ VẤN
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
