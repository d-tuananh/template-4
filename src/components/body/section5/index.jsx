import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

import { Navigation } from "swiper/modules"
import { CustomBtn } from "../../customSwiper/customBtn"

const data = [
  {
    img: "img9.png",
    name: "NGUYỄN TRUNG CHÍNH",
    job: "PGS.TS. Bác sĩ Ung bướu",
    star: "5-star.svg",
    vote: "4.8/5 (38 bình chọn)",
  },
  {
    img: "img10.png",
    name: "NGUYỄN TRUNG CHÍNH",
    job: "PGS.TS. Bác sĩ Ung bướu",
    star: "5-star.svg",
    vote: "4.8/5 (38 bình chọn)",
  },
  {
    img: "img11.png",
    name: "NGUYỄN TRUNG CHÍNH",
    job: "PGS.TS. Bác sĩ Ung bướu",
    star: "5-star.svg",
    vote: "4.8/5 (38 bình chọn)",
  },
  {
    img: "img12.png",
    name: "NGUYỄN TRUNG CHÍNH",
    job: "PGS.TS. Bác sĩ Ung bướu",
    star: "5-star.svg",
    vote: "4.8/5 (38 bình chọn)",
  },
  {
    img: "img9.png",
    name: "NGUYỄN TRUNG CHÍNH",
    job: "PGS.TS. Bác sĩ Ung bướu",
    star: "5-star.svg",
    vote: "4.8/5 (38 bình chọn)",
  },
  {
    img: "img10.png",
    name: "NGUYỄN TRUNG CHÍNH",
    job: "PGS.TS. Bác sĩ Ung bướu",
    star: "5-star.svg",
    vote: "4.8/5 (38 bình chọn)",
  },
  {
    img: "img11.png",
    name: "NGUYỄN TRUNG CHÍNH",
    job: "PGS.TS. Bác sĩ Ung bướu",
    star: "5-star.svg",
    vote: "4.8/5 (38 bình chọn)",
  },
  {
    img: "img12.png",
    name: "NGUYỄN TRUNG CHÍNH",
    job: "PGS.TS. Bác sĩ Ung bướu",
    star: "5-star.svg",
    vote: "4.8/5 (38 bình chọn)",
  },
]

export const Section5 = () => {
  return (
    <section className="bg-[url('line.png')] bg-no-repeat bg-bottom">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-10">
          Đội ngũ bác sĩ của chúng tôi
        </h2>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            modules={[Navigation]}
            className="mySwiper relative"
            breakpoints={{
              740: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1324: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-3 justify-center items-center border border-solid rounded-tl-[25%] rounded-3xl pb-3 bg-white">
                  <div className="bg-dd/400 w-full overflow-hidden rounded-tl-[25%] rounded-br-[25%] flex justify-center">
                    <img src={item.img} alt="" />
                  </div>
                  <h4 className="text-lg font-bold">{item.name}</h4>
                  <p className="opacity-70">{item.job}</p>
                  <div>
                    <img src={item.star} alt="" />
                  </div>
                  <p className="opacity-70">{item.vote}</p>
                </div>
              </SwiperSlide>
            ))}
            <div className="absolute top-1/2 -translate-y-1/2 z-30 flex justify-between w-full">
              <CustomBtn />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
