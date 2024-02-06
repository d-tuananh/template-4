export const Footer = () => {
  return (
    <div className="container py-10 text-white grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[4rem] xl:gap-[6rem]">
      <div className="flex flex-col gap-3">
        <div className="">
          <a href="#">
            <img src="src/images/png/logo 1.png" alt="" />
          </a>
        </div>
        <h5 className="font-bold uppercase">Bệnh viện đa khoa phương đông</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          reiciendis quae vero sequi reprehenderit numquam quaerat deserunt
          doloremque sit eligendi?
        </p>
      </div>
      <div className=" flex flex-col gap-3">
        <h5 className="font-bold uppercase">Thông tin liên hệ</h5>
        <div className="flex flex-col gap-3">
          <p>
            Địa chỉ:{" "}
            <span className="font-bold">
              Số 9, Phố Viên, Cổ Nhuế 2, Bắc Từ Liêm, Hà Nội
            </span>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:bvphuongdong@phuongdonghospital.vn"
              className="font-bold"
            >
              bvphuongdong@phuongdonghospital.vn
            </a>
          </p>
          <p className="font-bold">
            <a href="mailto:info.benhvienphuongdong@gmail.com">
              info.benhvienphuongdong@gmail.com
            </a>
          </p>
          <p>
            Tổng đài tư vấn:{" "}
            <a href="tel:19001806" className="font-bold">
              19001806
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h5 className="font-bold uppercase">Giờ làm việc</h5>
        <div className="flex flex-col gap-3">
          <p>
            Từ <span className="font-bold">7:00 - 19:00</span> từ{" "}
            <span className="font-bold">Thứ 2</span> đến{" "}
            <span className="font-bold">CN</span>
          </p>
          <p>
            Cấp cứu 24/7:{" "}
            <a href="tel:0833 015 115" className="font-bold">
              0833 015 115
            </a>
          </p>
          <p>
            Hotline Tiêm chủng:{" "}
            <a href="tel:0911 615 115" className="font-bold">
              0911 615 115
            </a>
          </p>
          <p>
            Hotline Hỗ trợ khách hàng:{" "}
            <a href="tel:1900 1806" className="font-bold">
              1900 1806
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h5 className="font-bold uppercase">Theo dõi chúng tôi</h5>
        <div className="flex gap-5">
          <div className="w-8 h-8 flex justify-center items-center rounded-full bg-white">
            <img src="src/images/svg/fb.svg" alt="" />
          </div>
          <div className="w-8 h-8 flex justify-center items-center rounded-full bg-white">
            <img src="src/images/svg/ytb.svg" alt="" />
          </div>
          <div className="w-8 h-8 flex justify-center items-center rounded-full bg-white">
            <img src="src/images/svg/tiktok.svg" alt="" />
          </div>
        </div>
        <div className="">
          <img
            src="src/images/png/thong-bao-website-voi-bo-cong-thuong_grande_waifu2x_photo_noise3_scale_tta_1 1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
