const data = [
  {
    url: "public/svg/svg_2.svg",
    titile: "Phục hồi thị lực",
    content:
      "Điều chỉnh độ cận, viễn và thậm chí loạn thị từ nhẹ đến nặng giúp thị lực phục hồi vào ban ngày",
  },
  {
    url: "public/svg/svg_3.svg",
    titile: "Tự do hoạt động",
    content:
      "Điều chỉnh độ cận, viễn và thậm chí loạn thị từ nhẹ đến nặng giúp thị lực phục hồi vào ban ngày",
  },
  {
    url: "public/svg/svg_4.svg",
    titile: "Khắc phục khô mắt",
    content:
      "Điều chỉnh độ cận, viễn và thậm chí loạn thị từ nhẹ đến nặng giúp thị lực phục hồi vào ban ngày",
  },
  {
    url: "public/svg/svg_5.svg",
    titile: "Không cần phẫu thuật",
    content:
      "Điều chỉnh độ cận, viễn và thậm chí loạn thị từ nhẹ đến nặng giúp thị lực phục hồi vào ban ngày",
  },
  {
    url: "public/svg/svg_6.svg",
    titile: "Thị lực được cải thiện",
    content:
      "Điều chỉnh độ cận, viễn và thậm chí loạn thị từ nhẹ đến nặng giúp thị lực phục hồi vào ban ngày",
  },
  {
    url: "public/svg/svg_7.svg",
    titile: "Sử dụng đơn giản",
    content:
      "Điều chỉnh độ cận, viễn và thậm chí loạn thị từ nhẹ đến nặng giúp thị lực phục hồi vào ban ngày",
  },
]
export const Section2 = () => {
  return (
    <section className="">
      <div className="container">
        <div className="grid xl:grid-cols-2 gap-5 xl:gap-32">
          <div className="text-4xl font-bold text-center lg:text-start">
            <span>Tầm quan trọng của việc sử dụng kính Ortho-K</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-justify">
              Kính Ortho-K là phương pháp sử dụng kính áp tròng cứng được thiết
              kế đặc biệt với mỗi người để định hình tạm thời giác mạc và cải
              thiện thị lực. Kính Ortho-K thường đeo vào ban đêm để định hình
              lại bề mặt trước của mắt. Mà không đem tới bất kỳ tổn thương nào
              cho mắt.
            </span>
            <span className="text-justify">
              Nhiều nghiên cứu lâm sàng cho thấy kính Ortho K mang lại hiệu quả
              trong việc giảm tiến triển tật khúc xạ khoảng 50% ở trẻ và thậm
              chí một số trẻ có kết quả tốt hơn. Ngoài ra, kính Ortho-K có những
              ưu điểm sau:
            </span>
            <button
              className="bg-btn w-fit text-white flex justify-center items-center hover:opacity-70 py-2 px-3 rounded-full gap-2 mx-auto lg:mx-0"
              onClick={() => prompt("Vui lòng nhập số điện thoại !")}
            >
              <img src="public/img_png/document.png" alt="" />
              ĐĂNG KÝ TƯ VẤN
            </button>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-28 gap-y-12">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start gap-3 border border-solid p-5 rounded-3xl shadow-key-green-gradient"
            >
              <div className="bg-dd/400 w-fit p-3 rounded-tl-[40%] rounded-br-[40%] rounded-md">
                <img src={item.url} alt="" />
              </div>
              <h4 className="text-xl font-bold">{item.titile}</h4>
              <div>
                <span>{item.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
